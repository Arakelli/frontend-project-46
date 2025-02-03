import path from 'path';
import { dirname } from 'path';
import genDiff from "../src/index.js";
import { expect, test } from '@jest/globals';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const getFullPath = (filepath) => path.join(__dirname, '..', '__fixtures__', filepath);

test('gendiff-json', () => {
    const result = `{
 - follow: false
   host: hexlet.io
 - proxy: 123.234.53.22
 - timeout: 50
 + timeout: 20
 + verbose: true
}`
    expect(genDiff(
      getFullPath('file1.json'),
      getFullPath('file2.json')
    )).toBe(result);
});

test('gendiff-yaml', () => {
  const result = `{
 - follow: false
   host: hexlet.io
 - proxy: 123.234.53.22
 - timeout: 50
 + timeout: 20
 + verbose: true
}`
  expect(genDiff(
    getFullPath('file1.yaml'),
    getFullPath('file2.yaml')
  )).toBe(result);
});