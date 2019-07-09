const Discord = require("discord.js");
const bot = new Discord.Client({
  disableEveryone: true
});
bot.login(process.env.BOT_TOKEN);

const config = require("./config.js");
const { prefix, token } = config;

function Activity() {
  return bot.user.setActivity(`/help | Made by Derpy`, { type: "PLAYING" });
}

bot.on("ready", async () => {
  console.log(`Bot is Online!`);
  Activity();
});

// Updates the bot's status if he joins a server
bot.on("guildCreate", guild => {
  Activity();
});

/// Updates the bot's status if he leaves a servers
bot.on("guildDelete", guild => {
  Activity();
});

bot.on("message", async message => {
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;

  let msg = message.content.toLowerCase() || message.content.toUpperCase();
  if (!msg.startsWith(prefix)) return;
  let args = message.content
    .slice(bot.prefix.length)
    .trim()
    .split(" ");
  const command = args.shift().toLowerCase();

  if (cmd === "help") {
    let botembed = new Discord.RichEmbed()
      .setDescription("Help Commands")
      .setColor(`RANDOM`)
      .setThumbnail(bot.user.displayAvatarURL)
      .addField(
        "Moderation",
        "/kick [user] [reason] - Kick a User.\n/ban [user] [reason] - Ban a User. (soon)\n/unban [user ID] - unban a User.\n/report [user] [reason] - report about User.\n/mute [user] [reason] - Mute a User.\n/unmute [@user] [reason] - unMute a User.\n/warn [@user] [reason] - Warn a User.\n/clear [amount of messages] - Clear the chat.\n/say [message] - say your message.\n/poll [question] - poll about Question"
      )
      .addField(
        "Music",
        "/play - Play  Music.\n/search - Search a Music.\n/skip - Skip a Music.\n/stop - Stop a Music.\n/volume - Volume the Music.\n/np - Show what song right now playing.\n/queue - Show what song right now playing.\n/pause - Pause the Music.\n/resume - Resume the Music."
      )
      .addField(
        "Utilites",
        "/serverinfo - Server Informations.\n/botinfo - Bot Informations.\n/membercount - Member Count.\n/avatar [@user] - Avatar of the user.\n/ping - Ping Pong.\n/staff - show you the staff member of WatchDog Bot Support DIscord.\n/vote - vote for the bot link.\n/invite - invite the bot link."
      );
    msg.reply("Check your DM!");
    return msg.author.send(botembed);
  }
});
