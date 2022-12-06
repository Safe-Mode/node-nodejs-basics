import { cpus } from 'node:os';
import { Worker } from 'node:worker_threads';

const START_NUMBER = 10;

const performCalculations = async () => {
    const cpuCoreCount = cpus().length;
    
    for (let i = 0; i < cpuCoreCount; i++) {
        const pool = new Worker('./src/wt/worker.js', { workerData: START_NUMBER + i });
        pool.on('message', console.log);
    }
};

await performCalculations();