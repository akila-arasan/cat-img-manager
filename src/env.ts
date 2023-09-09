import * as dotenv from 'dotenv';
import { cwd } from 'node:process';
import { join } from 'node:path' 
import { getServerEnv } from './lib/utils';

/**
 * Load .env.test file in the event of test environment
 */
dotenv.config({path: join(cwd(), `.env${((process.env.NODE_ENV === 'test') ? '.test': '.dev')}`) });

export const env = {
    environment: process.env.NODE_ENV || 'dev',
    isProd: process.env.NODE_ENV === 'prod',
    isDev: process.env.NODE_ENV === 'dev',
    app: {
        routePrefix: getServerEnv('APP_ROUTE_PREFIX'),
        port: getServerEnv('APP_PORT'),
        appSchema: getServerEnv('APP_SCHEMA'),
        host: getServerEnv('APP_HOST')
    },
    log: {
        level: getServerEnv('LOG_LEVEL'),
        files: {
            debug: getServerEnv('LOG_FILE_DEBUG'),
            others: getServerEnv('LOG_FILE_OTHERS'),
            error: getServerEnv('LOG_FILE_ERROR'),
            http: getServerEnv('LOG_FILE_HTTP')
        }
    }
}

