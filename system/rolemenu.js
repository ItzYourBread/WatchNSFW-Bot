import { CommandInteraction } from "eris";

const roleMenus = [
	{
		name: 'World Locations',
		messageID: "1128255756488167504",
		description: "> **Choose your location.**",
		min: 0,
		max: 1,
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
		messageID: "1128255759893921822",
		description: "> **Choose your DMs status.**",
		min: 0,
		max: 1,
		roles: [
			{ name: 'Ask to DM', value: '1125357618249072711' },
			{ name: 'DM Closed', value: '1125357694669303858' },
			{ name: "DM Open", value: "1125358094877216769" },
			{ name: "Verified DM's Only", value: "1125358291908841552" }
		],
	},
	{
		name: 'Pronouns',
		messageID: "1128255765996650586",
		description: "> **Choose your pronouns.**",
		min: 0,
		max: 3,
		roles: [
			{ name: 'He/Him', value: "1125358450076029060" },
			{ name: 'She/Her', value: "1125358513489711175" },
			{ name: "They/Them", value: "1125358588437745734" }
		],
	},
	{
		name: "Sexuality",
		messageID: "1128255771252105286",
		description: "> **Choose your sexuality.**",
		min: 0,
		max: 1,
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
		messageID: "1128255775467393085",
		description: "> **Choose your sexual kink(s).**",
		min: 0,
		max: 22,
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
		messageID: "1128255778931867669",
		description: "> **Choose your current relationship status.**",
		min: 0,
		max: 2,
		roles: [
			{ name: 'Single', value: "1125359946314285086" },
			{ name: 'Taken', value: "1125360032192659528" },
			{ name: "Looking", value: "1125360106792558674" },
			{ name: "Not Looking", value: "1125360146680402021" },
		],
	},
	{
		name: "Colours",
		messageID: "1128255783159730267",
		description: "> **Choose your favourite colour for WatchMSFW, it will appear in your nickname.**",
		min: 0,
		max: 1,
		roles: [
			{ name: 'Love Bite', value: "1127295316991946792" },
			{ name: 'Pop My Cherry', value: "1127295508671631543" },
			{ name: 'Spank Me', value: "1127295636530810941" },
			{ name: 'Cheeky Peach', value: "1127295882400911422" },
			{ name: 'Orgasm Orange', value: "1127296136374395002" },
			{ name: 'Gold Digga', value: "1127296269761662987" },
			{ name: 'Cream Pie', value: "1127296508912476239" },
			{ name: 'Lick Me Lime', value: "1127296632703164466" },
			{ name: 'Daddy Green', value: "1127296763519320104" },
			{ name: 'Blowjob Mints', value: "1127297003647406250" },
			{ name: 'Titty Teal', value: "1127297164939378748" },
			{ name: 'Sugarbaby Blue', value: "1127297318178263091" },
			{ name: 'After Dark', value: "1127297506716426270" },
			{ name: 'Blue Balls', value: "1127297643433971864" },
			{ name: 'Sex Bomb', value: "1127297752137732106" },
			{ name: 'Eggplant Purple', value: "1127297918274113666" },
			{ name: 'Whipped', value: "1127298140781944893" },
			{ name: 'Lavender Lace', value: "1127298286957629540" },
			{ name: 'Dusty Purple', value: "1127298405379616913" },
			{ name: 'French Kisses', value: "1127298569871831080" },
			{ name: 'Hot Pink', value: "1127298675304042526" },
			{ name: 'Pussy Popping Pink', value: "1127298890341814342" },
			{ name: 'Daddy’s Princess', value: "1127299004485607475" },
			{ name: 'Snowball', value: "1127299418757013596" },
		]
	}
];
export { roleMenus };

export function RoleMenu(client) {
	client.on('ready', () => {
		
		const guildId = '1087406555609174160';
		const channelId = '1124996390582489140';

		const guild = client.guilds.get(guildId);
		const channel = guild.channels.get(channelId);

		roleMenus.forEach((roleMenu) => {
			let description = roleMenu.description;

			if (roleMenu.name === "Colours") {
				const coloursMention = roleMenu.roles.map((r) => `<@&${r.value}>`).join(", ");
				description += `\n${coloursMention}`;
			}
			let content = {
				title: roleMenu.name,
				color: client.config.colour,
				description: description,
				thumbnail: {
					url: "https://media.discordapp.net/attachments/1102648905088368690/1125024027958853733/C1D285B5-67CB-4E83-B9CC-71831FB167F5.png",
					height: 150,
					width: 150
				},
				timestamp: new Date()
			};

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
							min_values: roleMenu.min,
							max_values: roleMenu.max,
						},
					],
				},
			];

			// client.createMessage(channel.id, { embed: content, components });
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
					} else if (roleToAdd && member.roles.includes(roleToAdd.id)) {
						
					}
				} else {
					const roleToRemove = guild.roles.get(role.value);
					if (roleToRemove && member.roles.includes(roleToRemove.id)) {
						rolesToRemove.push(roleToRemove.name);
						member.removeRole(roleToRemove.id);
					} 
				} 
			});
			await interaction.acknowledge()
		}
	});
	//console.log(chalk.)
}
