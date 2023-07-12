import chalk from 'chalk';
import { Guild } from '../database/Guild.js';

export function guildMemberAdd(client) {
	client.on('guildMemberAdd', async (guild, member) => {
		const Guild = await Guild.findOne({ guildId: guild.id });
		// POJ function 👇👇👇
		try {

			if (Guild && Guild.pojChannels.length > 0) {
				const welcomeMessage = `${member.mention}!`; // Customize the welcome message using the member's mention and emojis

				Guild.pojChannels.forEach(async (channelId) => {
					const welcomeChannel = guild.channels.get(channelId);
					if (welcomeChannel) {
						const message = await welcomeChannel.createMessage(welcomeMessage);
						setTimeout(() => {
							message.delete();
						}, 2000); // Delete the message after 2 seconds (adjust the time as needed)
					}
				});
			} else {
				console.log(chalk.yellow(`[Warning] No POJ channels found in guild "${guild.name}"`));
			}
		} catch (error) {
			console.error('Error:', error);
		}

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
