const { MessageEmbed } = require("discord.js");

module.exports.run = (client, message, args) => {
  const embed = new MessageEmbed()
    .setColor("#B4E0E0")
    .setAuthor(`${client.user.username} Info`, client.user.avatarURL())
    .addFields(
      { name: 'Mémoire', value: `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB`, inline: true},
      { name: 'Uptime', value: `${Math.floor(client.uptime / 1000 / 60).toString()} minutes`, inline: true},
      { name: '\u200b', value: `\u200b`, inline: true},
      { name: 'Serveurs', value: `${client.guilds.cache.size.toString()}`, inline: true},
      { name: 'Salons', value: `${client.channels.cache.size.toString()}`, inline: true},
      { name: 'Utilisateurs', value: `${client.guilds.cache.map(g => g.memberCount).reduce((a, b) => a + b)}`, inline: true},
      { name: 'Version', value: `discord.js@12.3.0`, inline: true},
      { name: 'Source', value: `[GitHub](https://github.com/BySplashGm/Kyukann)`, inline: true},
      { name: 'Support', value: `[Rejoindre le serveur](https://discord.gg/baPe5UR)`, inline: true},
    )
    .setFooter('Le Dictateur - Botinfo')

  message.channel.send(embed);
};

module.exports.help = {
  name: "botinfo",
  aliases: ['botinfos', 'infos'],
  category: '📁 autre',
  description: "Renvoie des informations concernant le BOT !",
  usage: '',
  permissions: false,
  args: false,
};