import { PojModel } from '../../database/PojModel.js';

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
			let pojData = await PojModel.findOne({ guildId });

			if (!pojData) {
				pojData = new PojModel({ guildId, channelIds: [] });
			}

			const channelIds = pojData.channelIds;

			if (subCommand === 'add') {
				if (channelIds.includes(channel)) {
					await interaction.createMessage({
						content: `The <#${channel}> is already added for (POJ) ping for join.`,
						flags: 64,
					});
				} else {
					channelIds.push(channel);
					await pojData.save();
					await interaction.createMessage({
						content: `The <#${channel}> is added for (POJ) ping for join.`,
						flags: 64,
					});
				}
			} else if (subCommand === 'remove') {
				if (!channelIds.includes(channel)) {
					await interaction.createMessage({
						content: `The <#${channel}> is not in (POJ) ping for join.`,
						flags: 64,
					});
				} else {
					const updatedChannels = channelIds.filter((c) => c !== channel);
					pojData.channelIds = updatedChannels;
					await pojData.save();
					await interaction.createMessage({
						content: `The <#${channel}> is removed from (POJ) ping for join.`,
						flags: 64,
					});
				}
			} else if (subCommand === 'view') {
				if (pojData && pojData.channelIds.length > 0) {
					let channels = '';
					pojData.channelIds.map((e) => {
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
