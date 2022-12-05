import { AocFunc, GetInputFromFile } from "../helpers/AocHelpers";

describe("AOC Days", async () => {
    let days: AocFunc[];

    beforeAll(async () => {
        days = [
            (await import("../days/day1")).day1,
            (await import("../days/day2")).day2,
            (await import("../days/day3")).day3,
        ];
    });

    it("solves day 1", async () => {
        const input = GetInputFromFile(`inputs\\day1.txt`);
        const [taskA, taskB] = days[0](input);

        console.log({taskA, taskB});

        expect(taskA).toBe("68775");
        expect(taskB).toBe("202585");
    });

    it("solves day 2", async () => {
        const input = GetInputFromFile(`inputs\\day2.txt`);
        const [taskA, taskB] = days[1](input);

        console.log({taskA, taskB});

        expect(taskA).toBe("14531");
        expect(taskB).toBe("11258");
    });

    it("solves day 3", async () => {
        const input = GetInputFromFile(`inputs\\day3.txt`);
        const [taskA, taskB] = days[2](input);

        console.log({taskA, taskB});
    });
});