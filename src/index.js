import path from 'path';
import fs from 'fs';
import compareData from './compareData.js';

const getFullPath = (filepath) => path.resolve(process.cwd(), filepath);

const getParse = (filepath) => JSON.parse(fs.readFileSync(getFullPath(filepath), 'utf-8'));

const genDiff = (filepath1, filepath2) => {
    const dataFile1 = getParse(filepath1);
    const dataFile2 = getParse(filepath2);

    return compareData(dataFile1, dataFile2);
}

export default genDiff;