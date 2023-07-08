import { CommandInteraction } from "eris";
import { commands } from '../utils/commands.js';
import chalk from 'chalk';

export function interactionCreate(client) {
    client.on('interactionCreate', async (interaction) => {
        if (interaction instanceof CommandInteraction) {
            for (let slashCommand of commands) {
                if (slashCommand.name === interaction.data.name) {
                    await slashCommand.execute(client, interaction);
                    break;
                }
            }
        }
    });
    console.log(chalk.cyanBright('[Listener] interactionCreate is loaded'));
}