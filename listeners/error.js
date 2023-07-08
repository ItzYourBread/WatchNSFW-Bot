import chalk from 'chalk';

export function error(client) {
    client.on('error', (err) => {
        console.error(
            chalk.redBright(`[Discord API] An error occurred:\n${err}`)
        );
    });
    console.log(chalk.cyanBright('[Listener] error is loaded'));
}