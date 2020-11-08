const { MessageEmbed } = require('discord.js');

module.exports = (client) => {

    client.user.setPresence({
        activity: {
            name: '/help┃In Dev', type: 'PLAYING'
        }, status: 'idle'
    });
}