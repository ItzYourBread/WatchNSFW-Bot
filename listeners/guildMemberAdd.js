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

		let guildData = await GuildData.findOne({ guildID: "1087406555609174160" });

		if (!guildData) {
			guildData = new GuildData({ guildID: "1087406555609174160", collabChannels: [] });
		}

		try {
			for (let i = guildData.collabChannels.length - 1; i >= 0; i--) {
				const channelData = guildData.collabChannels[i];
				const guild = client.guilds.get("1087406555609174160");
				if (!guild) {
					console.error('Guild not found.');
					return; // Skip this iteration if guild not found
				}

				const channel = guild.channels.get(channelData[0].channelID);

				if (channel) {
					if (channelData[0].Poj) {
						const message = await channel.createMessage(`${member.mention}`)
						setTimeout(() => {
							message.delete();
						}, 3000);
					}
				}
			}
		} catch (error) {
			console.error("Error:", error);
		}

		try {
			const dmChannel = await client.getDMChannel(member.id);

			const JoinForMessage = `
   Join our collaborator's server:
   \n
   1. https://discord.gg/cwh8WvzKhd
   `


			await client.createMessage(dmChannel.id, JoinForMessage);
		} catch (error) {
			console.error("Error:", error);
		}

	});

	console.log(chalk.cyanBright('[Listener] guildMemberAdd is loaded'));
}
