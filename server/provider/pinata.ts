import pinataSDK from '@pinata/sdk';
import * as fs from 'fs'
import path from "path";

const pinata = new pinataSDK({
    pinataApiKey: process.env.PINATA_API_KEY as string,
    pinataSecretApiKey: process.env.PINATA_SECRET_KEY as string
});

type Attributes = {
    trait_type: string,
    value: string
}

type Metadata = {
    attributes: Attributes[],
    title: string,
    description: string,
    image: string
}

const defaultPath = '/Users/pavankumar/Documents/projects/nft-shield/server/dist/uploads'

export const pinFileToIPFS = async (filename: string, path = defaultPath) => {
    const readableStreamForFile = fs.createReadStream(`${path}/${filename}`);
    const options = {
        pinataMetadata: {
          name: `${filename}`
        },
        pinataOptions: {
            cidVersion: 0 as 0 | 1
        }
    };

    return pinata.pinFileToIPFS(readableStreamForFile, options)
}

export const pinJSONToIPFS = async (metadata: Metadata) => {
    try {

        const options = {
            pinataMetadata: {
                name: 'MyCustomName',
            },
            pinataOptions: {
                cidVersion: 0 as 0 | 1
            }
        };
        return pinata.pinJSONToIPFS(metadata, options)
    } catch (error) {
        console.error('Error uploading file to IPFS:', error);
        throw error; // Rethrow or handle error as needed
    }
}

export const getPinnedFiles = async (hash: string) => {
    return pinata.pinList({
        hashContains: hash
    })
}
