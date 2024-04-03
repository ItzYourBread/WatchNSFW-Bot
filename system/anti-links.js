const WhiteListRoles =
	[
		"1176915812355944508", // founder role
		"1177655431699640392", // admin role
		"1177655802002165881", // special guest role
		"1177650373704564877" // verified role
	];

export function anti_links(client) {
	client.on("messageCreate", async (msg) => {
		const links = /(https?:\/\/[^\s]+)/g; // Regex to match URLs
		if (links.test(msg.content)) {
			if (msg.member && msg.member.roles.some(role => WhiteListRoles.includes(role))) {
				return;
			}

			const guild = client.guilds.get("1176811262202626118");
			const member = guild.members.get(msg.member.id);

			if (member) {
				// Check if the user has sent only one link
				if (msg.content.match(links).length === 1) {
					// Ban the user with 7-day timeout
					await member.ban(7, "Sending Unwanted links");
					client.deleteMessage(msg.channel.id, msg.id);
					return;
				}
			}
		}
	});
}
