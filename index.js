const Discord = require("discord.js");
const client = new Discord.Client();
var bot = new Discord.Client();

client.on('ready', () => {
  client.user.setStatus("online");
  client.user.setGame("/network help | MigServer Bot");
  console.log("Reload Completed!");
});

const prefix = "/network ";
client.on("message", (message) => {

  if (!message.content.startsWith(prefix)) return;

  if (message.content === (prefix + "discord")) {
    message.channel.send({embed: {
      color: 3447003,
      title: "__MigServer Discord:__\n \n",
      description: "** **\nhttps://discord.gg/JuuVp5D",
      footer: 
      {
          icon_url: client.user.avatarURL,
          text: "MigServer Network"
      }
    }});
  } else
  if (message.content === (prefix + "apply")) {
    message.channel.send({embed: {
      color: 3447003,
      title: "__MigServer Apply:__\n \n",
      description: "** **\nhttps://docs.google.com/forms/d/e/1FAIpQLSdAcbc6iCUbI_YnKiMAKwXVxl87nuDJFb5WbA_Mutthrw4BDw/viewform",
      footer: 
      {
          icon_url: client.user.avatarURL,
          text: "MigServer Network"
      }
    }});
  } else
  if (message.content === (prefix + "creator")) {
    message.channel.send("The Creator of the Bot is `Derpy#6522`");
  } else
  if (message.content === (prefix + "invite")) {
    message.author.sendMessage("**__Invite The Bot:__**\n \nhttps://discordapp.com/api/oauth2/authorize?client_id=426357120993198090&permissions=0&scope=bot");
    message.reply("Please check your direct messages :mailbox_with_no_mail:");
  } else
  if (message.content === (prefix + "help")) {
    message.author.sendMessage({embed: {
     color: 0xbf0000,
     title: "__MigServer Commands:__\n \n",
     description: "** **\n**/network discord ** - Discord Link\n**/network creator** - The Creators of the Bot\n**/network apply** - Staff Apply\n**/network ping** - Show to you how much Ping you have\n**/network youtube** - Show to you the link to Youtube Channel\n**/network ip** - the IP of the Server\n**/network vote** - Vote Link\n**/network avatar** - show your avatar profile\n**/network ranks** - Show to you the Ranks list of the Server\n**/network store** - Store of the Server\n**/network website** - The Website of the Server\n**/network help** - Show this Menu",
     footer: 
     {
         icon_url: client.user.avatarURL,
         text: "MigServer Network"
     }
   }});
    message.reply("Please check your direct messages :mailbox_with_no_mail:");
  } else
  if (message.content === (prefix + "ranks")) {
    message.author.sendMessage({embed: {
     color: 3447003,
     title: "__MigServer Ranks:__\n \n",
     description: "** **\n**OWNER**\n**CO-OWNER**\n**S-MANAGER**\n**D-MANAGER**\n**DEV**\n**H-ADMIN**\n**ADMIN**\n**M-MANAGER**\n**MOD**\n**HELPER**\n**B-MANAGER**\n**BUILDER**\n**YOUTUBER**\n**LEGEND**\n**SUPER**\n**HERO+**\n**HERO**\n**VIP+**\n**VIP**\n**MEMBER**",
     footer: 
     {
         icon_url: client.user.avatarURL,
         text: "MigServer Network"
     }
   }});
    message.reply("Please check your direct messages :mailbox_with_no_mail:");
  } else
  if (message.content === (prefix + "ip")) {
    message.channel.send({embed: {
      color: 3447003,
      title: "__MigServer IP:__\n \n",
      description: "** **\n**migserver.mcnetwork.me**",
      footer: 
      {
          icon_url: client.user.avatarURL,
          text: "MigServer Network"
      }
    }});
  } else
  if (message.content === (prefix + "youtube")) {
    message.channel.send({embed: {
      color: 3447003,
      title: "__MigServer Youtube Channel:__\n \n",
      description: "** **\nhttps://www.youtube.com/channel/UCuPaetf28pN6knc1MdpriCg?view_as=subscriber",
      footer: 
      {
          icon_url: client.user.avatarURL,
          text: "MigServer Network"
      }
    }});
  } else
  if (message.content === (prefix + "vote")) {
    message.channel.send({embed: {
      color: 3447003,
      title: "__MigServer Vote Website:__\n \n",
      description: "** **\nhttps://topg.org/Minecraft/in-489313",
      footer: 
      {
          icon_url: client.user.avatarURL,
          text: "MigServer Network"
      }
    }});
 } else
  if (message.content === (prefix + "website")) {
    message.channel.send({embed: {
      color: 3447003,
      title: "__MigServer Website:__\n \n",
      description: "** **\n**SOON**",
      footer: 
      {
          icon_url: client.user.avatarURL,
          text: "MigServer Network"
      }
    }});
 } else
  if (message.content === (prefix + "store")) {
    message.channel.send({embed: {
      color: 3447003,
      title: "__MigServer Store:__\n \n",
      description: "** **\n**SOON**",
      footer: 
      {
          icon_url: client.user.avatarURL,
          text: "MigServer Network"
      }
    }});
 } else
 if (message.content === (prefix + "membercount")) {
    message.channel.send({embed: {
      color: 3447003,
      title: "__Server Members Count:__\n \n",
      description: "** **",
      fields: [{
             name: "Members",
             value: (message.guild.memberCount)
           }
         ],
         timestamp: new Date(),
         footer: {
           icon_url: client.user.avatarURL,
           text: "MigServer Network"
       }
     }});
 } else
 if(message.content.startsWith(prefix + "avatar ")) { //IF for the command.
     if(message.mentions.users.first()) { //Check if the message has a mention in it.
           let user = message.mentions.users.first(); //Since message.mentions.users returns a collection; we must use the first() method to get the first in the collection.
           let output = user.tag /*Nickname and Discriminator*/ +
           "\nAvatar URL: " + user.avatarURL; /*The Avatar URL*/
           message.channel.sendMessage(output); //We send the output in the current channel.
    } else {
          message.reply("Invalid user."); //Reply with a mention saying "Invalid user."
    }
 } else
 if (message.content === (prefix + "serverinfo")) {
    message.channel.send({embed: {
      color: 3447003,
      title: "__Server Information:__\n \n",
      description: "** **",
      fields: [{
             name: "Server Name",
             value: (message.guild.name)
           },
           {
            name: "Created On",
            value: (message.guild.createdAt)
           },
           {
            name: "Joined At",
            value: (message.member.joinedAt)
           },
           {
            name: "Members",
            value: (message.guild.memberCount)
           }
         ],
         timestamp: new Date(),
         footer: {
           icon_url: client.user.avatarURL,
           text: "MigServer Network"
       }
     }});
  }
});

  client.on('message', message => {
    if (message.content === `/network ping`) {
      message.reply(`Pong! The ping is **${(client.ping).toFixed(0)}**ms!  :ping_pong:`);
    }
  });

  client.on('message', message => {
    if (message.content === '/network avatar') {
      message.reply(message.author.avatarURL);
    }
  });

  client.on('message', message => {
    if (message.content === 'test') {
      message.reply("I am Online, for start type `/network help`");
    }
  });

 client.on('message', msg => {
  if (msg.content === '/avatar') {
    msg.reply("You need to Mention User")
  }
});

default:
            message.channel.send("Unknown Command.");
            console.log(${message.author.tag} Unknown Command!)
    }
});

client.login(process.env.BOT_TOKEN);
