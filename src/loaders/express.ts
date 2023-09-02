import express from 'express';

class ExpressLoader {
    public express: express.Application;

    constructor() {
        this.express = express();
    }

    bootstrap() {
        this.express.listen(3000, () => {
            console.log(`Server is up and running @ 'http://localhost:3000'`);
        }).on('error', (_error) => {
            console.log(`Application crashed due to ${_error}`);
        })
    }
}

export default new ExpressLoader;