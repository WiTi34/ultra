const Discord = require('discord.js');
const client = new Discord.Client();
client.commands = new Discord.Collection();
const fs = require('fs');

bot.on('ready', function () {
    bot.user.setGame('!u help ').catch(console.error)
})

var prefix = "/u"

client.login('NTA5NzU1MjIwMjY4NDE3MDI2.DtX8dA.ss4Kasx_omSW2NBfxkI4Ik0pevs');

if (message.content === '/u help') {
    message.channel.send({
        embed: {
            color: blue,
            title: `Voici la liste des commandes **${membre.user.username}**`
        }
    })
}
if (message.content === '/u logo') {
    message.channel.send({
        embed: {
            color: blue,
            title: `Voici ton logo **${membre.user.username}**`,
            thumbnail: {
                url: member.user.displayAvatarURL
            }
        }
    })
}


fs.readdir('./Commandes/', (error, f) => {
    if (error) { return console.error(error); }
        let commandes = f.filter(f => f.split('.').pop() === 'js');
        if (commandes.length <= 0) { return console.log('Aucune commande trouvée !'); }

        commandes.forEach((f) => {
            let commande = require(`./Commandes/${f}`);
            console.log(`${f} commande chargée !`);
            client.commands.set(commande.help.name, commande);
        });
});

fs.readdir('./Events/', (error, f) => {
    if (error) { return console.error(error); }
        console.log(`${f.length} events chargés`);

        f.forEach((f) => {
            let events = require(`./Events/${f}`);
            let event = f.split('.')[0];
            client.on(event, events.bind(null, client));
        });
});

