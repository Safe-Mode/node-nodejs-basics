import { createReadStream  } from 'node:fs';
import { stdout } from 'node:process';

const read = async () => {
    const readableStream =  createReadStream('./src/streams/files/fileToRead.txt');
    readableStream.pipe(stdout);
};

await read();