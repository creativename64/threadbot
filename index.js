const Discord = require("discord.js");
const config = require("./config.json");
const client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES"]});


const prefix = "thread";

.listen(process.env.PORT || 5000)

client.on("messageCreate", function(message) {


    if (!message.content.startsWith(prefix)) return;

    const commandBody = message.content.slice(prefix.length);
    const args = commandBody.split(' ');
    const command = args.shift().toLowerCase();
    if (command === "pingpinpinpinpinpinpinpinpinpinping") {
        message.reply(`Pong!`);
    }
    if (command === "draa") {
        message.reply('draa.')
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
            setTimeout(() => {  message.reply('threadmylittlebitchisepicnowitshallstartitsmission'); }, 72000000);


    }
    if (command === "help") {
        message.reply('commands are currently disabled')
    }



});



client.login(config.BOT_TOKEN);