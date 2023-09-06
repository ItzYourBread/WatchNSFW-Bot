import chalk from 'chalk';
import { GuildData } from '../database/GuildData.js';

export function guildMemberAdd(client) {
	client.on('guildMemberAdd', async (guild, member) => {

		try {
			const WelcomeChannelId = "1087427438964908083";
			const WelcomeChannel = guild.channels.get(WelcomeChannelId);
			let WelcomeMessage = {
				title: `Welcome ${member.username}!`,
				color: Number(client.config.colour),
				description: `Welcome ${member.mention} at **${guild.name}**\n^^\nServer Member:\` ${guild.memberCount.toLocaleString()}\``,
				image: {
					url: "https://media.discordapp.net/attachments/1102648905088368690/1123559095396487290/3BD59E7A-CFF9-47B2-ADD2-B71BE6085B8A.png"
				},
				timestamp: new Date()
			}

			await WelcomeChannel.createMessage({ content: `${member.mention}`, embeds: [WelcomeMessage] });
		} catch (error) {
			console.error('Error:', error);
		}
	});

	console.log(chalk.cyanBright('[Listener] guildMemberAdd is loaded'));
}
