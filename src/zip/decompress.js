import { createUnzip } from 'node:zlib';
import { createReadStream, createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream';

const FILES_PATH = 'src/zip/files';

const decompress = async () => {
    const unzip = createUnzip();
    const source = createReadStream(`${FILES_PATH}/archive.gz`);
    const dest = createWriteStream(`${FILES_PATH}/fileToCompress.txt`);

    pipeline(
        source,
        unzip,
        dest,
        (err) => {
            if (err) {
              console.error('An error occurred:', err);
              process.exitCode = 1;
            }
        }
    );
};

await decompress();