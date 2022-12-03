import { env } from 'node:process';

const RSS_ENTRY = 'RSS_';

const parseEnv = () => {
    let rssStr = '';

    for (let key in env) {
        if (env.hasOwnProperty(key) && key.includes(RSS_ENTRY)) {
            rssStr = rssStr ? `${rssStr}; ${key}=${env[key]}` : `${key}=${env[key]}`;
        }
    }
    console.log(rssStr);
};

parseEnv();