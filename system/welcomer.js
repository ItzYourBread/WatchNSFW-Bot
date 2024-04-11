export function welcomer(client) {
    client.on("guildMemberAdd", async (member) => {

        try {
            const WelcomeChannelId = "1177539460548796416";
            const WelcomeChannel = client.channels.get(WelcomeChannelId);
            let WelcomeMessage = {
                title: `Welcome ${member.username}!`,
                color: Number(client.config.colour),
                description: `Welcome ${member.mention} at **${guild.name}**\n^^\nServer Member:\` ${guild.memberCount.toLocaleString()}\``,
                image: {
                    url: "https://media.discordapp.net/attachments/1177188309315891230/1177543583184724028/2045B3B8-5876-419B-910C-EF483DC323D1.png?ex=6572e3eb&is=65606eeb&hm=29b6f84c6c45b3cbffd99710&"
                },
                timestamp: new Date()
            }

            await WelcomeChannel.createMessage({ content: `${member.mention}`, embed: WelcomeMessage });
        } catch (error) {
            console.error('Error:', error);
        }
    })
}
