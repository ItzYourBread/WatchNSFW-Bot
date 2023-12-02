export default {
	data: {
		name: "upload",
		description: "upload new xxx videos links",
		options: [
			{
				name: "link",
				description: "the link of the xxx videos",
				type: 3,
				required: true
			},
			{
				name: "channel",
				description: "Select the channel to send the videos",
				type: 3,
				required: true,
				choices: [
					{ name: "Ass", value: "1177995892905738240" },
					{ name: "Boobs", value: "1177995843912081489" },
					{ name: "Missionary", value: "1178000410653507594" },
					{ name: "Riding", value: "1178000446380589227" },
					{ name: "Doggy", value: "1178000490441736243" },
					{ name: "Creampie", value: "1178000601708245132" }
				]
			}
		]
	},
	async execute(client, interaction) {
		console.log("Hello")
	}
}