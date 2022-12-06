import { access, rename as fsRename } from 'node:fs/promises';

const ENDPOINT = './src/fs';
const ERROR_MSG = 'FS operation failed';
const Name = {
    DIR: 'files',
    WRONG_FILE: 'wrongFilename.txt',
    PROPER_FILE: 'properFilename.md'
};
const Path = {
    wrongFile: `${ENDPOINT}/${Name.DIR}/${Name.WRONG_FILE}`,
    properFile: `${ENDPOINT}/${Name.DIR}/${Name.PROPER_FILE}`
};

const throwError = () => {
    throw new Error(ERROR_MSG);
};

const rename = async () => {
    try {
        await access(Path.wrongFile);
    } catch {
        throwError();
    }

    try {
        await access(Path.properFile);
        throwError();
    } catch {
        fsRename(Path.wrongFile, Path.properFile);
    }
};

await rename();