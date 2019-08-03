const Discord = require("discord.js");

module.exports.run = (client, message, args) => {
    if (!message.guild.member(message.author).hasPermission('MANAGE_MESSAGES')) { return message.channel.send('Vous n\'avez pas les permissions !'); }
    if (!args[0]) { return message.channel.send('Veuillez spécifier combien de messages sont a supprimer.'); }
    else if (isNaN(args[0])) { return message.channel.send('Veuillez spécifier un nombre !'); }
                                                                              
        message.channel.bulkDelete(args[0])
            .then((messages) => {
                message.channel.send(`J'ai supprimé **${messages.size}** messages.`);
            });
};

module.exports.help = {
    name: 'clear'
};
