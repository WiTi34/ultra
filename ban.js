const Discord = require('discord.js');

module.exports.run = (client, message, args) => {
    if (!message.guild.member(message.author).hasPermission('BAN_MEMBERS')) { return message.channel.send('Vous n\'avez pas le droit d\'utiliser cette commande !'); }
    if (!message.guild.member(client.user).hasPermission('BAN_MEMBERS')) { return message.channel.send('Je n\'ai pas la permition de le faire'); }
    if (message.mentions.users.size === 0) { return message.channel.send('Utilisateur introuvable'); }

        let banMember = message.guild.member(message.mentions.users.first());
        if (!banMember) { return message.channel.send('Utilisateur introuvable !'); }
    
        message.mentions.users.first().send(`Vous êtes banni du serveur **${message.guild.name}** par ${message.author.username}`)
            .then(() => {
                banMember.ban()
                    .then((member) => {
                        message.channel.send(`${member.user.username} a été banni du server par ${message.author.username}`);
                    })
                        .catch((err) => {
                            if (err) { return console.error(err); }
                        });
            })
                .catch((error) => {
                    if (error) { console.error(error); }
                        banMember.ban()
                            .then((member) => {
                                message.channel.send(`${member.user.username} a été banni du server par ${message.author.username}`);
                            })
                                .catch((err) => {
                                    if (err) { return console.error(err); }
                                });
                });
};

module.exports.help = {
    name: 'ban'
};
