import express from 'express';
import { env } from '../env';

const {
    app: {
        port,
        appSchema,
        host
    }
} = env

class ExpressLoader {
    public express: express.Application;

    constructor() {
        this.express = express();
    }

    bootstrap() {
        this.express.listen(port, () => {
            console.log(`Server is up and running @ '${appSchema}://${host}:${port}'`);
        }).on('error', (_error) => {
            console.log(`Application crashed due to ${_error}`);
        })
    }
}

export default new ExpressLoader;