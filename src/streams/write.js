import { createWriteStream } from 'node:fs';
import { stdin } from 'node:process';

const write = async () => {
    const writableStream = createWriteStream('./src/streams/files/fileToWrite.txt');
    stdin.pipe(writableStream);
};

await write();