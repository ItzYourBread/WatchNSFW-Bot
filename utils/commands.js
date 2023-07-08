import { readdirSync } from 'fs';
import chalk from 'chalk';

const commands = [];
export { commands };

export function global(client) {
    client.on('ready', async () => {
        const commandFolders = readdirSync(`./commands/`);
        for (const folder of commandFolders) {
            const commandFiles = readdirSync(
                `./commands/${folder}`
            ).filter((file) => file.endsWith('.js'));
            for (const file of commandFiles) {
                const slashCommandObject = await import(
                    `../commands/${folder}/${file}`
                );
                if (slashCommandObject.default.data.name) {
                    console.log(
                        chalk.cyanBright(
                            `[Command] ${slashCommandObject.default.data.name} is loaded`
                        )
                    );
                }
                await client.createCommand(slashCommandObject.default.data);
                commands.push({
                    name: slashCommandObject.default.data.name,
                    execute: slashCommandObject.default.execute,
                });
            }
        }
    });
}
export default { global };