"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config();
const pinata_1 = require("./provider/pinata");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
const port = process.env.PORT;
// Configure Multer for file uploads
const storage = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path_1.default.join(__dirname, 'uploads')); // Set the directory where files will be stored
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname); // Set the filename
    },
});
const upload = (0, multer_1.default)({ storage: storage });
app.post('/upload', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // if (!req.file) {
        //     return res.status(400).send('No files were uploaded.');
        // }
        const { attributes, title, description } = req.body;
        // const pinnedImage = await pinFileToIPFS(req?.file?.filename)
        const metadata = {
            title,
            attributes,
            description,
            image: 'pinnedImage.IpfsHash'
        };
        const pinnedJSON = yield (0, pinata_1.pinJSONToIPFS)(metadata);
        console.log({ pinnedJSON });
        // fs.unlinkSync(req?.file?.path as string);
        return res.json({
            hash: pinnedJSON,
        }).status(201);
    }
    catch (err) {
        return res.json(err).status(500);
    }
}));
process.stdout.on('error', function (err) {
    if (err.code == "EPIPE") {
        console.log(err);
    }
});
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
