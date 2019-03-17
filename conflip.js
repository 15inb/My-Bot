const Discord = require("discord.js");
const BOT_TOKEN = "your token here"
const PREFIX = "!"
var eightball = [
    "you're a cunt stfu yes", // Works
    "ofc", // Works
    "honestly just kill yourself", // Works
    "OMG YES", // Works
    "yes", // Works
    "no", // Works
    "maybe?", // Works
    "same", // Works
    "stfu", // Works
    "sister slay!", // Works
]
var welcome = [
    "Whalecum",
    "Bonjour you bitch",
    "Look it's a faggot",
    "Shoot the faggot!",
    "AHHHH A PUSSY!!",
    "Richard *cough* dick has joined",
]
var truth = [
  "True",
  "False",
]
var roll = (Math.floor(Math.random()*200)+1);
var coinflip = [
    "Heads!",
    "Tails!",
]
var bot = new Discord.Client();
bot.on('guildMemberAdd', (guildMember) => {
   guildMember.addRole(guildMember.guild.roles.find(role => role.name === "New"));
   bot.channels.get('555164542594711552').send(welcome[Math.floor(Math.random() * welcome.length).toString(16)])
   bot.user.setActivity(`Serving ${bot.guilds.size} servers`);
})
bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;
    if (!message.content.startsWith(PREFIX)) return;
    var args = message.content.substring(PREFIX.length).split(" ");
    var command = args[0].toLowerCase();
    var mutedrole = message.guild.roles.find("name", "muted");
    if (command == "help") {
        var embedhelpmember = new Discord.RichEmbed()
            .setTitle("**List of Commands**\n")
            .addField("The prefix for all the commands is *", "Example *help")
            .addField(" - help", "Displays this message (Correct usage: *help)")
            .addField(" - info", "Guess what the fuck this command gives you like holy fuck")
            .addField(" - ping", "pong you cunt")
            .addField(" - 8ball", "Ask a question i guess?")
            .addField(" - roll", "Rolls a random number (1-200) (Correct usage: *roll)")
            .addField(" - moan", "AHHHHHHHHHHH")
            .addField(" - tableflip", "don't you dare do this you cunt")
            .addField(" - unflip", "You're a good boy for doing this")
            .addField(" - lenny", "( ͡° ͜ʖ ͡°)")
            .setColor(`0xFFA500`)
            .setFooter("Page 1/3 *help2")
        var embedhelpadmin = new Discord.RichEmbed()
            .setTitle("**List of Admin Commands**\n")
            .addField(" - say", "Makes the bot say whatever you want (Correct usage: *say [message])")
            .addField(" - mute", "Mutes a desired member with a reason (Coorect usage: *mute @username [reason])")
            .addField(" - unmute", "Unmutes a muted player (Correct usage: *unmute @username)")
            .addField(" - kick", "Kicks a desired member with a reason (Correct usage: *kick @username [reason])")
            .addField(" - purge", "Deletes the specified amount of bot messages (Correct usage *purge [Number of messages])")
            .addField(" - status", "sets the status of the bot")
            .setColor(0xFF0000) // sets a color
            .setFooter("HOLY SHIT AN ADMIN HOLY FUCK WTF DUDE I'M SO SORRY I LOVE YOU SO MUCH FUCK")
        message.channel.send(embedhelpmember);
        if(message.member.roles.some(r=>["Administrator", "Owner", "Head Administrator", "Senior Advisor"].includes(r.name)) ) return message.channel.send(embedhelpadmin); // if member is a botadmin, display this too
    }

    if (command == "help2") {
        var embedhelpmember = new Discord.RichEmbed()
            .setTitle("**List of Commands**\n")
            .addField("The prefix for all the commands is *", "Example *help")
            .addField(" - terryl", "A living meme on cg")
            .addField(" - squidward", "I swear my mum is in prison")
            .addField(" - retard", "a quote from our god nick")
            .addField(" - 15inb", "The one and only true American here")
            .addField(" - logan", "huge cock logan")
            .addField(" - rzvibrations", "buy solider today")
            .addField(" - mug", "im mugging you")
            .addField(" - moan4", "Moan for some yay (correct usage: *moan @someoneyouwanttofuck)")
            .addField(" - year", "Shows the year :)")
            .addField(" - removefromthegenepool", "remove someone from the gene pool")
            .addField(" - sandwich", "please")
            .addField(" - dropmoney", "drop your damn money you cunt")
            .addField(" - who", "Lieutenant Who")
            .addField(" - thumb", ":smile:")
            .setColor(`0xFF3B00`)
            .setFooter("Page 2/3 *help3")
        var embedhelpadmin = new Discord.RichEmbed()
            .setTitle("**Merry 2019**\n")
            .addField("I respect you", "Now make me a sandwich")
            .setFooter("Fuck you")
        message.channel.send(embedhelpmember);
        if(message.member.roles.some(r=>["Administrator", "Owner", "Head Administrator", "Senior Advisor"].includes(r.name)) ) return message.channel.send(embedhelpadmin); // if member is a botadmin, display this too
    }

    if (command == "help3") {
        var embedhelpmember = new Discord.RichEmbed()
            .setTitle("**List of Commands**\n")
            .addField("The prefix for all the commands is *", "Example *help")
            .addField(" - truth", "totally didn't copy this off of wilbot")
            .addField(" - admin", "shows if you permissions to add commands or not")
            .addField(" - retard2", "a new bind for an old retard")
            .setColor(`0xFF4C00`)
            .setFooter("Page 3/3 *help")
        var embedhelpadmin = new Discord.RichEmbed()
            .setTitle("**Merry 2019**\n")
            .addField("I respect you", "Now make me a sandwich")
            .setFooter("Fuck you")
        message.channel.send(embedhelpmember);
        if(message.member.roles.some(r=>["Administrator", "Owner", "Head Administrator", "Senior Advisor"].includes(r.name)) ) return message.channel.send(embedhelpadmin); // if member is a botadmin, display this too
    }
    if (command == "gambelhelp") {
        var embedhelpmember = new Discord.RichEmbed()
            .setTitle("**List of Gambling Commands**\n")
            .addField("The prefix for all the commands is *", "Usage: *gambelhelp")
            .addField(" - daily", "Gives you 100 coins when the cooldown is over")
            .addField(" - work", "This command is fucking broken but whatever")
            .addField(" - dice", "Gamble! *dice (1-6) (Ammount of Coins)")
            .addField(" - coinflip", "Gamble! *coinflip (Heads/Tails) (Amount of Coins)")
            .addField(" - FAQ", "Guess you faggot")
            .addField(" - fuckoff", "fuck off")
            .setColor(`0xFF4C00`)
            .setFooter("Gambling bot made by 15inb!")
        var embedhelpadmin = new Discord.RichEmbed()
            .setTitle("**Admin Commands for Gambling**\n")
            .addField("delete", "Deletes a user from the database (*delete @user)")
            .addField("resetdaily", "Resets the daily time for a user (*resetdaily @user)")
            .setFooter("Fuck you")
        message.channel.send(embedhelpmember);
        if(message.member.roles.some(r=>["Administrator", "Owner", "Head Administrator", "Senior Advisor"].includes(r.name)) ) return message.channel.send(embedhelpadmin); // if member is a botadmin, display this too
    }
    if (command == "info") {
        
    }
    if (command == "moan4") {
        if (args[1]) message.channel.send(message.author.toString() + " has moaned for " + args[1].toString() + " AHHHH FUCK YES AHH YEA FUCK")
        else message.channel.send("Who do you want to moan for you cunt? (Correct usage: *moan4 @username)")
    }
    if (command == "removefromthegenepool") {
        if (args[1]) message.channel.send(message.author.toString() + " has removed " + args[1].toString() + " from the gene pool")
        else message.channel.send("Who do you want to remove from the gene pool? (Correct usage: *removefromthegenepool @username)")
    }
    if (command == "8ball") {
        if (args[1] != null) message.reply(eightball[Math.floor(Math.random() * eightball.length).toString(16)]);
        else message.channel.send("Ummmm, what is your question? :rolling_eyes: (Correct usage: *8ball [question])");
    }
    if (command == "roll") {
        message.channel.send(Math.floor(Math.random()*100)+1);
		}
    if (command == "truth") {
        if (args[1] != null) message.reply(truth[Math.floor(Math.random() * truth.length).toString(16)]);
        else message.channel.send("What's your question you autist?");
    }
    if (command == "tableflip") {
        message.channel.send('(╯°□°）╯︵ ┻━┻');
    }
    if (command == "unflip") {
        message.channel.send('┬─┬ノ( º _ ºノ)');
    }
    if (command == "lenny") {
            message.delete();
        message.channel.send('( ͡° ͜ʖ ͡°)');
    }
    if (command == "moan") {
        message.channel.send('AHHHHHH FUCK JACOB ROTHSCHILD YOU\'RE SO FUCKING HOT OMG');
    }
    if (command == "terryl") {
        message.channel.send('4\' 9\"');
    }
    if (command == "squidward") {
        message.channel.send('my mum is in prison you fucking cunt kill your self');
    }
    if (command == "retard") {
        message.channel.send('is rdm a punishment?');
    }
    if (command == "15inb") {
        message.channel.send(':flag_um:');
    }
    if (command == "logan") {
        message.channel.send('Hi guys, i\'m an admin+ and i\'m inactive');
    }
    if (command == "mug") {
        if (args[1]) message.channel.send("This is a mug " + args[1].toString() + " drop 2 bill or die 5 seconds!")
        else message.channel.send("Who do you want ````````````````````````````````````````````to mug you cunt? (Correct usage: *mug @username)")
    }
    if (command == "add") {
        
    }
    if (command == "rz") {
        message.channel.send('https://cloud-gaming.co.uk/forum/index.php?/topic/14676-rzvibrations-store/');
    }
    if (command == "year") {
        message.channel.send('╭━━━╮╭━━━╮╱╭╮╱╭━━━╮\n┃╭━╮┃┃╭━╮┃╭╯┃╱┃╭━╮┃\n╰╯╭╯┃┃┃┃┃┃╰╮┃╱┃╰━╯┃\n╭━╯╭╯┃┃┃┃┃╱┃┃╱╰━━╮┃\n┃┃╰━╮┃╰━╯┃╭╯╰╮┃╰━╯┃\n╰━━━╯╰━━━╯╰━━╯╰━━━╯');
    }
    if (command == "dropmoney") {
        message.channel.send('Here\'s your money please no kill');
    }
    if (command == "who") {
        message.channel.send('How is racism immoral?');
    }
    if (command == "thumb") {
        message.channel.send('https://cdn.discordapp.com/attachments/513033711848259615/530154323166887976/image0.png');
    }
    if (command == "retard2") {
      message.channel.send('its kinda hard haveing a cold going to school and having to be od for 10 h')
    }
    if (command == "faq") {
      message.channel.send('1Q. 15inb how is your cock so big 1A. Genetics \n2Q. Why did you make the bot? 2A. I have a huge cock \nThat\'s all for today come back never')
    }
    if (command == "byreaper") {
      message.channel.send('idk dont really care \n dealers choise')
    }
    if (command == "woodrow") {
        message.channel.send('https://cloud-gaming.co.uk/forum/index.php?/topic/17325-sprickles-trading-store/&')
    }
    if (command == "invite") {
        message.channel.send('https://discord.gg/hEz3vdR')
    }
    if (command == "status") {
      if (!message.member.roles.some(r=>["Administrator", "Owner", "Head Administrator", "Moderator", "Senior Advisor", "Developer"].includes(r.name)) ) return message.reply("Sorry, you do not have the permission to do this!");
      var statusdelete = 8
      var status = message.content.substring(statusdelete).split(" ");
      var status = status.join(" ");
      if (!status) return message.channel.send("Hey idot please put the status")
          bot.user.setActivity(`${status}`)
          message.channel.send('The bots status has succesfully been set to: \`' + `${status}` + '\`')
    }
    if (command == "ticket") {
      var ticketdelete = 8
      var ticket = message.content.substring(ticketdelete).split(" ");
      var ticket = ticket.join(" ");
      if (!ticket) return message.channel.send("Please provide a reason for this ticket")
      bot.channels.get('544305912236474392').send(`<@&544271686933938187> ${message.author} needs help with the following: ${ticket}`)
      message.channel.send('Your report has succesfully been sent in. Please be patient as this could time some time to get a response.')
    }
    if (command == "fuckoff") {
      bot.user.setActivity(`fucking off`)
      message.channel.send('I\'m fucking off')
    }
    if (command == "sandwich") {
        var embedhelpmember = new Discord.RichEmbed()
            .setTitle("**Make me a sandwich you bitch**\n")
            .addField("Miller if you don't make 15inb a sandwich you're banned", "please")
            .setColor(`0xFFB600`)
            .setFooter("With lettuce please")
        var embedhelpadmin = new Discord.RichEmbed()
            .setTitle("**I made you a sandwich already because you're an admin!**")
            .addField("You're welcome", ":smile:")
            .setColor(0xFF0000) // sets a color
            .setFooter("We were out of lettuce btw")
        message.channel.send(embedhelpmember);
        if (!message.member.roles.some(r=>["Administrator", "Owner", "Head Administrator", "Moderator", "Senior Advisor", "Developer"].includes(r.name)) ) return message.reply("Sorry, you do not have the permission to do this!");
    }
    if (command == "admin") {
    if (!message.member.roles.some(r=>["Administrator", "Owner", "Head Administrator", "Moderator", "Senior Advisor", "Developer"].includes(r.name)) ) return message.reply("Sorry, you do not have the permission to do this!");
      message.channel.send('Your rank has permission to all/some of the admin commands!')
    }
    if (command == "restart") {
        message.channel.send('Restarting the bot')
        .then(msg => bot.destroy())
        .then(() => bot.login(BOT_TOKEN));
    }
    if (command == "mute") {
        if (!message.member.roles.some(r=>["Administrator", "Owner", "Head Administrator", "Moderator", "Senior Advisor", "Developer", "Discord Staff"].includes(r.name)) ) return message.reply("Sorry, you do not have the permission to do this!");
        var mutedmember = message.mentions.members.first();
        if (!mutedmember) return message.channel.send("You autistic or something? Mention someone that's actually on the server ffs")
        if (mutedmember.hasPermission("ADMINISTRATOR")) return message.reply("It sucks that I can't mute this member lol")
        var mutereasondelete = 10 + mutedmember.user.id.length
        var mutereason = message.content.substring(mutereasondelete).split(" ");
        var mutereason = mutereason.join(" ");
        if (!mutereason) return message.channel.send("Uhm? try putting a reason next time fucking idiot")
        mutedmember.addRole(mutedrole)
            .catch(error => message.channel.send(`Sorry ${message.author} I couldn't mute because of : ${error}`));
        message.channel.send(`${mutedmember.user} has been muted by ${message.author} because: ${mutereason}`);
    }
    if (command == "unmute") {
        if (!message.member.roles.some(r=>["Administrator", "Owner", "Head Administrator", "Moderator", "Senior Advisor", "Developer"].includes(r.name)) ) return message.reply("Sorry, you do not have the permission to do this!");
        var unmutedmember = message.mentions.members.first();
        if (!unmutedmember) return message.channel.send("Please mention a valid member of this server!")
        unmutedmember.removeRole(mutedrole)
            .catch(error => message.channel.send(`Sorry ${message.author} I couldn't mute because of : ${error}`));
        message.channel.send(`${unmutedmember.user} has been unmuted by ${message.author}!`);
    }
});


bot.login(BOT_TOKEN);
