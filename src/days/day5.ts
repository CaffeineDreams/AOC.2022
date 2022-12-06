import { AocFunc } from "../helpers/AocHelpers";

export  const day5: AocFunc = (input: string[]): string[] => {

    const stacks = new Array<string[]>(
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
    );

    const stackIndices = " 1   2   3   4   5   6   7   8   9 "
    //const stackIndices = " 1   2   3 "
    
    for (let s of [...stackIndices].map((v) => v.trim()).filter(v => !!v)) {
        const index = Number(s) - 1;

        for (let ln of input) {
            if (ln == null || ln === stackIndices) {
                break;
            }

            const position = stackIndices.indexOf(` ${s} `)
            const itemInStack = ln.slice(position, position + 3);
            if (!!itemInStack.trim()) {
                stacks[index].push(itemInStack);
            }
        }
    }

    for(let i = 0; i < stacks.length; i++){
        stacks[i].reverse();
    }

    const instructions = input.slice(input.indexOf(stackIndices) + 2);

    const taskA = () => {
        for (let instruction of instructions) {
            const [quantity, from, to] = instruction
                .match(/(move \d*) (from \d*) (to \d*)/)
                .slice(1)
                .map((v) => v.slice(v.indexOf(" ")))
                .map((v) => Number(v));

            for (let i = quantity; i > 0; i--) {
                const item = stacks[from - 1].pop();
                stacks[to - 1].push(item);
            }
        }
        
        let result = "";

        for (let stack of stacks.filter((s) => !!s.length)) {
            result += stack.pop().replace("[", "").replace("]", "");
        }

        return result;
    };

    return [taskA(),""];
}