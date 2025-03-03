import stringify from "../stringify.js";

const stylish = (tree, depth = 1) => {
    const spacesCount = 4;
    const shiftLet = 2;
    const indent = ' '.repeat(depth * spacesCount - shiftLet);

    const result = tree
        .map((node) => {
            switch (node.type) {
                case 'added':
                    return `${indent}+ ${node.key}: ${stringify(node.value, depth + 1)}`;
                case 'removed':
                    return `${indent}- ${node.key}: ${stringify(node.value, depth + 1)}`;
                case 'unchanged':
                    return `${indent}  ${node.key}: ${stringify(node.value, depth + 1)}`;
                case 'changed':
                    return `${indent}- ${node.key}: ${stringify(node.oldValue, depth + 1)}\n${node.key}: ${stringify(node.newValue, depth + 1)}`;
                case 'nested':
                    return `${indent}  ${node.key}: ${stringify(node.value, depth + 1)}`;
                default:
                    throw new Error(`Unknow type: ${node.type}!`);  
            }
        })
        .join('\n');

    const outerIndent = ' '.repeat((depth - 1) * spacesCount);
    return `{\n${result}\n${outerIndent}}`;
};

export default stylish;