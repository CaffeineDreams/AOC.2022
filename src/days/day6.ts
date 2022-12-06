import { AocFunc } from "../helpers/AocHelpers";

export  const day6: AocFunc = (input: string[]): string[] => {
    const dataStream = input[0];

    const taskA = (readLength: number) => {
        for (let i = readLength; i <= dataStream.length; i++) {
            const currentChunk = dataStream.slice(i - readLength, i);
            
            if (!/(.).*\1/.test(currentChunk)) {
                return i + "";
            }
        }
    }

    return [taskA(4),taskA(14)];
}