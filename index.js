const Discord = require('discord.js'); //This can also be discord.js-commando or other node based packages!
const dl = require('discord-leveling');

//Create the bot client
const client = new Discord.Client();

//Whenever someone types a message this gets activated.
//(If you use 'await' in your functions make sure you put async here)
client.on('message', async message => {

  //Set the prefix of the bot.
  const settings = {
    prefix: '!',
  }

  //This reads the first part of your message behind your prefix to see which command you want to use.
  var command = message.content.toLowerCase().slice(settings.prefix.length).split(' ')[0];

  //These are the arguments behind the commands.
  var args = message.content.split(' ').slice(1);

  //If the user that types a message is a bot account return.
  if (message.author.bot) return;

  //When someone sends a message add xp
  var profile = await dl.Fetch(message.author.id)
  dl.AddXp(message.author.id, 10)
  //If user xp higher than 100 add level
  if (profile.xp + 10 > 500) {
    await dl.AddLevel(message.author.id, 1)
    message.reply(`You just leveled up!! You are now level: ${profile.level + 1}`)
  }

  //If the message does not start with your prefix return.

  if (command === 'profile') {

    var user = message.mentions.users.first() || message.author

    var output = await dl.Fetch(user.id)
    message.channel.send(`Hey ${user.tag}! You have ${output.level} level(s)! and ${output.xp} xp!`);
  }

  if (command === 'setxp') {

    if (!message.member.roles.some(r=>["Administrator", "Owner", "Head Administrator", "White Supremacy"].includes(r.name)) ) return message.reply("Sorry, you do not have the permission to do this!");

    var amount = args[0]
    var user = message.mentions.users.first() || message.author

    var output = await dl.SetXp(user.id, amount)
    message.channel.send(`Hey ${user.tag}! You now have ${amount} xp!`);
  }

  if (command === 'setlevel') {

    if (!message.member.roles.some(r=>["Administrator", "Owner", "Head Administrator", "White Supremacy"].includes(r.name)) ) return message.reply("Sorry, you do not have the permission to do this!");

    var amount = args[0]
    var user = message.mentions.users.first() || message.author

    var output = await dl.SetLevel(user.id, amount)
    message.channel.send(`Hey ${user.tag}! You now have ${amount} levels!`);
  }

  if (command === 'leaderboard') {

    //If you put a mention behind the command it searches for the mentioned user in database and tells the position.
    if (message.mentions.users.first()) {

      var output = await dl.Leaderboard({
        search: message.mentions.users.first().id
      })
      message.channel.send(`The user ${message.mentions.users.first().tag} is number ${output.placement} on my leaderboard!`);

      //Searches for the top 3 and outputs it to the user.
    } else {

      dl.Leaderboard({
        limit: 3
      }).then(async users => { //make sure it is async

        var firstplace = await client.fetchUser(users[0].userid) //Searches for the user object in discord for first place
        var secondplace = await client.fetchUser(users[1].userid) //Searches for the user object in discord for second place
        var thirdplace = await client.fetchUser(users[2].userid) //Searches for the user object in discord for third place

        message.channel.send(`My leaderboard:

1 - ${firstplace.tag} : ${users[0].level} : ${users[0].xp}
2 - ${secondplace.tag} : ${users[1].level} : ${users[1].xp}
3 - ${thirdplace.tag} : ${users[2].level} : ${users[2].xp}`)

      })

    }
  }

  if (command == 'delete') {

    var user = message.mentions.users.first()
    if (!user) return message.reply('Pls, Specify a user I have to delete in my database!')

  if (!message.member.roles.some(r=>["Administrator", "Owner", "Head Administrator", "White Supremacy"].includes(r.name)) ) return message.reply("Sorry, you do not have the permission to do this!");

    var output = await dl.Delete(user.id)
    if (output.deleted == true) return message.reply('Succesfully deleted the user out of the database!')

    message.reply('Error: Could not find the user in database.')

  }

})

//Your secret token to log the bot in. (never show this to anyone!)
client.login('your token here')
