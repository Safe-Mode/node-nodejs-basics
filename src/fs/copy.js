import { access, cp } from 'node:fs/promises';

const ERROR_MSG = 'FS operation failed';
const ENDPOINT = './src/fs';
const Name = {
    DIR: 'files',
    DIR_COPY: 'files_copy'
};
const Path = {
    dir: `${ENDPOINT}/${Name.DIR}`,
    dirCopy: `${ENDPOINT}/${Name.DIR_COPY}`
};

const copy = async () => {
    try {
        await access(Path.dir);
        await access(Path.dirCopy);
        cp(Path.dir, Path.dirCopy, { recursive: true });
    } catch {
        console.error(new Error(ERROR_MSG));
    }
};

copy();