const Discord = require("discord.js");
const config = require("./config.json");
const client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES"]});
let cheese;
// server imports
const express = require('express');
const app = express();
const port = 3000;
// create main route
app.get('/', (req, res) => res.send('Hello World!'));
// instantiate server
app.listen(port, () => console.log(`App is listening at http://localhost:${port}`));

const prefix = "beta";


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



    if (command === "start") {

        cheese = message.member.id
        console.log(cheese)

        message.delete()
            .then(() => console.log('Deleted message'))
            .catch(err => console.log(err))

        if (cheese === "674733684787773440") {
            message.channel.send('started - Creative Name#4801')
            // Runs 5 times, with values of step 0 through 4.
            setTimeout(() => {
                message.channel.send('betastart');
            }, 36000000);

        }
        else {
            if (cheese === "949834414135836732") {
                message.channel.send('started')
                // Runs 5 times, with values of step 0 through 4.
                setTimeout(() => {
                    message.channel.send('betastart');
                }, 36000000);

            }
            else {
                if (cheese === "951967161956585563") {
                    message.channel.send('started')
                    // Runs 5 times, with values of step 0 through 4.
                    setTimeout(() => {
                        message.channel.send('betastart');
                    }, 36000000);

                }
                else {
                    message.channel.send('you dont have the perms to send that')
                }
            }
        }





    }
    if (command === "help") {
        message.delete()
        message.channel.send('Thread Bot (version 1.1) command list \nthreadstart = starts the support system for ten hours (please note that this command requires be to authorized inorder to fuction) \nthreadping and threaddraa = responds with a message to see if the bot is still working \nif you have any ideas on how to improve the bot feel free to send them to Creative Name#4801' )
    }



});



client.login(config.BOT_TOKEN);