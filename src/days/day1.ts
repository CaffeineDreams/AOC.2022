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

    const getTopCalories = (n: number) => {
        return group(input)
            .map((v) => v.length ? v.reduce((p,c) => p + c) : 0, 0)
            .sort((a,b) => b - a).slice(0, n)
            .reduce((p,c) => p + c, 0)
            .toString();
    }

    const taskA = getTopCalories(1);

    const taskB = getTopCalories(3);

    return [taskA, taskB]
};