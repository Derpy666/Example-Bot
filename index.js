const Discord = require("discord.js");
const bot = new Discord.Client({
  disableEveryone: true
});
bot.login(process.env.BOT_TOKEN);

const config = require("./config.js");
const { prefix, token } = config;

function Activity() {
  return bot.user.setActivity(`${prefix}help | Made by Derpy`, { type: "PLAYING" });
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

  if (cmd === "ping") {
// Normal Message
message.channel.send("Pong!")
  }
  if (cmd === "hey") {
// Reply Message
message.reply("Hello!")
  }
  if (cmd === "help") {
// DM Message
message.author.send("your help commands")
  }
});
