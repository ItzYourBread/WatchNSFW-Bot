import { GuildData } from "../database/GuildData.js";
import axios from "axios";

export function Collab(client) {
	// Move this part outside of the ready event
	setInterval(async () => {
		let guildData = await GuildData.findOne({ guildID: "1087406555609174160" });

		if (!guildData) {
			guildData = new GuildData({ guildID: "1087406555609174160", collabChannels: [] });
		}

		// Iterate through the collabChannels array and check each channel and webhook
		for (let i = guildData.collabChannels.length - 1; i >= 0; i--) {
			const channelData = guildData.collabChannels[i];
			try {
				const guild = client.guilds.get("1087406555609174160"); // Replace with your guild ID
				if (!guild) {
					console.error('Guild not found.');
					return; // Skip this iteration if guild not found
				}

				const channel = guild.channels.get(channelData[0].channelID);
				console.log(channel.name)

				try {
					// Attempt to access the webhook link
					let data = await axios.get(channelData[0].webhookLink);
					console.log(data.status)

					// If we reach this point, there was no error accessing the webhook link
					// The channel and webhook are assumed to be valid

					if (channel) {
						// The channel exists, no action needed
					} else {
						// The channel doesn't exist, remove collab data
						guildData.collabChannels.splice(i, 1);
						guildData.save(); // Save the updated document
					}
				} catch (webhookError) {
					// Handle errors when accessing the webhook link
					if (webhookError.response && webhookError.response.status === 404) {
						// Webhook is deleted (404), delete the channel and remove collab data
						if (channel) {
							channel.delete()
								.then(() => {
									console.log(`Deleted channel: ${channel.name}`);
									// Remove the collab data from the array
									guildData.collabChannels.splice(i, 1);
									guildData.save(); // Save the updated document
								})
								.catch(channelError => {
									console.error(`Error deleting channel: ${channelError}`);
								});
						}
					} else {
						console.error('Error checking webhook:', webhookError);
					}
				}
			} catch (error) {
				// Handle other errors here
				console.error('Error checking channel or webhook:', error);
			}
		}
	}, 10000);
}
