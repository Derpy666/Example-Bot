const botconfig = require("./botconfig.json");
const color = require("./color.json");
const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});
const swearWords = ["fuck", "shit"];
 
//bot.on("ready", async () => {
  //console.log(`${bot.user.username} is online!`);

  //bot.user.setActivity("bots", {type: "MAKING"});

  //bot.user.setGame("${server} Servers | /help");

bot.on("ready", async () => {
  console.log(`Bot is Online!`);
bot.user.setActivity(`MigServer Network | /network help`, {type: "WATCHING"});
});

// Updates the bot's status if he joins a server
bot.on("guildCreate", guild => {
bot.user.setActivity(`MigServer Network | /network help`, {type: "WATCHING"});
});

/// Updates the bot's status if he leaves a servers
bot.on("guildDelete", guild => {
bot.user.setActivity(
        `MigServer Network | /network help`, {type: "WATCHING"});
});

//welcome join
bot.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find('name', 'welcome');
  if (!channel) return;
  channel.send(`Welcome to the server, ${member}`);
});

//welcome left
bot.on('guildMemberRemove', member => {
  const channel = member.guild.channels.find('name', 'welcome');
  if (!channel) return;
  channel.send(`${member}, left the Server`);
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  if(cmd === `${prefix}kick`){

    //!kick @user break the rules
    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("/kick [@user] [reason]");
    let kReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("No can do pal!");
    if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person can't be kicked!");

    let kickEmbed = new Discord.RichEmbed()
    .setDescription("**Kick**")
    .setColor("#d83c3c")
    .addField("User", `${kUser}`)
    .addField("Staff", `<@${message.author.id}>`)
    .addField("Reason", kReason);

    let kickChannel = message.guild.channels.find(`name`, "mod-log");
    if(!kickChannel) return message.channel.send("Can't find channel called `mod-log`");

    message.guild.member(kUser).kick(kReason);
    kickChannel.send(kickEmbed);

    return;
  }

if( swearWords.some(word => message.content.includes(word)) ) {
     message.delete();
  message.reply("Oh no you said a bad word!!!");
  //Or just do message.delete();
}

  if(cmd === `${prefix}ban`){

    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send("/ban [@user] [reason]");
    let bReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("No can do pal!");
    if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person can't be kicked!");

    let banEmbed = new Discord.RichEmbed()
    .setDescription("**Ban**")
    .setColor("#bc0000")
    .addField("**User**", `${bUser}`)
    .addField("**Staff**", `<@${message.author.id}>`)
    .addField("Reason", bReason);

    let incidentchannel = message.guild.channels.find(`name`, "log");
    if(!incidentchannel) return message.channel.send("Can't find channel called `log`");

    message.guild.member(bUser).ban(bReason);
    incidentchannel.send(banEmbed);

    return;
  }

  if(cmd === `${prefix}report`){

    //!report @user this is the reason
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("/report [@user] [reason]");
    let rreason = args.join(" ").slice(22);

    let reportEmbed = new Discord.RichEmbed()
    .setDescription("Reports")
    .setColor("#ffdc00")
    .addField("User", `${rUser}`)
    .addField("Staff", `${message.author}`)
    .addField("Reason", rreason);

    let reportschannel = message.guild.channels.find(`name`, "log");
    if(!reportschannel) return message.channel.send("Can't find channel called `log`");

    message.delete().catch(O_o=>{});
    reportschannel.send(reportEmbed);

    return;
  }

  if(cmd === `${prefix}warn`){

    //!warn @user this is the reason
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("/warn [@user] [reason]");
    let rreason = args.join(" ").slice(22);

    let reportEmbed = new Discord.RichEmbed()
    .setDescription("Warnings")
    .setColor("#1b8fbd")
    .addField("User", `${rUser}`)
    .addField("Staff", `${message.author}`)
    .addField("Reason", rreason);

    let reportschannel = message.guild.channels.find(`name`, "log");
    if(!reportschannel) return message.channel.send("Can't find channel called `log`");

    message.delete().catch(O_o=>{});
    reportschannel.send(reportEmbed);

    return;
  }

  if(cmd === `${prefix}serverinfo`){

    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setDescription("Server Information")
    .setColor("#15f153")
    .setThumbnail(sicon)
    .addField("Server Name", message.guild.name)
    .addField("Created On", message.guild.createdAt)
    .addField("You Joined", message.member.joinedAt)
    .addField("Total Members", message.guild.memberCount);

    return message.channel.send(serverembed);
  }

  if (cmd === `${prefix}unmute`) { // creates the command unmute
      if (!message.member.roles.some(r=>["Moderator"].includes(r.name)) ) return message.reply("Sorry, you do not have the permission to do this!"); // if author has no perms
      var unmutedmember = message.mentions.members.first(); // sets the mentioned user to the var kickedmember
      if (!unmutedmember) return message.reply("Please mention a valid member of this server!") // if there is no kickedmmeber var
      unmutedmember.removeRole(mutedrole) //if reason, kick
          .catch(error => message.reply(`Sorry ${message.author} I couldn't mute because of : ${error}`)); //if error, display error
      message.reply(`${unmutedmember.user} has been unmuted by ${message.author}!`); // sends a message saying he was kicked
  }

  if(cmd === `${prefix}membercount`){

    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setDescription("**Member Count**")
    .setColor("#eb8f1b")
    .setThumbnail(sicon)
    .addField("Members", message.guild.memberCount);

    return message.channel.send(serverembed);
  }

  if(cmd === `${prefix}clear`){

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You dont have the Permission `MANAGE_MESSAGES`");
  if(!args[0]) return message.channel.send("You didn't specify amount of messages");
  message.channel.bulkDelete(args[0]).then(() => {
    message.channel.send(`:white_check_mark: Cleared ${args[0]} messages.`).then(msg => msg.delete(5000));
  });
}

  if(cmd === `${prefix}botinfo`){

    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("Bot Information")
    .setColor("#15f153")
    .setThumbnail(bicon)
    .addField("Bot Name", bot.user.username)
    .addField("Created On", bot.user.createdAt);

    return message.channel.send(botembed);
  }

  if (cmd === `${prefix}vote`){
 		message.delete()
  let question = args.slice(0).join(" ");

  if (args.length === 0)
  return message.reply('Invalid Format: /vote <Question>')

  const embed = new Discord.RichEmbed()
  .setTitle("A Vote Has Been Started!")
  .setColor("#5599ff")
    .setDescription(`${question}`)
    .setFooter(`Vote Started By: ${message.author.username}`, `${message.author.avatarURL}`)
  const pollTopic = await message.channel.send({embed});
  await pollTopic.react(`ג…`);
  await pollTopic.react(`ג`);
  const filter = (reaction) => reaction.emoji.name === 'ג…';
  const collector = pollTopic.createReactionCollector(filter, { time: 15000 });
  collector.on('collect', r => console.log(`Collected ${r.emoji.name}`));
  collector.on('end', collected => console.log(`Collected ${collected.size} items`));
}

  if (cmd === `${prefix}say`){
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You dont have the permissions `MANAGE_MESSAGES`");
 		message.delete()
 		message.channel.send(args.join(" "));
}

  if (cmd === `${prefix}whitesay`){
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You dont have the permissions `MANAGE_MESSAGES`");
 		message.delete()
         const embed = new Discord.RichEmbed()
 		.setColor(color.white)
 		.setDescription(args.join(" "));
 		message.channel.send({embed})
}

  if (cmd === `${prefix}grayesay`){
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You dont have the permissions `MANAGE_MESSAGES`");
 		message.delete()
         const embed = new Discord.RichEmbed()
 		.setColor(color.gray)
 		.setDescription(args.join(" "));
 		message.channel.send({embed})
}

  if (cmd === `${prefix}blacksay`){
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You dont have the permissions `MANAGE_MESSAGES`");
 		message.delete()
         const embed = new Discord.RichEmbed()
 		.setColor(color.black)
 		.setDescription(args.join(" "));
 		message.channel.send({embed})
}

  if (cmd === `${prefix}redsay`){
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You dont have the permissions `MANAGE_MESSAGES`");
 		message.delete()
         const embed = new Discord.RichEmbed()
 		.setColor(color.red)
 		.setDescription(args.join(" "));
 		message.channel.send({embed})
}

  if (cmd === `${prefix}yellowsay`){
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You dont have the permissions `MANAGE_MESSAGES`");
 		message.delete()
         const embed = new Discord.RichEmbed()
 		.setColor(color.yellow)
 		.setDescription(args.join(" "));
 		message.channel.send({embed})
}

  if (cmd === `${prefix}lightgreensay`){
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You dont have the permissions `MANAGE_MESSAGES`");
 		message.delete()
         const embed = new Discord.RichEmbed()
 		.setColor(color.light_green)
 		.setDescription(args.join(" "));
 		message.channel.send({embed})
}

  if (cmd === `${prefix}darkgreensay`){
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You dont have the permissions `MANAGE_MESSAGES`");
 		message.delete()
         const embed = new Discord.RichEmbed()
 		.setColor(color.dark_green)
 		.setDescription(args.join(" "));
 		message.channel.send({embed})
}

  if (cmd === `${prefix}lightbluesay`){
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You dont have the permissions `MANAGE_MESSAGES`");
 		message.delete()
         const embed = new Discord.RichEmbed()
 		.setColor(color.light_blue)
 		.setDescription(args.join(" "));
 		message.channel.send({embed})
}

  if (cmd === `${prefix}bluesay`){
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You dont have the permissions `MANAGE_MESSAGES`");
 		message.delete()
         const embed = new Discord.RichEmbed()
 		.setColor(color.blue)
 		.setDescription(args.join(" "));
 		message.channel.send({embed})
}

  if (cmd === `${prefix}pinksay`){
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You dont have the permissions `MANAGE_MESSAGES`");
 		message.delete()
         const embed = new Discord.RichEmbed()
 		.setColor(color.pink)
 		.setDescription(args.join(" "));
 		message.channel.send({embed})
}

  if (cmd === `${prefix}purplesay`){
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You dont have the permissions `MANAGE_MESSAGES`");
 		message.delete()
         const embed = new Discord.RichEmbed()
 		.setColor(color.purple)
 		.setDescription(args.join(" "));
 		message.channel.send({embed})
}

  if (cmd === `${prefix}staff`){
    let botembed = new Discord.RichEmbed()
    .setDescription("Staff Members")
    .setColor("#ff9f04")
    .addField("\nCreators","<@311604263379795970>\n<@362310398864654337>")
 		 .addField("\nDevelopers","<@184706878876549131>\n<@241793558737190913>\n<@333300250465009666>\n<@429011797291433987>")
 		 .addField("Administrators",":rolling_eyes: No one Found :mag:")
 		 .addField("Moderators",":rolling_eyes: No one Found :mag:")
 		 .addField("Helpers",":rolling_eyes: No one Found :mag:");

    return message.channel.send(botembed);
}

  if(cmd === `${prefix}help`){

    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("Help Commands")
    .setColor("#268ccf")
    .setThumbnail(bicon)
    .addField("Moderation","/kick (user) (reason) - Kick a User.\n/ban (user) (reason) - Ban a User.\n/unban (user) - unban a User. (Soon)\n/report (user) (reason) - report about User.\n/mute (user) (reason) - Mute a User.\n/unmute (user) (reason) - unMute a User. (Soon)\n/warn (user) (reason) - Warn a User. (Soon)\n/clear (number) - Clear the chat.")
    .addField("Servers","/serverinfo - Server Informations.\n/botinfo - Bot Informations.\n/membercount - Member Count.\n/say (message) - say your message.\n/vote (question) - Vote about Question\n/avatar @user - Avatar of the user.\n/ping - Ping Pong")
    .addField("Economy","Soon")
    .addField("NSFW","Soon")
    .addField("Music","Soon")
    .addField("Leveling","Soon");

    return message.author.send(botembed);
  }

  if(cmd === `${prefix}mute`){

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("No can do.");
  if(args[0] == "help"){
    message.reply("Usage: /mute <user> <1s/m/h/d> <reason>");
    return;
  }
  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.reply("Couldn't find user.");
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Can't mute them!");
  let reason = args.slice(2).join(" ");
  if(!reason) return message.reply("Please supply a reason.");

  let muterole = message.guild.roles.find(`name`, "Muted");
  //start of create role
  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "Muted",
        color: "#000000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  //end of create role
  let mutetime = args[1];
  if(!mutetime) return message.reply("You didn't specify a time!");

  message.delete().catch(O_o=>{});

  try{
    await tomute.send(`Hi! You've been muted for ${mutetime}. Sorry!`)
  }catch(e){
    message.channel.send(`A user has been muted... but their DMs are locked. They will be muted for ${mutetime}`)
  }

  let muteembed = new Discord.RichEmbed()
  .setDescription(`Mute`)
  .setColor(color.orange)
  .addField("User", tomute)
  .addField("Staff", `${message.author}`)
  .addField("Length", mutetime)
  .addField("Reason", reason);

  let incidentschannel = message.guild.channels.find(`name`, "log");
  if(!incidentschannel) return message.reply("Cannot find channel called `log`");
  incidentschannel.send(muteembed);

  await(tomute.addRole(muterole.id));

  setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.channel.send(`<@${tomute.id}> has been unmuted!`);
  }, ms(mutetime));
  };
});

