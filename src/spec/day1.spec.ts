import { GetInputFromFile } from "../helpers/AocHelpers";

describe("AOC Days", async () => {
    let input: string[];
    const day1 = (await import("../days/day1")).day1;

    beforeEach(() => {
        input = GetInputFromFile(`inputs\\day1.txt`);
    });

    it("solves day 1", () => {
        const [taskA, taskB] = day1(input);

        console.log({taskA, taskB});

        expect(taskA).toBe("68775");
        expect(taskB).toBe("202585");
    });
});