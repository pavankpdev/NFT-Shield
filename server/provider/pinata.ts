import pinataSDK from '@pinata/sdk';
import * as fs from 'fs';
import path from 'path';
import FormData from 'form-data';
// @ts-ignore
import rfs from 'recursive-fs';
// @ts-ignore
import basePathConverter from 'base-path-converter';
// @ts-ignore
import got from 'got';

const pinata = new pinataSDK({
    pinataApiKey: '505e44a95253d586d5c1',
    pinataSecretApiKey: '956aa06031ccb42f254021a35c8fd3a061798e717b23751ebbf51175cb027b08'
});

type Attributes = {
    trait_type: string,
    value: string
};

type Metadata = {
    attributes: Attributes[],
    title: string,
    description: string,
    image: string,
    design: string
};

const defaultPath = path.join(__dirname, '..', 'uploads');

export const pinFileToIPFS = async (filename: string, dirPath = defaultPath) => {
    const filePath = path.join(dirPath, filename);
    if (!fs.existsSync(filePath)) {
        throw new Error(`File not found: ${filePath}`);
    }

    // Create a temporary folder
    const tempFolder = path.join(dirPath, `designs-${Date.now()}`);
    if (!fs.existsSync(tempFolder)) {
        fs.mkdirSync(tempFolder);
    }

    // Move the file to the temporary folder
    const tempFilePath = path.join(tempFolder, filename);
    fs.renameSync(filePath, tempFilePath);

    const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;

    try {
        const { dirs, files } = await rfs.read(tempFolder);

        let data = new FormData();

        for (const file of files) {
            data.append(`file`, fs.createReadStream(file), {
                filepath: basePathConverter(tempFolder, file),
            });
        }

        const response = await got(url, {
            method: 'POST',
            headers: {
                Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJhOThlOTVhZC0xZGVhLTQ0MTMtYmU3OC1jMzk5ZDI2NTlkMGUiLCJlbWFpbCI6InBhdmFuLmt1bWFyQG5vbmNlYmxveC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGluX3BvbGljeSI6eyJyZWdpb25zIjpbeyJpZCI6IkZSQTEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX1dLCJ2ZXJzaW9uIjoxfSwibWZhX2VuYWJsZWQiOmZhbHNlLCJzdGF0dXMiOiJBQ1RJVkUifSwiYXV0aGVudGljYXRpb25UeXBlIjoic2NvcGVkS2V5Iiwic2NvcGVkS2V5S2V5IjoiNTA1ZTQ0YTk1MjUzZDU4NmQ1YzEiLCJzY29wZWRLZXlTZWNyZXQiOiI5NTZhYTA2MDMxY2NiNDJmMjU0MDIxYTM1YzhmZDNhMDYxNzk4ZTcxN2IyMzc1MWViYmY1MTE3NWNiMDI3YjA4IiwiaWF0IjoxNzE3MDY2OTk4fQ.Ziya_d5xesM8qfh2b9nZiS9hg9-yNwwUKRelj94P4dE`,
            },
            body: data,
        }).on('uploadProgress', (progress: any) => {
            console.log(progress);
        });

        // Remove the temporary folder and file after upload
        fs.unlinkSync(tempFilePath);
        fs.rmdirSync(tempFolder);
        return JSON.parse(response.body)
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const pinJSONToIPFS = async (metadata: Metadata) => {
    try {
        const options = {
            pinataMetadata: {
                name: 'MyCustomName'
            },
            pinataOptions: {
                cidVersion: 0 as 0 | 1
            }
        };
        return pinata.pinJSONToIPFS(metadata, options);
    } catch (error) {
        console.error('Error uploading JSON to IPFS:', error);
        throw error; // Rethrow or handle error as needed
    }
};

export const getPinnedFiles = async (hash: string) => {
    return pinata.pinList({
        hashContains: hash
    });
};
