const { MessageEmbed } = require("discord.js");
const { PREFIX } = require("../../config");
const { readdirSync } = require("fs");
const categoryList = readdirSync('./commands');

module.exports.run = (client, message, args) => {

    if (!args.length) {
        const embed = new MessageEmbed()
            .setColor("#f7f2f2")
            .setTitle("📝 Liste des Commandes 📝")
            .setDescription(`Ici sont listées les sous-catégories disponibles et leurs commandes\nPour plus d'informations sur une commande, tapez \`${PREFIX}help <command_name>\``)

        for(const category of categoryList) {
            embed.addField(
                `${category}`,
                `${client.commands.filter(cat => cat.help.category == category.toLowerCase()).map(cmd => cmd.help.name).join(', ')}`
            );
        };

        return message.channel.send(embed)
    } else {
        const command = client.commands.get(args[0]) || client.commands.find(cmd => cmd.help.aliases && cmd.help.aliases.includes(args[0]));
        if (!command) return false;

        const embed = new MessageEmbed()
            .setColor("#f7f2f2")
            .setTitle(`Informations sur la Commande - ${PREFIX}${command.help.name}`)
            .addField("Description", `${command.help.description}`)
            .addField("Utilisation", command.help.usage ? `${PREFIX}${command.help.name} ${command.help.usage}` : `${PREFIX}${command.help.name}`, true)

        if (command.help.aliases.length > 1) embed.addField('Alias', `${command.help.aliases.join(', ')}`, true);
        return message.channel.send(embed);
    }
};

module.exports.help = {
    name: "help",
    aliases: ['help', 'aide'],
    category: '🗃 autre',
    description: "Renvoie la liste des commandes ou les informations de celle-ci",
    usage: "<command_name>",
    permissions: false,
    args: false,
};