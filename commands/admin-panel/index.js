'use strict';

/**
 * @description handler for admin panel
 */
const fs = require('fs');
const co = require('co');
const prompt = require('co-prompt');
const chalk = require('chalk');

/**
 * set log color
 */
const logGreen = chalk.green;
const logRed = chalk.red;
const logYellow = chalk.yellow;

const templateUrl = 'https://github.com/werts/admin-template.git';

const init = () => {
	console.log(logGreen('Welcome to the Admin panel scaffolding tool...'));

	co(function *(){
		let panelName = yield prompt('name:');
		let panelVersion = yield prompt('version(defalut:1.0.0):');
		let panelLisence = yield prompt('lisence:');
		let panelRepo = yield prompt('repository:');
		let confirm = yield prompt('confirm? y/n:');

		if ('y' === confirm){
			console.log(logGreen('Starting...'));

			console.log(logGreen('Created.'));
			process.exit();
		}else if('n' === confirm){
			console.log(logYellow('Cancelled.'));
			process.exit();
		}
	});
};

const dispatch = (cmd, args) => {
	switch(cmd) {
		case 'init':
			init(args);
			break;
		default:
			break;
	}
};

module.exports = {
	dispatch
}