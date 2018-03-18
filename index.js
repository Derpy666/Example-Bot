const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  client.user.setStatus("dnd");
  client.user.setGame("/help | Derpy Bot");
  console.log("Reload Completed!");
});

client.on('message', msg => {
  if (msg.content === `/test`) {
    msg.reply('I am Online');
  }
});

client.on('message', msg => {
    if (msg.content === `/discord`) {
      msg.channel.sendMessage('**__Discord Link:__**\n \nhttps://discord.gg/8Z2gENf');
    }
  });

  client.on('message', msg => {
    if (msg.content === `/apply`) {
      msg.channel.sendMessage('**__Staff Apply:__**\n \nhttps://docs.google.com/forms/d/e/1FAIpQLSecQQcz2-MfH1Aenr5xDr_2ekqDkD-km2nT54iR1ocV_BWj7w/viewform');
    }
  });

  client.on('message', msg => {
    if (msg.content === `/creator`) {
      msg.channel.sendMessage('The Creator of the Bot is `Derpy#6522` and `[PROGRAMMER] KOSTA#3066`');
    }
  });

  client.on('message', msg => {
    if (msg.content === `/ping`) {
      msg.reply(`Pong! The ping is **${(client.ping).toFixed(0)}**ms!  :ping_pong:`)
    }
  });

  client.on('message', msg => {
    if (msg.content === `/invite`) {
      msg.channel.sendMessage('**__Invite The Bot:__**\n \nhttps://discordapp.com/api/oauth2/authorize?client_id=406014826419191808&permissions=0&scope=bot');
    }
  });

  client.on('message', msg => {
    if (msg.content === `/youtube`) {
      msg.channel.sendMessage('**__Youtube Cahnnel:__**\n \nhttps://www.youtube.com/channel/UCVr5-pz35ZRK_NaCDb3NpZg');
    }
  });

  client.on('message', msg => {
    if (msg.content === '/help') {
      msg.channel.sendMessage(`__Derpy's House Commands:__\n \n**/discord** - Discord Link\n**/creator** - The Creators of the Bot\n**/apply** - Staff Apply\n**/test** - for know if the Bot is Online\n**/ping** - Show to you how much Ping you have\n**/invite** - Invite the Bot\n**/youtube** - Show to you the link to Youtube Channel\n**/help** - Show this Menu`);
    }
  });

client.login(process.env.BOT_TOKEN));
