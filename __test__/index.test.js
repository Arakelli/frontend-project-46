// import fs from 'fs';
import path from 'path';
import { dirname } from 'path';
import genDiff from "../src/index.js";
import { expect, test } from '@jest/globals';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const getFullPath = (filepath) => path.join(__dirname, '..', '__fixtures__', filepath);
// const readFile = (filename) => fs.readFileSync(getFullPath(filename), 'utf-8');

test('gendiff', () => {
    expect(genDiff(
      getFullPath('file1.json'),
      getFullPath('file2.json')
    )).toBe(`{
 - follow: false
   host: hexlet.io
 - proxy: 123.234.53.22
 - timeout: 50
 + timeout: 20
 + verbose: true
}`);
})