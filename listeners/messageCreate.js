import chalk from 'chalk';
import 'dotenv/config';

export async function messageCreate(client) {
  client.on('messageCreate', async (msg) => {
    if (msg.channel.id === '1111034643664355488') {
      if (msg.content) {
        await msg.delete(); // Delete the text message
      }

      if (msg.attachments.length > 0) {
        // React to the message with smash and pass emojis
        await msg.addReaction('smash:1116683253223534695'); // Smash reaction
        await msg.addReaction('pass:1116683299352490064'); // Pass reaction
      }
    }
  });

  console.log(chalk.cyanBright('[Listener] messageCreate is loaded'));
}