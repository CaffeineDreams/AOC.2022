import { GetInputFromFile } from "./helpers/AocHelpers";
import * as d from "./days";

(() => {
    const days = [
        d.day1
    ];

    for (const day of days) {
        const name = day.name;
        const input = GetInputFromFile(`inputs\\${name}.txt`);
        const [taskA, taskB] = day(input);

        console.log(`
        ${name} solution:
            Task A: ${taskA}
            Task B: ${taskB || "NOPE!"}
        ------------
        `);
    }
})();