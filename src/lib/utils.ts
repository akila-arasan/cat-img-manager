import {  access, open } from 'node:fs';

export function getServerEnv(key: string | undefined): string | Error {
    if(process.env[key!] === undefined || process.env[key!] === null) {
        return new Error(`${key} is not defined in server`);
    }

    return process.env[key as string] as string;
}

export const doesFileExists = async (path: string): Promise<boolean> =>{
    try {
        const res = await access(path, (err) => {
            if(err) return false;
            return true
        });
        return res as unknown as boolean;
    } catch (err) {
        return false;
    }
}

export const createFileViaOpen = async(path: string, mode: string): Promise<object> => {
    try {
        const res = await open(path, mode, (err) => {
            if(err) {
                return {
                    isSuccess: false,
                    message: `File creation failed for path: ${path} and mode: ${mode}`,
                    meta: err,
                }
            };
            return {
                isSuccess: true,
                message: `File creation success for path: ${path} and mode: ${mode}`,
                meta: null,
            }
        })
        return res as unknown as object;
    } catch (err) {
        return {
            isSuccess: false,
            message: `File creation failed for path: ${path} and mode: ${mode}`,
            meta: err,
        }
    }
}