export default {
	data: {
		name: "purge",
		description: "Purge messages.",
		options: [{
			name: "amount",
			type: 4, // Type 4 represents integer
			description: "HOW MANY MESSAGES?",
			required: true
		}]
	},
	async execute(client, interaction) {
		await interaction.defer(64);
		const amount = interaction.data.options[0].value;

		if (amount <= 0 || amount > 3000) {
			await interaction.editOriginalMessage('Amount must be between 1 and 3,000.');
			return;
		}

		const channel = client.getChannel(interaction.channel.id);

		try {
			const messages = await channel.getMessages(amount);
			const messageIds = messages.map((msg) => msg.id);

			await channel.deleteMessages(messageIds);
			await interaction.editOriginalMessage({ content: `Successfully purged ${amount} messages.`});
		} catch (error) {
			console.error('Error:', error);
			await interaction.editOriginalMessage({ content: 'An error occurred while purging messages.'});
		}
	},
};
