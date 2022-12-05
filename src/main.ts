import { GetInputFromFile } from "./helpers/AocHelpers";


(async () => {
    const days = [
        (await import("./days/day1")).day1,
        (await import("./days/day2")).day2,
        (await import("./days/day3")).day3,
    ];

    for (const day of days) {
        const name = day.name;
        const input = GetInputFromFile(`inputs\\${name}.txt`);
        const [taskA, taskB] = day(input);

        console.log(`
        ${name} solution:
            Task A: ${taskA || "NOPE!"}
            Task B: ${taskB || "NOPE!"}
        ------------
        `);
    }
})();