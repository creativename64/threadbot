const {REST} = require('@discordjs/rest');
const {Routes} = require('discord-api-types/v9');
const commands = [
    {
        name: 'draa',
        description: 'application sanity test',
    },
    {
        name: "start-1h",
        description: 'starts the 1h cycle',
    },
    {
        name: "about",
        description: 'gives info about ThreadBots current version',
    },
    {
        name: "update",
        description: 'shows the changelog since the last major version'
    },
    {
        name: "perms",
        description: 'displays info about perms',
    },
    {
        name: "start-2h",
        description: 'starts the 2h cycle',
    },
    {
        name: "start-3h",
        description: 'starts the 3h cycle',
    },
    {
        name: "start-4h",
        description: 'starts the 4h cycle',
    },
    {
        name: "start-8h",
        description: 'starts the 8h cycle',
    },
    {
        name: "start-12h",
        description: 'starts the 12h cycle',
    },
    {
        name: "start-20h",
        description: 'starts the 20h cycle - recommended',
    },
];

const rest = new REST({version: '9'}).setToken(process.env.TOKEN);

(async () => {
    try {
        console.log('Started refreshing application (/) commands.');

        await rest.put(Routes.applicationCommands(process.env.APP_ID), {
            body: commands,
        });

        console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
        console.error(error);
    }
})();