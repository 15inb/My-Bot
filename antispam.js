const Discord = require('discord.js');
const antispam = require('discord-anti-spam'); // Requiring this module.
const client = new Discord.Client();

client.on('ready', () => {
  // Module Configuration Constructor
   antispam(client, {
        warnBuffer: 4, // Maximum ammount of messages allowed to send in the interval time before getting warned.
        maxBuffer: 6, // Maximum amount of messages allowed to send in the interval time before getting banned.
        interval: 2000, // Amount of time in ms users can send the maxim amount of messages(maxBuffer) before getting banned.
        warningMessage: "If you continue spamming you will be banned.", // Message users receive when warned. (message starts with '@User, ' so you only need to input continue of it.)
        muteMessage: "has been muted for spamming after being warned to stop.", // Message sent in chat when user is banned. (message starts with '@User, ' so you only need to input continue of it.)
        maxDuplicatesWarning: 7,// Maximum amount of duplicate messages a user can send in a timespan before getting warned.
        maxDuplicatesBan: 10, // Maximum amount of duplicate messages a user can send in a timespan before getting banned.
        deleteMessagesAfterBanForPastDays: 7, // Deletes the message history of the banned user in x days.
        exemptRoles: ["Bot", "Owner", "Co-Owner", "Admin", "Moderator"], // Name of roles (case sensitive) that are exempt from spam filter.
        exemptUsers: ["15inb#9872", "Sprickles#6403"] // The Discord tags of the users (e.g: MrAugu#9016) (case sensitive) that are exempt from spam filter.
      });

  // Rest of your code
});

client.on('message', msg => {
  client.emit('checkMessage', msg); // This runs the filter on any message bot receives in any guilds.

  // Rest of your code
})

client.login('your token here');
