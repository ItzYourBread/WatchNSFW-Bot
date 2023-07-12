import { GuildData } from '../../database/GuildData.js';

export default {
	data: {
		name: 'poj',
		description: 'SubCommands of Poj',
		options: [
			{
				name: 'add',
				description: 'Add a channel for POJ',
				type: 1,
				options: [
					{
						name: 'channel',
						description: 'The channel to add for POJ',
						type: 7,
						required: true,
					},
				],
			},
			{
				name: 'remove',
				description: 'Remove a channel from POJ',
				type: 1,
				options: [
					{
						name: 'channel',
						description: 'The channel to remove from POJ',
						type: 7,
						required: true,
					},
				],
			},
			{
				name: 'view',
				description: 'View all the POJ channels',
				type: 1,
			},
		],
	},
	async execute(client, interaction) {
		const subCommand = interaction.data.options[0].name;
		const channelOption = interaction.data.options[0].options[0];
		const channel = channelOption ? channelOption.value : null;
		const guildId = interaction.guildID;

		try {
			let pojData = await GuildData.findOne({ guildId });

			if (!pojData) {
				pojData = new GuildData({ guildId, pojChannels: [] });
			}

			const pojChannels = pojData.pojChannels;

			if (subCommand === 'add') {
				if (pojChannels.includes(channel)) {
					await interaction.createMessage({
						content: `The <#${channel}> is already added for (POJ) ping for join.`,
						flags: 64,
					});
				} else {
					pojChannels.push(channel);
					await pojData.save();
					await interaction.createMessage({
						content: `The <#${channel}> is added for (POJ) ping for join.`,
						flags: 64,
					});
				}
			} else if (subCommand === 'remove') {
				if (!pojChannels.includes(channel)) {
					await interaction.createMessage({
						content: `The <#${channel}> is not in (POJ) ping for join.`,
						flags: 64,
					});
				} else {
					const updatedChannels = pojChannels.filter((c) => c !== channel);
					pojData.pojChannels = updatedChannels;
					await pojData.save();
					await interaction.createMessage({
						content: `The <#${channel}> is removed from (POJ) ping for join.`,
						flags: 64,
					});
				}
			} else if (subCommand === 'view') {
				if (pojData && pojData.pojChannels.length > 0) {
					let channels = '';
					pojData.pojChannels.map((e) => {
						channels += `<#${e}>\n`;
					});
					await interaction.createMessage({
						embeds: [
							{
								title: 'All (POJ) Channels',
								color: Number(client.config.colour),
								description: "Here you can see all the (POJ) ping for join channels.\n\n" + channels,
								timestamp: new Date
							},
						],
					});
				} else {
					await interaction.createMessage({
						content: 'There are no (POJ) ping for join channels active for this server.',
						flags: 64,
					});
				}
			}
		} catch (error) {
			console.error('Error:', error);
			await interaction.createMessage('An error occurred while executing the command.');
		}
	},
};
