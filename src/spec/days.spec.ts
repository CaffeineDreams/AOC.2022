import { AocFunc, GetInputFromFile } from "../helpers/AocHelpers";

describe("AOC Days", async () => {
    let days: AocFunc[];

    beforeAll(async () => {
        days = [
            (await import("../days/day1")).day1,
            (await import("../days/day2")).day2,
            (await import("../days/day3")).day3,
            (await import("../days/day4")).day4,
            (await import("../days/day5")).day5,
            (await import("../days/day6")).day6,
            (await import("../days/day7")).day7,
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

    it("solves day 4", async () => {
        const input = GetInputFromFile(`inputs\\day4.txt`);
        const [taskA, taskB] = days[3](input);

        console.log({taskA, taskB});
    });

    it ("solves day 5", async () => {
        const input = GetInputFromFile(`inputs\\day5.txt`);
        const [taskA, taskB] = days[4](input);

        console.log({taskA, taskB});
    });

    it ("solves day 6", async () => {
        const input = GetInputFromFile(`inputs\\day6.txt`);
        const [taskA, taskB] = days[5](input);

        console.info({taskA, taskB});
    });

    it ("solves day 7", async () => {
        const input = GetInputFromFile(`inputs\\day7.txt`);
        const [taskA, taskB] = days[6](input);

        console.info({taskA, taskB});
    });
});