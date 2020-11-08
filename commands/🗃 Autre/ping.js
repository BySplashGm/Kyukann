const Discord = require('discord.js');

module.exports.run = async(client, message, args) => {

    let debut = Date.now();
    await message.channel.send("Pinging...").then(async(m) => await m.edit(`Pong : ${Date.now() - debut} ms`));

};

module.exports.help ={
    name: "ping",
    aliases: ['ping'],
    category: '🗃 autre',
    description: "Renvoie pong !",
    usage: '',
    permissions: false,
    args: false,
};