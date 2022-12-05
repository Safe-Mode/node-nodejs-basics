import { createGzip } from 'node:zlib';
import { createReadStream, createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream';

const FILES_PATH = 'src/zip/files';

const compress = async () => {
    const gzip = createGzip();
    const source = createReadStream(`${FILES_PATH}/fileToCompress.txt`);
    const dest = createWriteStream(`${FILES_PATH}/archive.gz`);

    pipeline(
        source,
        gzip,
        dest,
        (err) => {
            if (err) {
              console.error('An error occurred:', err);
              process.exitCode = 1;
            }
        }
    );
};

await compress();