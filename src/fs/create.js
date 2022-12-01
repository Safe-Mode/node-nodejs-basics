import * as fs from 'node:fs/promises';

const FRESH_STR = 'I am fresh and young';
const ERROR_MSG = 'FS operation failed';
const Name = {
    DIR: 'files',
    FRESH_FILE: 'fresh.txt'
};

const create = async () => {
    const path = `./${Name.DIR}/${Name.FRESH_FILE}`;

    try {
        await fs.access(path);
        console.error(new Error(ERROR_MSG));
    } catch {
        await fs.mkdir('./files', { recursive: true });
        await fs.writeFile(path, FRESH_STR);
    }
};

await create();