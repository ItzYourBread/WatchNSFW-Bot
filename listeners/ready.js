import chalk from 'chalk';
import { RoleMenu } from "../system/rolemenu.js";

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
    console.log(chalk.cyanBright('[Listener] ready is loaded'));
}