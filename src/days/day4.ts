import { AocFunc } from "../helpers/AocHelpers";

export  const day4: AocFunc = (input: string[]): string[] => {

    const workGroups = (v: string): number[][] => {
        return v.split(",")
            .map((g) => g.split("-"))
            .map(([g1, g2]) => [Number(g1), Number(g2)])
            .map(([g1, g2]) => Array.from(new Array(g2 + 1), (_, i) => i).slice(g1))
            .sort((g1, g2) => g2.length - g1.length);
    };

    const taskA = input
        .map(workGroups)
        .filter(([a1, a2]) => a2.every((v) => a1.includes(v)))
        .length + "";


    const taskB = input
        .map(workGroups)
        .filter(([a1, a2]) => a2.some((v) => a1.includes(v)))
        .length + "";

    return [taskA, taskB];
}