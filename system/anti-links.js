const WhiteListRoles =
	[
		"1176915812355944508", // founder role
		"1177655431699640392", // admin role
		"1177655802002165881", // special guest role
		"1177650373704564877" // verified role
	];

const linkCounter = new Map();

export function anti_links(client) {
	client.on("messageCreate", async (msg) => {
		const links =
			/(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?\/[a-zA-Z0-9]{2,}|((https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?)|(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})?/g;
		if (links.test(msg.content)) {
			if (msg.member && msg.member.roles.some(role => WhiteListRoles.includes(role))) {
				return;
			}

			const userID = msg.member.id;
			linkCounter.set(userID, (linkCounter.get(userID) || 0) + 1);

			const guild = client.guilds.get("1176811262202626118");
			const member = guild.members.get(msg.member.id);

			if (linkCounter.get(userID) >= 1) {
				if (msg.member) {
					// ban the user instead muting it.
					await member.ban({
						deleteMessageDays: 7,
						reason: "Sending Unwanted links",
					});
				}
				linkCounter.delete(userID);
				client.deleteMessage(msg.channel.id, msg.id);
				return;
			}

			client.deleteMessage(msg.channel.id, msg.id);
		}
	});
}