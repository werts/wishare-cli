#!/usr/bin/env node

/**
 * 用于构建使用的命令行插件
 */
const liftoff = require('liftoff');
const v8flags = require('v8flags');
const exec = require('child_process').exec;
const chalk = require('chalk');
const log = require('log-util');
const wishareCli = new liftoff({
    name: 'wishare',
    processTitle: 'wishare',
    configName: 'wishare-conf',
    extensions: {
        ".js": null
    },
    v8flags: v8flags
});
const argv = require('minimist')(process.argv.slice(2));

/**
 * support: wishare patch/minor/major/version的命令调用
 * 
 */
const task = argv._;

wishareCli.on('require', (name) => {
    log.info('Requiring external module', chalk.magenta(name));
});

wishareCli.on('requireFail', (name) => {
    log.info(chalk.red('Failed to load external module'), chalk.magenta(name));
});

wishareCli.on('respawn', (flags, child) {
    var nodeFlags = chalk.magenta(flags.join(', '));
    var pid = chalk.magenta(child.pid);

	log.info('Node flags detected:', nodeFlags);
	log.info('Respawned to PID:', pid);
});

wishareCli.launch({
    cwd: argv.cwd,
    configPath: argv.wisharefile,
    require: argv.require,
    completion: argv.completion
}, handleArguments);

//handle arguments input
function handleArguments(env) {
    console.log(env);
}