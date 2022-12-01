import { AocFunc } from "../helpers/AocHelpers";

export const day1: AocFunc = (input: string[]): string[] => {

    const group = (arr) => {
        const groups: number[][] = [[]];

        arr.forEach(el => {
            if (el !== "") {
                groups[groups.length - 1].push(Number(el));
            } else {
                groups.push([]);
            }
        });

        return groups;
    };

    const taskA = group(input)
        .map((v) => v.length > 0 ? v.reduce((p,c) => p + c) : 0, 0)
        .sort((a,b) => b - a)[0]
        .toString();

    const taskB = "";

    return [taskA, taskB]
};