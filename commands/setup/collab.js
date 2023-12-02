import { GuildData } from "../../database/GuildData.js";

export default {
	data: {
		name: "collab",
		description: "Collaborate with another server.",
		options: [
			{
				name: "channel-name",
				type: 3,
				description: "What will be the channel server?",
				required: true,
			},
			{
				name: "join-for-ping",
				type: 5,
				description: "Should be in ping for join?",
				required: true,
			},
			{
				name: "advertisement-text",
				type: 3,
				description: "insert the template/advertisement text here.",
				required: true,
			}
		]
	},
	async execute(client, interaction) {
		await interaction.defer();

		if (!interaction.member.permissions.has(["administrator"])) {
			return interaction.editOriginalMessage("You don't have rights to use this command.");
		}

		let guildData = await GuildData.findOne({ guildID: "1176811262202626118" });

		if (!guildData) {
			guildData = new GuildData({ guildID: "1176811262202626118", collabChannels: [] });
		}

		const channelName = "⭐⠐" + interaction.data.options[0].value;
		const Poj = interaction.data.options[1].value;
		const adText = interaction.data.options[2].value;

		let categoryID;

		if (Poj) {
			categoryID = "1179786668325216286"
		} else {
			categoryID = "1179786386925174825"
		}

		// Webhook is active, create the channel
		const guild = client.guilds.get("1176811262202626118"); // Replace with your guild ID
		const category = guild.channels.get(categoryID);

		if (!guild) {
			return interaction.editOriginalMessage('Guild not found.');
		}

		if (!category) {
			return interaction.editOriginalMessage('Category not found.');
		}

		guild.createChannel(channelName, 0, { parentID: category.id, nsfw: true }) // 0 for text channel
			.then(newChannel => {
				// Save channel data in the collabChannels array
				const channelData = {
					channelID: newChannel.id,
					Poj: Poj,
				}

				guildData.collabChannels.push(channelData);
				guildData.save(); // Save the updated document

				// Send an advertisement message in the new channel
				newChannel.createMessage(adText)
					.then(() => {
						console.log('Advertisement message sent.');
					})
					.catch(err => {
						console.error('Error sending advertisement message:', err);
					});

				interaction.editOriginalMessage('Channel created successfully.');
			})
			.catch(error => {
				console.error(`Error creating channel: ${error}`);
				interaction.editOriginalMessage('Error creating channel.');
			});
	}
};