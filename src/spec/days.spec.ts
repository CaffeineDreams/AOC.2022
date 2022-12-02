import { GetInputFromFile } from "../helpers/AocHelpers";

describe("AOC Days", async () => {
    const day1 = (await import("../days/day1")).day1;
    const day2 = (await import("../days/day2")).day2;

    it("solves day 1", async () => {
        const input = GetInputFromFile(`inputs\\day1.txt`);
        const [taskA, taskB] = day1(input);

        console.log({taskA, taskB});

        expect(taskA).toBe("68775");
        expect(taskB).toBe("202585");
    });

    it("solves day 2", async () => {
        const input = GetInputFromFile(`inputs\\day2.txt`);
        const [taskA, taskB] = day2(input);

        console.log({taskA, taskB});

        expect(taskA).toBe("14531");
        expect(taskB).toBe("11258");
    });
});