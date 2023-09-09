export function getServerEnv(key: string | undefined): string | Error {
    if(process.env[key!] === undefined || process.env[key!] === null) {
        return new Error(`${key} is not defined in server`);
    }

    return process.env[key as string] as string;
}