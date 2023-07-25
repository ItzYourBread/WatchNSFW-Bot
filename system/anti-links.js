const exemptedRoleIDs =
	[
		"1087422890456133774",
		"1110205300184711169",
		"1087424227453448372",
		"1087424736352534570",
		"1087425015378608159",
		"1109779008004046848"
	];

const linkCounter = new Map();

export function anti_links(client) {
	client.on("messageCreate", async (msg) => {
		const links = /(https:\/\/)?(www\.)?(((discord(app)?)?\.com\/invite)|((discord(app)?)?\.gg))\/(?<invite>.+)/;

		if (links.test(msg.content)) {
			if (msg.member && msg.member.roles.some(role => exemptedRoleIDs.includes(role))) {
				return;
			}

			const userID = msg.member.id;
			linkCounter.set(userID, (linkCounter.get(userID) || 0) + 1);

			const guild = client.guilds.get("1087406555609174160");
			const member = guild.members.get(msg.member.id);

			if (linkCounter.get(userID) >= 3) {
				if (msg.member) {
					await member.addRole("1132969839795912744")
				}
				linkCounter.delete(userID);
				client.deleteMessage(msg.channel.id, msg.id);
				return;
			}

			client.deleteMessage(msg.channel.id, msg.id);
		}
	});
}