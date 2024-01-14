import chalk from 'chalk';
import 'dotenv/config';

import { anti_links } from "../system/anti-links.js";

export async function messageCreate(client) {
	client.on('messageCreate', async (msg) => {
		if (msg.author.bot) return;
		
		if (msg.channel.id === '1194186144406061156') {
			if (msg.content) {
				await msg.delete(); // Delete the text message

				let warningMessage = await msg.channel.createMessage({
					content: `${msg.author.mention}`,
					embeds: [{
						color: client.config.colour,
						title: '⚠️ Warning',
						description: "Only image is allowed to send in this channel, Thankyou.!!",
						timestamp: new Date(),
					}]
				})
				setTimeout(() => {
					warningMessage.delete();
				}, 8000);
			}

			if (msg.attachments.length > 0) {
				// React to the message with smash and pass emojis
				await msg.addReaction('wn_smash:1194234030552514651'); // Smash reaction
				await msg.addReaction('wn_pass:1194234138534875137'); // Pass reaction
			}
		}

		anti_links(client);
	});

	console.log(chalk.cyanBright('[Listener] messageCreate is loaded'));
}