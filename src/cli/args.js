import { argv } from 'node:process';

const KEY_ENTRY = '--';

const parseArgs = () => {
    let propsStr = '';
    
    argv.forEach((value, index) => {
        if (value.includes(KEY_ENTRY)) {
            propsStr = propsStr ? `${propsStr}, ${value} is ${argv[index + 1]}` : `${value} is ${argv[index + 1]}`;
        }
    });

    console.log(propsStr);
};

parseArgs();