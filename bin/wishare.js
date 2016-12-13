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
const commands = require('../commands');

program.version(require('../package.json').version);

program
	.command('admin-panel')
	.description('admin panel generator')
	.arguments('<cmd> [args]')
	.alias('ap')
	.action((cmd, args) => {
		commands.adminPanel.dispatch(cmd, args);
	});

program.on('help', function() {});

program.parse(process.argv);

/**
 * 空参数时默认执行帮助
 */
if(!program.args.length) program.help();