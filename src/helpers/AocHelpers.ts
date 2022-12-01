import * as fs from "fs";

export type AocFunc = (input: string[]) => string[];

export const GetInputFromFile = (filename: string): string[] => {
    const data = fs.readFileSync(filename).toString();
    return data.split("\r\n");
};