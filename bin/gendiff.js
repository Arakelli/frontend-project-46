#!/usr/bin/env node

import { program } from 'commander';

program
    .name('gendiff')
    .description('Compares two configuration files and shows a difference.')
    .version('13.0.0')
    .helpOption('-V, --version', 'output the version number')
    .helpOption('-h, --help', 'output usage information');

program.parse();