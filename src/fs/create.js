import { access, mkdir, writeFile } from 'node:fs/promises';

const FRESH_STR = 'I am fresh and young';
const ERROR_MSG = 'FS operation failed';
const ENDPOINT = './src/fs';
const Name = {
    DIR: 'files',
    FRESH_FILE: 'fresh.txt'
};
const Path = {
    dir: `${ENDPOINT}/${Name.DIR}`,
};

const create = async () => {
    const path = `${Path.dir}/${Name.FRESH_FILE}`;

    try {
        await access(path);
        console.error(new Error(ERROR_MSG));
    } catch {
        await mkdir(`${Path.dir}`, { recursive: true });
        await writeFile(path, FRESH_STR);
    }
};

await create();