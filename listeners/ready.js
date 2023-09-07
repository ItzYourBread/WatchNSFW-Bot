import chalk from 'chalk';
import { RoleMenu } from "../system/rolemenu.js";
import { Collab } from "../system/collab.js";

const categoryDividers = {
	"World Locations": "1125355992872394883",
	"Current DMs Status": "1125355992872394883",
	"Pronouns": "1125355992872394883",
	"Relationship Status": "1126926629155905576",
	"Sexuality": "1125355992872394883",
	"Sexual Kinks": "1127181008329003048",
	"Colours": "1127292328030257266"
};

export function ready(client) {
	client.on('ready', () => {
		client.editStatus('online', {
			name: 'From WatchNSFW',
			type: 0,
		});
		console.log(
			chalk.greenBright(
				`[Discord API] ${client.user.username} is now connected to Discord!`
			)
		);
	});
	RoleMenu(client);
	Collab(client);
	console.log(chalk.cyanBright('[Listener] ready is loaded'));
}