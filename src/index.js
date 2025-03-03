import fs from 'fs';
import path from 'path';
import process from 'process';
import parser from './parser.js';
import compareData from './compareData.js';
import getFormatter from './formatters/index.js';

const getFullPath = (filepath) => path.resolve(process.cwd(), filepath);

const getData = (filepath) => fs.readFileSync(getFullPath(filepath), 'utf-8');

const genDiff = (filepath1, filepath2) => {
    const dataFile1 = getData(filepath1);
    const dataFile2 = getData(filepath2);

    const formatFile1 = path.extname(filepath1);
    const formatFile2 = path.extname(filepath2);

    const parserData1 = parser(dataFile1, formatFile1);
    const parserData2 = parser(dataFile2, formatFile2);

    const buildTree = compareData(parserData1, parserData2);
    console.log(buildTree)

    return `${getFormatter(buildTree)}`;
}

export default genDiff;