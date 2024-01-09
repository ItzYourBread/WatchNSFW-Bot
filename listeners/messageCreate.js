import chalk from 'chalk';
import 'dotenv/config';

export async function messageCreate(client) {
  client.on('messageCreate', async (msg) => {
    if (msg.channel.id === '1194186144406061156') {
      if (msg.content) {
        await msg.delete(); // Delete the text message
      }

      if (msg.attachments.length > 0) {
        // React to the message with smash and pass emojis
        await msg.addReaction('wn_smash:1194234030552514651'); // Smash reaction
        await msg.addReaction('wn_pass:1194234138534875137'); // Pass reaction
      }
    }
  });

  console.log(chalk.cyanBright('[Listener] messageCreate is loaded'));
}