import { AocFunc } from "../helpers/AocHelpers";

export  const day3: AocFunc = (input: string[]): string[] => {
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    const alphabets = [ ...alphabet, ...alphabet.toUpperCase()];

    const taskA = input
        .map((v) => {
            const h = v.length / 2;
            return [v.slice(0,h), v.slice(h)]
        })
        .map(([a,b]) => {
            const repeatedCharacter = [...a].filter((v) => b.indexOf(v) >= 0);
            return alphabets.findIndex((i) => i === repeatedCharacter[0]) + 1;
        })
        .reduce((p,c) => p + c, 0)
        .toString();

    // const taskB = input
    //     .reduce((prevValue, value, i) => {
    //         if (i % 3 === 0 && i !== 0){
    //             prevValue
    //         }
    //     })

    return [taskA,""];
};