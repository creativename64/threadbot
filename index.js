const Discord = require("discord.js");
const config = require("./config.json");
const client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES"]});


const prefix = "thread";



client.on("messageCreate", function(message) {


    if (!message.content.startsWith(prefix)) return;

    const commandBody = message.content.slice(prefix.length);
    const args = commandBody.split(' ');
    const command = args.shift().toLowerCase();
    if (command === "ping") {
        message.reply(`Pong!`);
    }
    if (command === "draa") {
        message.reply('draa.')
    }
    if (command === "gaelansucks") {
        member.kick();
    }
    if (command === "start") {
        message.reply('started thread life support test')
            // Runs 5 times, with values of step 0 through 4.
            setTimeout(() => {  message.reply('!start'); }, 6000);


    }
    if (command === "help") {
        message.reply('Heres what "ThreadKeeper" can do' +
            'please note the prefix of all commands is "thread"' +
            'threadstart will start an infinite loop that sends messages every now and then keeping a thread alive' +
            'threadping responds with pong (testing)' +
            'threaddraa responds with draa (derogatory)' +
            'threadgaelansucks responds in a way you might not want it to. infact i would say you most likely DO NOT want to run this command' +
            'version 0.2')
    }


});



client.login(config.BOT_TOKEN);