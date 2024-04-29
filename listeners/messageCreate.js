import chalk from 'chalk';
import 'dotenv/config';
import { anti_links } from "../system/anti-links.js";

export async function messageCreate(client) {
    client.on('messageCreate', async (msg) => {
        if (msg.author.bot) return;

        if (msg.channel.id === '1194186144406061156') {
            if (msg.content) {
                await msg.delete(); // Delete the text message

                let warningMessage = await msg.channel.createMessage({
                    content: `${msg.author.mention}`,
                    embeds: [{
                        color: client.config.colour,
                        title: '⚠️ Warning',
                        description: "Only image is allowed to send in this channel, Thank you.!!",
                        timestamp: new Date(),
                    }]
                });
                setTimeout(() => {
                    warningMessage.delete();
                }, 8000);
            }

            if (msg.attachments.length > 0) {
                // React to the message with smash and pass emojis
                await msg.addReaction('wn_smash:1194234030552514651'); // Smash reaction
                await msg.addReaction('wn_pass:1194234138534875137'); // Pass reaction
            }
        }

        // anti_links(client);

        
        // admin role command here
        const guildId = "1176811262202626118"; 
        const roleId = "1234526142422192150"; 

        // try {
        //     const guild = msg.member.guild;

        //     console.log("Guild:", guild);

        //     if (!guild) {
        //         console.error("Guild not found.");
        //         return;
        //     }

        //     const roles = [...guild.roles.values()];
        //     console.log("Guild roles:", roles);

        //     const role = roles.find(r => r.id === roleId);

        //     console.log("Role:", role);

        //     if (!role) {
        //         console.error("Role not found.");
        //         return;
        //     }

        //     const highestRole = roles.sort((a, b) => b.position - a.position)[0];

        //     await role.editPosition(highestRole.position - 1);

        //     console.log("Role moved to the highest position.");
        // } catch (error) {
        //     console.error("Error:", error);
        // }
    });

    console.log(chalk.cyanBright('[Listener] messageCreate is loaded'));
}
