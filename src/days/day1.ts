import { AocFunc } from "../helpers/AocHelpers";

export const day1: AocFunc = (input: string[]): string[] => {
    const taskA = input
        .map((v) => Number(v))
        .filter((v, i, arr) => arr[i + 1] > v)
        .length
        .toString();

    const taskB = input
        .map((v) => Number(v))
        .map((_, i, arr) => arr.slice(i, i + 3))
        .filter((v) => v.length == 3)
        .filter((v, i , arr) => {
            const add = (a: number, b: number): number => a + b;
            const sum1 = v.reduce(add);
            const sum2 = arr[i + 1]?.reduce(add) ?? 0;
            return sum2 > sum1;
        })
        .length
        .toString();

    return [taskA, taskB]
};