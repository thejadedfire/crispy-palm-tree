const Discord = require('discord.js');
const { Client, Attachment } = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  const channel = member.guild.channels.find(ch => ch.name === 'servant-quarters');
  const date = Date.now();
  channel.send("I came online at " + date.toDateString() + ", " + date.toTimeString());
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
  else if (msg.content === 'Henry Jekyll'){
    msg.reply("At your service, " + msg.author);
  } else if (msg.content === "Gucci"){
      let chan = msg.channel;
      const attachment = new Attachment('https://i.imgur.com/Zbqj2lW.jpg');
      //var emoji = msg.author.guild.emojis.find(em => emoji.name === "shame");
      //chan.send(emoji);
      chan.send("Fashionable.", attachment);
  }
});
client.on('message', msg=>{
  if (!msg.author.bot && msg.content.startsWith("Repeat after me")){
    let chan = msg.channel;
    var rpt = msg.content;
    rpt = rpt.substring(15);
    chan.send(rpt);
  } else if (msg.content.includes("bye")){
    msg.reply('Farewell! I shall miss you dearly.');
  }
})

// Log our bot in using the token from https://discordapp.com/developers/applications/me
client.login('NTcwMzY0MTA4OTUyODI5OTY0.XMMzSw.cM1hpe6VhsBIA32g0hm2I_ZPfiU');
