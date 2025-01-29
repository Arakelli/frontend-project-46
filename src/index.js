import path from 'path';
import fs from 'fs';

const getFullPath = (filepath) => path.resolve(process.cwd(), filepath);

const getParse = (filepath1, filepath2) => {
    const fullFilePath1 = getFullPath(filepath1);
    const fullFilePath2 = getFullPath(filepath2);

    console.log(JSON.parse(fs.readFileSync(fullFilePath1, 'utf-8')));
    console.log(JSON.parse(fs.readFileSync(fullFilePath2, 'utf-8')));
};

export default getParse;