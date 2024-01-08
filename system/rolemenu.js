import { CommandInteraction } from "eris";

const roleMenus = [
	{
		name: 'World Locations',
		messageID: "1179419136212881440",
		description: "> **Choose your location.**",
		min: 0,
		max: 1,
		roles: [
			{ name: 'Asia', value: '1179400618926932029' },
			{ name: 'Europe', value: '1179400670261022770' },
			{ name: "Africa", value: "1179400711348437003" },
			{ name: "South America", value: "1179400765337501737" },
			{ name: "North America", value: "1179400846556012567" },
			{ name: "Oceania", value: "1179400902625468466" },
		],
	},
	{
		name: 'Current DMs Status',
		messageID: "1179419143389315103",
		description: "> **Choose your DMs status.**",
		min: 0,
		max: 1,
		roles: [
			{ name: 'Ask to DM', value: '1179402256995590164' },
			{ name: 'DM Closed', value: '1179402326818168892' },
			{ name: "DM Open", value: "1179402381352509551" },
			{ name: "Verified DM's Only", value: "1179402461128167434" }
		],
	},
	{
		name: 'Pronouns',
		messageID: "1179419148187611236",
		description: "> **Choose your pronouns.**",
		min: 0,
		max: 3,
		roles: [
			{ name: 'He/Him', value: "1179402925336965162" },
			{ name: 'She/Her', value: "1179402958325166140" },
			{ name: "They/Them", value: "1179403003472662568" }
		],
	},
	{
		name: "Sexuality",
		messageID: "1179419152113467402",
		description: "> **Choose your sexuality.**",
		min: 0,
		max: 1,
		roles: [
			{ name: "Asexual", value: "1179403094040252416" },
			{ name: "Bisexual", value: "1179403245769207909" },
			{ name: "Demisexual", value: "1179403330326372372" },
			{ name: "Gay", value: "1179404032641618001" },
			{ name: "Lesbian", value: "1179404084978135120" },
			{ name: "Pansexual", value: "1179404142301679736" },
			{ name: "Straight", value: "1179404193488961626" }
		],
	},
	{
		name: "Sexual Kinks",
		messageID: "1179419155728957440",
		description: "> **Choose your sexual kink(s).**",
		min: 0,
		max: 22,
		roles: [
			{ name: "Brat", value: "1179405932401274971" },
			{ name: "Daddy/Mummy", value: "1179405992174305342" },
			{ name: "Degrade", value: "1179406046758969375" },
			{ name: "Degrader", value: "1179406111699386521" },
			{ name: "Dominant", value: "1179406198852812901" },
			{ name: "Exhibitionist", value: "1179406353492615168" },
			{ name: "Experimentalist", value: "1179406958277709854" },
			{ name: "Furry", value: "1179407015114706994" },
			{ name: "Hunter", value: "1179407062262874215" },
			{ name: "Masochist", value: "1179407183524413560" },
			{ name: "Master/Misstress", value: "1179407275841044530" },
			{ name: "Owner", value: "1179407345231609926" },
			{ name: "Pet", value: "1179407378093969408" },
			{ name: "Prey", value: "1179407425980334111" },
			{ name: "Rigger", value: "1179407488865546290" },
			{ name: "Rope Bunny", value: "1179407716431695903" },
			{ name: "Sadist", value: "1179407775248420985" },
			{ name: "Slave", value: "1179407823709405235" },
			{ name: "Submissive", value: "1179407907285123144" },
			{ name: "Switch", value: "1179407954089349160" },
			{ name: "Vanilla", value: "1179408016949379163" },
			{ name: "Voyeur", value: "1179408102622232657" },
		], 
	},
	{
		name: 'Relationship Status',
		messageID: "1179419160950878339",
		description: "> **Choose your current relationship status.**",
		min: 0,
		max: 2,
		roles: [
			{ name: 'Single', value: "1179405104357572708" },
			{ name: 'Taken', value: "1179405157985960027" },
			{ name: "Looking", value: "1179405203955515402" },
			{ name: "Not Looking", value: "1179405250747191426" },
		],
	},
	{
		name: "Colours",
		messageID: "1179419163207422002",
		description: "> **Choose your favourite colour for WatchMSFW, it will appear in your nickname.**",
		min: 0,
		max: 1,
		roles: [
			{ name: 'Love Bite', value: "1179410572287156305" },
			{ name: 'Pop My Cherry', value: "1179410738880708608" },
			{ name: 'Spank Me', value: "1179410855083913318" },
			{ name: 'Cheeky Peach', value: "1179410984448831508" },
			{ name: 'Orgasm Orange', value: "1179411145669496862" },
			{ name: 'Gold Digga', value: "1179411315601707008" },
			{ name: 'Cream Pie', value: "1179411450905759797" },
			{ name: 'Lick Me Lime', value: "1179411613426655292" },
			{ name: 'Daddy Green', value: "1179411742858678312" },
			{ name: 'Blowjob Mints', value: "1179411854796271656" },
			{ name: 'Titty Teal', value: "1179412243805384725" },
			{ name: 'Sugarbaby Blue', value: "1179412386785017887" },
			{ name: 'After Dark', value: "1179412501536985212" },
			{ name: 'Blue Balls', value: "1179412653437878292" },
			{ name: 'Sex Bomb', value: "1179412789761151017" },
			{ name: 'Eggplant Purple', value: "1179412981944176683" },
			{ name: 'Whipped', value: "1179413139918438400" },
			{ name: 'Lavender Lace', value: "1179413305320812544" },
			{ name: 'Dusty Purple', value: "1179413443363741767" },
			{ name: 'French Kisses', value: "1179413630966579350" },
			{ name: 'Hot Pink', value: "1179413745647243285" },
			{ name: 'Pussy Popping Pink', value: "1179413918725185546" },
			{ name: 'Daddy’s Princess', value: "1179414135524569098" },
			{ name: 'Snowball', value: "1179414255431323699" },
		]
	}
];
const categoryDividers = {
	"World/DMs/Pronouns/Sexuality": "1179400487234179124",
	"Relationship Status": "1179405008630972466",
	"Sexual Kinks": "1179405670970298449",
	"Colours": "1179409149067542659"
};

