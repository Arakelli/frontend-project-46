import fs from 'fs';
import path from 'path';
import { expect, test } from '@jest/globals';
import { fileURLToPath } from 'url';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

test('gendiff-json', () => {
  expect(genDiff(
    getFixturePath('file1.json'),
    getFixturePath('file2.json'),
  )).toEqual(readFile('result-stylish.txt').trim());
});

test('gendiff-yaml', () => {
  expect(genDiff(
    getFixturePath('file1.yaml'),
    getFixturePath('file2.yaml'),
  )).toEqual(readFile('result-stylish.txt').trim());
});

test('gendiff-json-plain_formant', () => {
  expect(genDiff(
    getFixturePath('file1.json'),
    getFixturePath('file2.json'),
    'plain',
  )).toEqual(readFile('result-plain.txt').trim());
});

test('gendiff-json-json_formant', () => {
  expect(genDiff(
    getFixturePath('file1.json'),
    getFixturePath('file2.json'),
    'json',
  )).toEqual(readFile('result-json.txt').trim());
});
