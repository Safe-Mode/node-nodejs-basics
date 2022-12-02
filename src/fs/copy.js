import { access, cp } from 'node:fs/promises';

const ERROR_MSG = 'FS operation failed';
const Name = {
    DIR: 'files',
    DIR_COPY: 'files_copy'
};

const copy = async () => {
    try {
        await access(Name.DIR);
        await access(Name.DIR_COPY);
        cp(Name.DIR, Name.DIR_COPY, { recursive: true });
    } catch {
        console.error(new Error(ERROR_MSG));
    }
};

copy();