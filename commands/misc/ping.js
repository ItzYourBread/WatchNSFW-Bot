export default {
    data: {
        name: 'ping',
        description: '🏓 Ping Pong',
    },
    async execute(client, interaction) {
        const ping = Date.now() - interaction.createdAt;
        await interaction.createMessage({
            content: `Pong! \`${ping}ms\` `,
        });
    },
};