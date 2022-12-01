import { day1 } from "../days";
import { GetInputFromFile } from "../helpers/AocHelpers";

describe("day1", () => {
    let input: string[];

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