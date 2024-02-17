export default {
	data: {
		name: "channel",
		description: "Manipulate channel settings.",
		options: [{
			name: "nsfw",
			type: 3,
			description: "Turn NSFW on or off for the channel.",
			required: true,
			choices: [
				{ name: "On", value: "on" },
				{ name: "Off", value: "off" }
			]
		}]
	},
	async execute(client, interaction) {
		await interaction.defer();

		if (!interaction.member.permissions.has(["manageChannels"])) {
			return interaction.editOriginalMessage("You don't have rights to use this command.");
		}

		const nsfwSetting = interaction.data.options[0].value;

		if (nsfwSetting === "on") {
			interaction.channel.edit({ nsfw: true });
			interaction.editOriginalMessage('NSFW turned on for the channel.');
		} else if (nsfwSetting === "off") {
			interaction.channel.edit({ nsfw: false });
			interaction.editOriginalMessage('NSFW turned off for the channel.');
		} else {
			interaction.editOriginalMessage('Invalid option. Please choose either "on" or "off".');
		}
	}
};
