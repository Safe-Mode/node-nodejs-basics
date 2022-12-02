import { access, readdir } from 'node:fs/promises';

const ENDPOINT = './src/fs';
const ERROR_MSG = 'FS operation failed';
const Name = {
    DIR: 'files'
};
const PATH = `${ENDPOINT}/${Name.DIR}`;

const list = async () => {
    try {
        await access(PATH);
        const files = await readdir(PATH);
        console.log(files);
    } catch {
        throw new Error(ERROR_MSG);
    }
};

await list();