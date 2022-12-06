import { readFile } from 'node:fs/promises';
const { createHmac } = await import('node:crypto');

const calculateHash = async () => {
    try {
        const filePath = new URL('./files/fileToCalculateHashFor.txt', import.meta.url);
        const contents = await readFile(filePath, { encoding: 'utf8' });
        const hash = createHmac('sha256', contents).digest('hex');
        console.log(hash);
    } catch (error) {
        console.error(error.message);
    }
};

await calculateHash();