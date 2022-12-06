import { pipeline, Transform } from 'node:stream';
import { stdin, stdout } from 'node:process';

const transform = async () => {
    const reverseString = new Transform({
        transform(chunk, encoding, callback) {
            const chunkStr = String(chunk).trim();

            callback(
                null,
                chunkStr
                    .split('', chunk.length - 1)
                    .reverse()
                    .join('')
                + '\n'
            );
        }
    });

    pipeline(
        stdin,
        reverseString,
        stdout,
        console.error
    );
};

await transform();