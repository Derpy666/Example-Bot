const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
  console.log(`Bot is Online!`);
bot.user.setActivity(`/help | Made by Derpy`, {type: "PLAYING"});
});

// Updates the bot's status if he joins a server
bot.on("guildCreate", guild => {
bot.user.setActivity(`/help | Made by Derpy`, {type: "PLAYING"});
});

/// Updates the bot's status if he leaves a servers
bot.on("guildDelete", guild => {
bot.user.setActivity(`/help | Mad by Derpy`, {type: "PLAYING"});
});

bot.on("message", async msg => {
  if(msg.author.bot) return;
  if(msg.channel.type === "dm") return; 

  let prefix = botconfig.prefix;
  let messageArray = msg.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  let rainbow = ((1 << 24) * Math.random() | 0).toString(16); 

  if(cmd === `${prefix}help`){
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("Help Commands")
    .setColor(`${rainbow}`)
    .setThumbnail(bicon)
    .addField("Moderation","/kick [user] [reason] - Kick a User.\n/ban [user] [reason] - Ban a User. (soon)\n/unban [user ID] - unban a User.\n/report [user] [reason] - report about User.\n/mute [user] [reason] - Mute a User.\n/unmute [@user] [reason] - unMute a User.\n/warn [@user] [reason] - Warn a User.\n/clear [amount of messages] - Clear the chat.\n/say [message] - say your message.\n/poll [question] - poll about Question")
    .addField("Music","/play - Play  Music.\n/search - Search a Music.\n/skip - Skip a Music.\n/stop - Stop a Music.\n/volume - Volume the Music.\n/np - Show what song right now playing.\n/queue - Show what song right now playing.\n/pause - Pause the Music.\n/resume - Resume the Music.")
    .addField("Utilites","/serverinfo - Server Informations.\n/botinfo - Bot Informations.\n/membercount - Member Count.\n/avatar [@user] - Avatar of the user.\n/ping - Ping Pong.\n/staff - show you the staff member of WatchDog Bot Support DIscord.\n/vote - vote for the bot link.\n/invite - invite the bot link.");
    return msg.author.send(botembed);
    //return message.channel.send("Check your Direct Messages!");
  }

  if(cmd === `${prefix}help`){ 
    msg.reply("Check your DM!");

bot.login(process.env.BOT_TOKEN);
