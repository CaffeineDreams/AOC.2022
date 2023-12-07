import { AocFunc } from "../helpers/AocHelpers";

export  const day7: AocFunc = (input: string[]): string[] => {
    
    type treeNode = {
        size?: number;
    };

    const tree = new Map<string, treeNode>([
    ]);

    const buildTree = () => {
        let currentPath: string;
        
        for (const instruction of input) {
            const [dir] = instruction.match(/\$ cd (.+)/)?.slice(1) ?? [];
            if (dir) {
                currentPath = dir !== ".."
                    ? dir + "/"
                    : currentPath?.slice(0, currentPath.lastIndexOf("/")) ?? "" + "/";
                continue;
            }
            if (instruction === "$ ls")
                continue;
            
            const [param, key] = instruction.split(" ");
            switch (param){
                case "dir":
                    currentPath += key + "/";
                    break;
                default:
                    tree[`${currentPath}${key}`] = { size: param};
            }
        }
    }

    buildTree();

    console.log(tree);

    return ["",""];
}