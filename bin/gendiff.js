#!/usr/bin/env node

import { program } from 'commander';
import genDiff from '../src/index.js';

program
    .name('gendiff')
    .description('Compares two configuration files and shows a difference.')
    .version('13.0.0')
    .argument('<filepath1>')
    .argument('<filepath2>')
    .helpOption('-V, --version', 'output the version number')
    .option('-f, --format [type]', 'output format', 'stylish')
    .helpOption('-h, --help', 'output usage information')
    .action((filepath1, filepath2, options) => {
        console.log(genDiff(filepath1, filepath2, options.format));
    });

program.parse();