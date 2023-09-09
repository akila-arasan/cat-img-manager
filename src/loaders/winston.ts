import { join } from 'node:path';
import { cwd } from 'node:process';
import { createFileViaOpen, doesFileExists } from 'src/lib/utils';
import { Winston } from 'src/types/winston';

class WinstonLoader implements Winston {
    
    debugFile: string
    otherLogsFile: string;
    errorFile:string;
    httpFile: string;

    constructor({debugFile, otherLogsFile, errorFile, httpFile}: WinstonLoader) {
        this.debugFile = debugFile || '';
        this.otherLogsFile = otherLogsFile || '';
        this.errorFile = errorFile || '';
        this.httpFile = httpFile || '';
    }
    async _createLogFile(fileName: string): Promise<boolean> {
        try {
            const path = join(`../../${cwd()}/`, fileName);

            const res = await createFileViaOpen(path, 'a');

            return (res as any).isSuccess;
        } catch (err) {
            return false;
        }
    }

    async _createLogFiles(filesNames: Array<string>): Promise<Promise<boolean>[] | Error> {
        try {
            return filesNames.map(async(fileName) => {
                return await this._createLogFile(fileName);
            })
        } catch (err) {
            throw new Error(JSON.stringify(err));
        }
    }

    async _newLogsIfNotExists() {
        try { 
            const filesToCreate: Array<string> = [];
            let isCreate: boolean = false;

            if(this.debugFile && this.debugFile.length > 0) {
                isCreate = await doesFileExists()
            }
        }
    }
}

export default WinstonLoader;