const prefix = botconfig.prefix;
bot.on("message", (message) => {

  if(!message.content.startsWith(prefix)) return;

if(message.content.startsWith(prefix + "avatar ")) { //IF for the command.
     if(message.mentions.users.first()) { //Check if the message has a mention in it.
           let user = message.mentions.users.first(); //Since message.mentions.users returns a collection; we must use the first() method to get the first in the collection.
           let output = user.tag /*Nickname and Discriminator*/ +
           "\nAvatar URL: " + user.avatarURL; /*The Avatar URL*/
           message.channel.sendMessage(output); //We send the output in the current channel.
    } else {
          message.reply("Invalid user."); //Reply with a mention saying "Invalid user."
    }
 }});

bot.on('message', msg => {
  if (msg.content === '/ping') {
    msg.reply(`Pong! The ping is **${(bot.ping).toFixed(0)}**ms!  :ping_pong:`)
  }
});

bot.on('message', msg => {
  if (msg.content === '/help') {
    msg.reply(`Check your dms`)
  }
});

bot.on('message', msg => {
  if (msg.content === '/avatar') {
    msg.reply(`You need Mention someone`)
  }
});

bot.on('message', msg => {
  if (msg.content === 'test') {
  if(!msg.member.hasPermission("ADMINISTRATOR")) return msg.channel.send("You dont have the permissions `ADMINISTRATOR`");
    msg.reply(`I am Online, for start type **/help**`)
  }
});
 

bot.login(process.env.BOT_TOKEN);
