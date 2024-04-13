import express from 'express';
import  { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import multer from 'multer';
import path from 'path';
import * as fs from 'fs'

dotenv.config();

import {getPinnedFiles, pinFileToIPFS, pinJSONToIPFS} from "./provider/pinata";

const app: Express = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT;

// Configure Multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, 'uploads')); // Set the directory where files will be stored
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname); // Set the filename
    },
});

const upload = multer({ storage: storage });


app.post('/upload', upload.single('file'), async (req: Request, res: Response) => {
    try {
        if (!req.file) {
            return res.status(400).send('No files were uploaded.');
        }

        const {componentID, componentDesigner, title, description} = req.body;

        const pinnedDesign = await pinFileToIPFS(req?.file?.filename)
        const attributes = [
            {
                trait_type: "componentID",
                value: componentID
            },
            {
                trait_type: "componentDesigner",
                value: componentDesigner
            }
        ]
        const metadata = {
            title,
            attributes,
            description,
            design: pinnedDesign?.IpfsHash,
            image: process.env.CAD_PLACEHOLDER_IMAGE_HASH as string,
            componentID
        }

        console.log(metadata)

        const pinnedJSON = await pinJSONToIPFS(metadata)

        fs.unlinkSync(req?.file?.path as string);

        return res.json({
            hash: pinnedJSON,
        }).status(201)

    } catch (err) {
        return res.json(err).status(500)
    }
})


app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
