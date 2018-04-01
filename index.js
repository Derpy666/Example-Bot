const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  client.user.setStatus("dnd");
  client.user.setGame("/network help | MigServer Bot");
  console.log("Reload Completed!");
});

const prefix = "/network ";
client.on("message", (message) => {

  if (!message.content.startsWith(prefix)) return;

  if (message.content === (prefix + "discord")) {
    message.channel.send("**__Discord Link:__**\n \nhttps://discord.gg/JuuVp5D");
  } else
  if (message.content === (prefix + "apply")) {
    message.channel.send("**__Staff Apply:__**\n \nhttps://docs.google.com/forms/d/e/1FAIpQLSdAcbc6iCUbI_YnKiMAKwXVxl87nuDJFb5WbA_Mutthrw4BDw/viewform");
  } else
  if (message.content === (prefix + "creator")) {
    message.channel.send("The Creator of the Bot is `Derpy#6522`");
  } else
  if (message.content === (prefix + "invite")) {
    message.author.sendMessage("**__Invite The Bot:__**\n \nhttps://discordapp.com/api/oauth2/authorize?client_id=426357120993198090&permissions=0&scope=bot");
  } else
  if (message.content === (prefix + "youtube")) {
    message.channel.send("**__Youtube Cahnnel:__**\n \nhttps://www.youtube.com/channel/UCuPaetf28pN6knc1MdpriCg?view_as=subscriber");
  } else
  if (message.content === (prefix + "help")) {
    message.reply("Please check your direct messages");
    message.author.sendMessage({embed: {
     color: 3447003,
     title: "__MigServer Commands:__",
     description: "**/network discord ** - Discord Link\n**/network creator** - The Creators of the Bot\n**/network apply** - Staff Apply\n**/network ping** - Show to you how much Ping you have\n**/network invite** - Invite the Bot\n**/network youtube** - Show to you the link to Youtube Channel\n**/network avatar** - show your avatar profile\n**/network help** - Show this Menu",
     footer: 
     {
         text: "MigServer Network"
     }
   }});
  }
});

  client.on('message', msg => {
    if (msg.content === `/network ping`) {
      msg.reply(`Pong! The ping is **${(client.ping).toFixed(0)}**ms!  :ping_pong:`)
    }
  });

  client.on('message', message => {
    if (message.content === '/network avatar') {
      message.reply(message.author.avatarURL);
    }
  });

client.login(process.env.BOT_TOKEN);
