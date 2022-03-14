const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});


client.on('interactionCreate', async (interaction) => {
    let cheese;
    let chan;
    if (!interaction.isCommand()) return;

    if (interaction.commandName === 'draa') {
        interaction.reply('draa.')
    }

    if (interaction.commandName === 'about') {
        interaction.reply("ThreadBot v2.0 (pre-beta) by Creative Name #4801 (time intervals are planned but as of yet not in)\n~now with slash commands~ \n what does it mean " +
            "by (admin)? commands that require admin requires a user to have administrator perms in order to run (or to be the bot creator" +
            "\nthanks for using it <3 if you have any suggestions on the bot feel free to DM the creator")
    }

    if (interaction.commandName === 'update') {
        interaction.reply("**ThreadBot v2.0 Update Log**" +
            "\n~Moved all commands into slash commands" +
            "\n-Removed the ping command" +
            "\n~Removed the start command in favor of several that allow you to specify time increments" +
            "\n~Updated PHP to a new colour to show the updates" +
            "\n~Updated some packages in the back-end to fix a vulnerability" +
            "\n~Re-did most of the code in the back end" +
            "\n-Removed the Dara lock from the backend" +
            "\n~changed hosting from repl.it to being in house")
    }
    if (interaction.commandName === 'perms') {
        interaction.reply("some commands in ThreadBot require perms to run, not doing so if you lack the perms. " +
            "what ThreadBot looks to for run these commands is if the user has the 'administrator' privilege " +
            "please note there is also an exception of one user hard coded into the program")
    }
    if (interaction.commandName === 'betterthreadbotinfo') {
        interaction.reply("betterthreadbot is an alternative bot to threadbot that does almost the same thing. betterthreadbot" +
            " is not developed by the same person and ironically as of the 2.0 update does not have slash commands or the ability" +
            " to pick how long the delay between messages is. However if you are having problems with threadbot it may resolve them" +
            " you can add it here -> https://discord.com/api/oauth2/authorize?client_id=950547590590640158&permissions=534723950656&scope=bot" +
            " I DO NOT TAKE RESPONSIBILITY FOR THE ACTIONS PERFORMED BY BETTER THREAD BOT")
    }

    if (interaction.commandName === 'start-1h') {
        if (interaction.memberPermissions.has("ADMINISTRATOR")) {console.log("check")
            interaction.reply("Thread Life Support has now begun <3")
            setInterval(() => {interaction.channel.send("still alive")}, 1000*60*60)


        }
        else{

            cheese = interaction.member.user.id
            if (cheese === '674733684787773440') {
                console.log("check2")
                interaction.reply("Thread Life Support has now begun <3")
                setInterval(() => {interaction.channel.send("still alive")}, 1000*60*60)

            }
            else {interaction.reply("sorry but you don't have the perms to run this command. Look at /perms")
            }
        }
        }
    if (interaction.commandName === 'start-2h') {
        if (interaction.memberPermissions.has("ADMINISTRATOR")) {console.log("check")
            interaction.reply("Thread Life Support has now begun <3")
            setInterval(() => {interaction.channel.send("still alive")}, 2000*60*60)


        }
        else{

            cheese = interaction.member.user.id
            if (cheese === '674733684787773440') {
                console.log("check2")
                interaction.reply("Thread Life Support has now begun <3")
                setInterval(() => {interaction.channel.send("still alive")}, 2000*60*60)

            }
            else {interaction.reply("sorry but you don't have the perms to run this command. Look at /perms")
            }
        }
    }
    if (interaction.commandName === 'start-3h') {
        if (interaction.memberPermissions.has("ADMINISTRATOR")) {console.log("check")
            interaction.reply("Thread Life Support has now begun <3")
            setInterval(() => {interaction.channel.send("still alive")}, 3000*60*60)


        }
        else{

            cheese = interaction.member.user.id
            if (cheese === '674733684787773440') {
                console.log("check2")
                interaction.reply("Thread Life Support has now begun <3")
                setInterval(() => {interaction.channel.send("still alive")}, 3000*60*60)

            }
            else {interaction.reply("sorry but you don't have the perms to run this command. Look at /perms")
            }
        }
    }
    if (interaction.commandName === 'start-4h') {
        if (interaction.memberPermissions.has("ADMINISTRATOR")) {console.log("check")
            interaction.reply("Thread Life Support has now begun <3")
            setInterval(() => {interaction.channel.send("still alive")}, 4000*60*60)


        }
        else{

            cheese = interaction.member.user.id
            if (cheese === '674733684787773440') {
                console.log("check2")
                interaction.reply("Thread Life Support has now begun <3")
                setInterval(() => {interaction.channel.send("still alive")}, 4000*60*60)

            }
            else {interaction.reply("sorry but you don't have the perms to run this command. Look at /perms")
            }
        }
    }
    if (interaction.commandName === 'start-8h') {
        if (interaction.memberPermissions.has("ADMINISTRATOR")) {console.log("check")
            interaction.reply("Thread Life Support has now begun <3")
            setInterval(() => {interaction.channel.send("still alive")}, 8000*60*60)


        }
        else{

            cheese = interaction.member.user.id
            if (cheese === '674733684787773440') {
                console.log("check2")
                interaction.reply("Thread Life Support has now begun <3")
                setInterval(() => {interaction.channel.send("still alive")}, 8000*60*60)

            }
            else {interaction.reply("sorry but you don't have the perms to run this command. Look at /perms")
            }
        }
    }
    if (interaction.commandName === 'start-12h') {
        if (interaction.memberPermissions.has("ADMINISTRATOR")) {console.log("check")
            interaction.reply("Thread Life Support has now begun <3")
            setInterval(() => {interaction.channel.send("still alive")}, 12000*60*60)


        }
        else{

            cheese = interaction.member.user.id
            if (cheese === '674733684787773440') {
                console.log("check2")
                interaction.reply("Thread Life Support has now begun <3")
                setInterval(() => {interaction.channel.send("still alive")}, 12000*60*60)

            }
            else {interaction.reply("sorry but you don't have the perms to run this command. Look at /perms")
            }
        }
    }
    if (interaction.commandName === 'start-20h') {
        if (interaction.memberPermissions.has("ADMINISTRATOR")) {console.log("check")
            interaction.reply("Thread Life Support has now begun <3")
            setInterval(() => {interaction.channel.send("still alive")}, 20000*60*60)


        }
        else{

            cheese = interaction.member.user.id
            if (cheese === '674733684787773440') {
                console.log("check2")
                interaction.reply("Thread Life Support has now begun <3")
                setInterval(() => {interaction.channel.send("still alive")}, 20000*60*60)

            }
            else {interaction.reply("sorry but you don't have the perms to run this command. Look at /perms")
            }
        }
    }

});

client.login(process.env.TOKEN);