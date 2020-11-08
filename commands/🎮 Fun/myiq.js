const Discord = require('discord.js');

function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }   

  function getRandomInt(min, max) {
    min = Math.ceil(60);
    max = Math.floor(160);
    return Math.floor(Math.random() * (max - min)) + min;
  }

module.exports.run = async(client, message, args) => {

    const membre = message.member;

    message.channel.send(":gear: Laisse moi calculer ton QI...");
    await sleep(3000)
    message.channel.send(`**${membre.user.username}** possède ${getRandomInt()} points de QI (la moyenne est entre 90 et 110 et la maximum est 160)`);

};

module.exports.help = {
  name: "myiq",
  aliases: ['myiq', 'monqi', 'myqi', 'moniq'],
  category: '🎮 fun',
  description: "Génère un nombre aléatoire",
  usage: "",
  permissions: false,
  args: false,
};