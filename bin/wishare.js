#!/usr/bin/env node

/**
 * 用于构建使用的命令行插件
 */
const exec = require('child_process').exec;
const chalk = require('chalk');
const log = require('log-util');
const program = require('commander');

/**
 * support: wishare patch/minor/major/version的命令调用
 * 
 */
program.version('0.0.1')
    .option('-b, --build', 'build static resources')
    .option('-s, --send', 'send config file name to backend')
    .option('-f, --file', 'select gulpfile to build');

/**
 * build at patch
 */
program.command('patch', 'build ad patch!')
    .action(function() {
        log.info('running patch build task...');
    }).alias('pa');

/**
 * build at minor
 */
program.command('minor')
    .action(function() {
        log.info('running minor build task...');
    }).alias('mi');

/**
 * build at major
 */
program.command('major')
    .action(function() {
        log.info('running major build task...');
    }).alias('ma');

program.on('--help', () => {
    console.log('help');
});

program.parse(process.argv);