import { AocFunc } from "../helpers/AocHelpers";

export  const day2: AocFunc = (input: string[]): string[] => {

    const scores = {
        ["A"]: 1, // Rock
        ["B"]: 2, // Paper
        ["C"]: 3, // Scissors

        ["X"]: 1, // Rock
        ["Y"]: 2, // Paper 
        ["Z"]: 3, // Scissors
    };

    const score = (total, ourHand): number => {
        /**
         * 2 = rock/rock draw
         * 3 = paper/rock outcome
         * 4 = rock/scissors outcome OR paper/paper draw
         * 5 = scissors/paper outcome
         * 6 = scissors/scissors draw
         */
        switch(total) {
            case 2:
                return scores[ourHand] + 3
            case 3:
                return ourHand === "Y"
                    ? scores["Y"] + 6
                    : scores[ourHand];
            case 4:
                if (ourHand === "X")
                    return scores["X"] + 6
                if (ourHand === "Y")
                    return scores["Y"] + 3
                return scores[ourHand];
            case 5:
                return ourHand === "Z"
                    ? scores["Z"] + 6
                    : scores[ourHand];
            case 6:
                return scores[ourHand] + 3
        }
    };

    const win = (input:  "A" | "B" | "C"): "X" | "Y" | "Z" => {
        switch (input){
            case "A":
                return "Y";
            case "B":
                return "Z";
            case "C":
                return "X"
        }
    }

    const lose = (input:  "A" | "B" | "C"): "X" | "Y" | "Z" => {
        switch (input){
            case "A":
                return "Z";
            case "B":
                return "X";
            case "C":
                return "Y";
        }
    }

    const draw = (input:  "A" | "B" | "C"): "X" | "Y" | "Z" => {
        switch (input){
            case "A":
                return "X";
            case "B":
                return "Y";
            case "C":
                return "Z";
        }
    }

    const calculateDesiredOutcome = (theirs, strategy): "X" | "Y" | "Z" => {
        switch (strategy) {
            case "X": // take the L
                return lose(theirs);
            case "Y": // draw
                return draw(theirs);
            case "Z": // win
                return win(theirs);
        }
    }

    const taskA = input
        .filter((v) => !!v)
        .map((i) => i.split(" "))
        .map(([theirs, ours]) => score(scores[ours] + scores[theirs], ours))
        .reduce((p,c) => p + c, 0)
        .toString();

    const taskB = input
        .filter((v) => !!v)
        .map((i) => i.split(" "))
        .map(([theirs, strategy]) => [theirs, calculateDesiredOutcome(theirs, strategy)])
        .map(([theirs, ours]) => score(scores[ours] + scores[theirs], ours))
        .reduce((p,c) => p + c, 0)
        .toString();

    return [taskA, taskB];
}