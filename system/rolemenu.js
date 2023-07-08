import { CommandInteraction } from "eris";

const roleMenus = [
	{
		name: 'World Locations',
		description: "> **Choose your location.**",
		roles: [
			{ name: 'Asia', value: '1125356318543319110' },
			{ name: 'Europe', value: '1125356392040116379' },
			{ name: "Africa", value: "1125356483912155237" },
			{ name: "South America", value: "1125356895222386719" },
			{ name: "North America", value: "1125356553562759289" },
			{ name: "Oceania", value: "1125356611481899068" },
		],
	},
	{
		name: 'Current DMs Status',
		description: "> **Choose your DMs status.**",
		roles: [
			{ name: 'Ask to DM', value: '1125357618249072711' },
			{ name: 'DM Closed', value: '1125357694669303858' },
			{ name: "DM Open", value: "1125358094877216769" },
			{ name: "Verified DM's Only", value: "1125358291908841552" }
		],
	},
	{
		name: 'Pronouns',
		description: "> **Choose your pronouns.**",
		roles: [
			{ name: 'He/Him', value: "1125358450076029060" },
			{ name: 'She/Her', value: "1125358513489711175" },
			{ name: "They/Them", value: "1125358588437745734" }
		],
	},
	{
		name: "Sexuality",
		description: "> **Choose your sexuality.**",
		roles: [
			{ name: "Asexual", value: "1127181438077390948" },
			{ name: "Bisexual", value: "1127181490644598784" },
			{ name: "Demisexual", value: "1127181530821820428" },
			{ name: "Gay", value: "1127181576363585556" },
			{ name: "Lesbian", value: "1127181610031271966" },
			{ name: "Pansexual", value: "1127181653656219698" },
			{ name: "Straight", value: "1127181750594973776" }
		],
	},
	{
		name: "Sexual Kinks",
		description: "> **Choose your sexual kink(s).**",
		roles: [
			{ name: "Brat", value: "1127182378360643595" },
			{ name: "Daddy/Mummy", value: "1127182428528722001" },
			{ name: "Degrade", value: "1127182500955951154" },
			{ name: "Degrader", value: "1127182552365543455" },
			{ name: "Dominant", value: "1127182622628520048" },
			{ name: "Exhibitionist", value: "1127182774818844793" },
			{ name: "Experimentalist", value: "1127182867265490965" },
			{ name: "Furry", value: "1127183024451235912" },
			{ name: "Hunter", value: "1127183054516015214" },
			{ name: "Masochist", value: "1127183146220273806" },
			{ name: "Master/Misstress", value: "1127183234841706506" },
			{ name: "Owner", value: "1127183301514379295" },
			{ name: "Pet", value: "1127183350378020914" },
			{ name: "Prey", value: "1127183408209080331" },
			{ name: "Rigger", value: "1127183439884452021" },
			{ name: "Rope Bunny", value: "1127183473858326628" },
			{ name: "Sadist", value: "1127183556662272010" },
			{ name: "Slave", value: "1127183603751731320" },
			{ name: "Submissive", value: "1127183701479014440" },
			{ name: "Switch", value: "1127183764280328252" },
			{ name: "Vanilla", value: "1127183870727565324" },
			{ name: "Voyeur", value: "1127183937458950164" },
		],
	},
	{
		name: 'Relationship Status',
		description: "> **Choose your current relationship status.**",
		roles: [
			{ name: 'Single', value: "1125359946314285086" },
			{ name: 'Taken', value: "1125360032192659528" },
			{ name: "Looking", value: "1125360106792558674" },
			{ name: "Not Looking", value: "1125360146680402021" },
		],
	},
];


export function RoleMenu(client) {
	client.on('ready', () => {
		const guildId = '1087406555609174160';
		const channelId = '1124996390582489140';

		const guild = client.guilds.get(guildId);
		const channel = guild.channels.get(channelId);

		roleMenus.forEach((roleMenu) => {
			let content = {
				title: roleMenu.name,
				color: client.config.colour,
				description: roleMenu.description,
				thumbnail: {
					url: "https://media.discordapp.net/attachments/1102648905088368690/1125024027958853733/C1D285B5-67CB-4E83-B9CC-71831FB167F5.png",
					height: 150,
					width: 150
				},
				timestamp: new Date()
			};

			channel.createMessage({ embed: content }).then((message) => {
				const components = [
					{
						type: 1,
						components: [
							{
								type: 3,
								custom_id: `roleSelect_${roleMenu.name.replace(/\s+/g, '_')}`,
								placeholder: 'Choose a role',
								options: roleMenu.roles.map((r) => ({
									label: r.name,
									value: r.value,
									description: `Assign the ${r.name} role`,
								})),
								min_values: 0,
								max_values: roleMenu.roles.length,
							},
						],
					},
				];

				client.editMessage(channel.id, message.id, { embed: content, components });
			});
		});
	});

	client.on('interactionCreate', async (interaction) => {
		if (interaction instanceof CommandInteraction) {
			// Check if the interaction is a slash command
			return;
		}

		const interactionIdParts = interaction.data.custom_id.split('_');
		const menuName = interactionIdParts.slice(1).join(' ');

		const roleMenu = roleMenus.find((rm) => rm.name === menuName);

		if (roleMenu) {
			const selectedRoles = interaction.data.values;
			const guild = client.guilds.get(interaction.guildID);
			const member = guild.members.get(interaction.member.user.id);

			const rolesToAdd = [];
			const rolesToRemove = [];

			roleMenu.roles.forEach((role) => {
				if (selectedRoles.includes(role.value)) {
					const roleToAdd = guild.roles.get(role.value);
					if (roleToAdd && !member.roles.includes(roleToAdd.id)) {
						rolesToAdd.push(roleToAdd.name);
						member.addRole(roleToAdd.id);
					}
				} else {
					const roleToRemove = guild.roles.get(role.value);
					if (roleToRemove && member.roles.includes(roleToRemove.id)) {
						rolesToRemove.push(roleToRemove.name);
						member.removeRole(roleToRemove.id);
					}
				}
			});

			let response = '';

			if (rolesToAdd.length > 0) {
				response += `You have been assigned the following roles: ${rolesToAdd.join(', ')}. `;
			}

			if (rolesToRemove.length > 0) {
				response += `You have been removed from the following roles: ${rolesToRemove.join(', ')}. `;
			}

			if (response) {
				interaction.createMessage({ content: response, flags: 64, ephemeral: true });
			}
		}
	});

}

