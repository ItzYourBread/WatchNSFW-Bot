import chalk from 'chalk';
import { RoleMenu } from "../system/rolemenu.js";

const categoryDividers = {
	"World Locations": "1179400487234179124",
	"Current DMs Status": "1179400487234179124",
	"Pronouns": "1179400487234179124",
	"Relationship Status": "1179405008630972466",
	"Sexuality": "1179400487234179124",
	"Sexual Kinks": "1179405670970298449",
	"Colours": "1179409149067542659"
};

export function ready(client) {
	client.on('ready', () => {
		client.editStatus('online', {
			name: 'Managing WatchNSFW.',
			type: 0,
		});
		console.log(
			chalk.greenBright(
				`[Discord API] ${client.user.username} is now connected to Discord!`
			)
		);
	});
	RoleMenu(client);
	console.log(chalk.cyanBright('[Listener] ready is loaded'));
}