export function RoleMenu(client) {
	client.on('ready', () => {

		const guildId = '1176811262202626118';
		const channelId = '1179397609136336956';

		const guild = client.guilds.get(guildId);
		const channel = guild.channels.get(channelId);

		// Function to assign dividers for each category
		function assignCategoryDividers() {
			for (const [category, dividerId] of Object.entries(categoryDividers)) {
				const roleMenuNames = category === "World/DMs/Pronouns/Sexuality"
					? ["World Locations", "Current DMs Status", "Pronouns", "Sexuality"]
					: [category];

				const relevantRoleMenus = roleMenus.filter(menu =>
					roleMenuNames.includes(menu.name)
				);

				const roleIds = relevantRoleMenus.flatMap(menu =>
					menu.roles.map(role => role.value)
				);

				guild.members.forEach((member) => {
					const hasRole = member.roles.some(role => roleIds.includes(role));

					if (hasRole && !member.roles.includes(dividerId)) {
						member.addRole(dividerId);
					} else if (!hasRole && member.roles.includes(dividerId)) {
						member.removeRole(dividerId);
					}
				});
			}
		}

		// Initial assignment on bot start
		assignCategoryDividers();

		// Repeat assignment every minute
		setInterval(() => {
			assignCategoryDividers();
		}, 5000);

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
					url: "https://cdn.discordapp.com/attachments/1193652080292921434/1193838749814112286/C1D285B5-67CB-4E83-B9CC-71831FB167F5.png?ex=65ae2bfa&is=659bb6fa&hm=7fa99022a371a6fd7127e22c1d75cf52fe6c6e79fcf1743bec019f974ff847d6&",
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
	});
}