import { Client } from 'eris';
import { listener, command, database } from './utils/index.js';
import figlet from 'figlet';
import chalk from 'chalk';
import 'dotenv/config';
import "./server.js";
import config from "./config.js";

console.clear();
console.log(
	chalk.hex('#DEADED')(
		figlet.textSync("NSFW", { horizontalLayout: 'full' })
	)
);
//

const client = new Client(process.env.TOKEN, {
	restMode: true,
	autoreconnect: true,
	firstShardID: 0,
	lastShardID: 0,
	maxShards: 0,
	allowedMentions: {
		everyone: false,
		users: true,
		roles: false,
		repliedUser: true
	},
	intents: ['guilds', 'guildMessages', 'guildMembers', 'guildEmojis', "guildMessageTyping"],
});

client.config = config;

database.connect();

listener.ready(client);
listener.error(client);
listener.interactionCreate(client);
listener.messageCreate(client);
listener.guildMemberAdd(client);

command.global(client);

client.connect();