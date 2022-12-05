import { spawn, execFile, fork } from 'node:child_process';

const FILE_PATH = './src/cp/files/script.js';

const spawnChildProcess = async (args) => {
    fork(FILE_PATH, args);
};

spawnChildProcess();