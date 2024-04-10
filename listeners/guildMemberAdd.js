import chalk from 'chalk';
import { poj } from '../system/poj.js';
import { welcomer } from '../system/welcomer.js';

export function guildMemberAdd(client) {
    client.on('guildMemberAdd', async (guild, member) => {

        let guildData = await GuildData.findOne({ guildID: "1176811262202626118" });

        try {
            for (let i = guildData.collabChannels.length - 1; i >= 0; i--) {
                const channelData = guildData.collabChannels[i];
                const channel = client.channels.get(channelData.channelID);

                if (channel && channelData.Poj) {
                    const message = await channel.createMessage(`${member.mention}`);
                    setTimeout(() => {
                        message.delete();
                    }, 3000);
                }
            }
        } catch (error) {
            console.error("Error:", error);
        }

        try {
            const channelIds = [
                "1177185619202560010",
                "1186241336236576821",
                "1212738498314899476",
                "1212738914612412417",
                "1212738588593364992"
            ];
            const mentionDelay = 3000;
            for (let i = 0; i < channelIds.length; i++) {
                const channel = client.channels.get(channelIds[i]);
                if (channel) {
                    const message = await channel.createMessage(`${member.mention}`);
                    setTimeout(() => {
                        message.delete();
                    }, mentionDelay);
                }
            }
        } catch (error) {
            console.error('Error:', error);
        }

		welcomer(client);
		poj(client);
    });

    console.log(chalk.cyanBright('[Listener] guildMemberAdd is loaded'));
}
