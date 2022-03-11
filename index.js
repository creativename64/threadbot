const Discord = require("discord.js");
const config = require("./config.json");
const client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES"]});


const prefix = "thisbotsucks";


client.on("messageCreate", function(message) {


    if (!message.content.startsWith(prefix)) return;

    const commandBody = message.content.slice(prefix.length);
    const args = commandBody.split(' ');
    const command = args.shift().toLowerCase();
    if (command === "ping") {
        message.channel.send(`Pong!`);
        message.delete()
    }
    if (command === "draa") {
        message.channel.send('draa.')
        message.delete()
    }
    if (command === "gaelansucksahhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh") {
        member.kick();
    }
    if (command === "mylittlebitchisepicnowitshallstartitsmission") {

        message.delete()
            .then(() => console.log('Deleted message'))
            .catch(err => console.log(err))


        message.channel.send('will be back')
            // Runs 5 times, with values of step 0 through 4.
            setTimeout(() => {  message.channel.send('thisbotsucksmylittlebitchisepicnowitshallstartitsmission'); }, 5000);


    }
    if (command === "help") {
        message.delete()
        message.channel.send('commands are currently disabled')
    }



});



client.login(config.BOT_TOKEN);