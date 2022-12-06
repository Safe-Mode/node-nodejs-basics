import { access, readFile } from 'node:fs/promises';

const ENDPOINT = './src/fs';
const ERROR_MSG = 'FS operation failed';
const Name = {
    DIR: 'files',
    READ_FILE: 'fileToRead.txt',
};
const Path = {
    readFile: `${ENDPOINT}/${Name.DIR}/${Name.READ_FILE}`
};

const read = async () => {
    try {
        await access(Path.readFile);
        const content = await readFile(Path.readFile, { encoding: 'utf8' });
        console.log(content);
    } catch {
        throw new Error(ERROR_MSG);
    }
};

await read();