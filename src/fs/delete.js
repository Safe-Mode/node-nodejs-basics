import { access, rm } from 'node:fs/promises';

const ENDPOINT = './src/fs';
const ERROR_MSG = 'FS operation failed';
const Name = {
    DIR: 'files',
    REMOVE_FILE: 'fileToRemove.txt',
};
const Path = {
    removeFile: `${ENDPOINT}/${Name.DIR}/${Name.REMOVE_FILE}`
};

const remove = async () => {
    try {
        await access(Path.removeFile);
        rm(Path.removeFile);
    } catch {
        throw new Error(ERROR_MSG);
    }
};

await remove();