const WhiteListRoles =
	[
		"1176915812355944508", // founder role
		"1177655431699640392", // admin role
		"1177655802002165881", // special guest role
		"1177650373704564877" // verified role
	];

	export function anti_links(client) {
		client.on("messageCreate", async (msg) => {
			let links = /(https?:\/\/(?:www\.|(?!www))[^\s.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,})/g;
			if (links.test(msg.content)) {
				if (msg.member && msg.member.roles.some(role => WhiteListRoles.includes(role))) {
					return;
				} else {
					try {
						await client.deleteMessage(msg.channel.id, msg.id);
					} catch (error) {
						console.error('Error deleting message:', error);
					}
				}
			}
		});
	}