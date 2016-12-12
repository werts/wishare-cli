#!/usr/bin/env node

'use strict';

/**
 * 用于构建使用的命令行插件
 */
const exec = require('child_process').exec;
const chalk = require('chalk');
const log = require('log-util');
const program = require('commander');
const path = require('path');
const co = require('co');
const co-fs = require('co-fs');

//current work path
const cwd = process.cwd();

//默认使用当前路径下的gulpfile.js
let filepath = path.join(cwd, 'gulpfile.js');

const chooseFile = (filename) => {
    if (filename) {
        filepath = filename;
    }
    return filepath;
};

program.version('0.0.1');

/**
 * build static resources
 */
program.command('build')
    .alias('b')
    .description('build static resources...')
    .option('-f, --file <file>', 'select gulpfile to build')
    .option('-p, --patch', 'build at patch...')
    .option('-m, --minor', 'build at minor...')
    .option('-M, --major', 'build at major...')
    .option('-v, --ver <ver>', 'build at special version...')
    .action(function(options) {
        let mod;
        if (undefined != options.file) {
            //选用了文件
            filepath = options.file;
        }
        if (options.patch){
            mod = 'patch';
        }
        if (options.minor){
            mod = 'minor';
        }
        if (options.major){
            mod = 'major';
        }
        exec('gulp build:' + mod + 'patch --gulpfile' + filepath, function(err) {
            if (err) {
                console.log(err);
            }
        });
    })
    .on('--help', function() {
        console.log('  Examples:');
        console.log();
        console.log('    $ wishare patch|pa [-f] [filepath]');
        console.log();
    });

program.on('--help', function() {
    console.log('  Examples:');
    console.log('');
    console.log('    $ wishare --help');
    console.log('    $ wishare -h');
    console.log('');
});

program.parse(process.argv);

/**
 * 空参数时默认执行帮助
 */
if (!program.args.length) program.help();