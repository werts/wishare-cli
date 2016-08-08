#!/usr/bin/env node

'use strict'
/**
 * 用于构建使用的命令行插件
 */
const exec = require('child_process').exec;
const chalk = require('chalk');
const log = require('log-util');
const program = require('commander');

//默认使用当前路径下的gulpfile.js
let filepath = './gulpfile.js';

const chooseFile = (filename) => {
    if (filename) {
        filepath = filename;
    }
    return filepath;
};

/**
 * support: wishare patch/minor/major/version的命令调用
 * 
 */
program.version('0.0.1')
    .option('-b, --build', 'build static resources')
    .option('-s, --send', 'send config file name to backend');

/**
 * build at patch
 */
program.command('patch')
    .alias('pa')
    .description('build at patch!')
    .option('-f, --file', 'select gulpfile to build')
    .action(function(options) {
        if (typeof options == 'string') {
            //选用了文件
            filepath = options;
        }
        exec('gulp build:patch ' + filepath, function(err){
            if (err){
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

/**
 * build at minor
 */
program.command('minor')
    .alias('mi')
    .description('build at minor!')
    .option('-f, --file', 'select gulpfile to build')
    .action(function(options) {
        if (typeof options == 'string') {
            //选用了文件
            filepath = options;
        }
        exec('gulp build:minor ' + filepath, function(err){
            if (err){
                console.log(err);
            }
        });
    })
    .on('--help', function() {
        console.log('  Examples:');
        console.log();
        console.log('    $ wishare minor|mi [-f] [filepath]');
        console.log();
    });

/**
 * build at major
 */
program.command('major')
    .alias('ma')
    .description('build at major!')
    .option('-f, --file', 'select gulpfile to build')
    .action(function(options) {
        if (typeof options == 'string') {
            //选用了文件
            filepath = options;
        }
        exec('gulp build:major ' + filepath, function(err){
            if (err){
                console.log(err);
            }
        });
    })
    .on('--help', function() {
        console.log('  Examples:');
        console.log();
        console.log('    $ wishare major|ma [-f] [filepath]');
        console.log();
    });

/**
 * build at special version
 */
program.command('version', 'build at special version!')
    .action();

program.on('--help', function() {
    console.log('  Examples:');
    console.log('');
    console.log('    $ custom-help --help');
    console.log('    $ custom-help -h');
    console.log('');
});

program.parse(process.argv);

/**
 * 空参数时默认执行帮助
 */
if (!program.args.length) program.help();