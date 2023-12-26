import chalk from 'chalk';
import { GuildData } from '../database/GuildData.js';

export function guildMemberAdd(client) {
	client.on('guildMemberAdd', async (guild, member) => {

		try {
			const WelcomeChannelId = "1177539460548796416";
			const WelcomeChannel = guild.channels.get(WelcomeChannelId);
			let WelcomeMessage = {
				title: `Welcome ${member.username}!`,
				color: Number(client.config.colour),
				description: `Welcome ${member.mention} at **${guild.name}**\n^^\nServer Member:\` ${guild.memberCount.toLocaleString()}\``,
				image: {
					url: "https://media.discordapp.net/attachments/1177188309315891230/1177543583184724028/2045B3B8-5876-419B-910C-EF483DC323D1.png?ex=6572e3eb&is=65606eeb&hm=29b6f84c6c45b3cbffd99710&"
				},
				timestamp: new Date()
			}

			await WelcomeChannel.createMessage({ content: `${member.mention}`, embeds: [WelcomeMessage] });
		} catch (error) {
			console.error('Error:', error);
		}

		let guildData = await GuildData.findOne({ guildID: "1176811262202626118" });

		if (!guildData) {
			guildData = new GuildData({ guildID: "1176811262202626118", collabChannels: [] });
		}

		try {
			for (let i = guildData.collabChannels.length - 1; i >= 0; i--) {
				const channelData = guildData.collabChannels[i];
				const guild = client.guilds.get("1176811262202626118");
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
			// 5 different channels to mention the new member
			const channelIds = [
				"1177185619202560010",
				"1186241336236576821"
			];
			const mentionDelay = 3000; // 3 seconds
			for (let i = 0; i < channelIds.length; i++) {
				const channel = guild.channels.get(channelIds[i]);
				if (channel) {
					const message = await channel.createMessage(`${member.mention}`);
					setTimeout(() => {
						message.delete();
					}, mentionDelay);
				}
			}
		} catch (error) {
			console.error('Error:', error);
		}

	});

	console.log(chalk.cyanBright('[Listener] guildMemberAdd is loaded'));
}
