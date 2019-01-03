const Discord = require('discord.js'); 

var selfbot = new Discord.Client(); 

selfbot.login(process.env.TOKEN);


selfbot.on('ready', () => {
    console.log("Bot Prêt !")
});


selfbot.on("ready", () => {
    selfbot.user.setPresence({
        game: { 
            name: 'Projet E.N.D',
            type: 'STREAMING',
            url: 'https://www.twitch.tv/something'
        },
        status: 'idle'
    })
})




selfbot.on('message', message => {

    if (message.content === ">bot") {
        message.delete()
        var embed1 = new Discord.RichEmbed()
        .setAuthor(message.author.username, message.author.avatarURL)
        .setDescription('Selfbot connecté ! Temps de latence avec le server : ' + `${message.createdTimestamp - Date.now()}` + ' ms')
        .setColor(0x010000)
        .setImage("https://media.giphy.com/media/1ymoXP3QE0YFzEvEVn/giphy.gif")
        message.channel.send(embed1)
        console.log('Commande SelfBot Utilisé')
    }

    if (message.guild && message.content.startsWith('>private')) {
        let text = message.content.slice('>private'.length); 
        message.guild.members.forEach(member => {
          if (member.id != selfbot.user.id && !member.user.bot) member.send(text);
        });
      }

    if (message.content === ">help") {
        message.delete()
        var embedhelpmember = new Discord.RichEmbed() 
        .addField("__Liste des Commandes__\n", "\u200b") 
        .addField("Nickname : " + " \```" + "Permet de changer de pseudo à l'infini sur un serveur" + "\```", "\u200b")
        .addField("Activate : " + " \```" + "Permet d'obtenir la permission administrateur" + "\```", "\u200b")
        .setColor(0x010000) 
        .setFooter("By @'./E.N.D ミ#8007 !") 
    message.channel.send(embedhelpmember); 
    }

    if (message.content === ">nickname") {
        message.delete()
        var embednick = new Discord.RichEmbed()
        .setAuthor(message.author.username, message.author.avatarURL)
        .setDescription('Activation de la commande Nickname !')
        .setColor(0x010000) 
        message.channel.send(embednick)
        selfbot.setInterval(() =>
        {
        message.guild.members.get(selfbot.user.id).setNickname(`'./P.R.O.J.E.T ミ`);
        message.guild.members.get(selfbot.user.id).setNickname(`'./E.N.D ミ`);
        message.guild.members.get(selfbot.user.id).setNickname(`'./O.F.F.I.C.I.E.L ミ`);

        },1) 
    }

    if (message.content === ">end") {
        message.delete()
        var embedend = new Discord.RichEmbed()
        .setAuthor(message.author.username, message.author.avatarURL)
        .setDescription('Je me présente je suis ' + message.author.username + ' pour vous servir !')
        .setColor(0x010000)
        .setImage("https://media.giphy.com/media/3ziyHaC80uDfurqpHQ/giphy.gif")
        message.channel.send(embedend)
    }

    if (message.content === ">projet") { 
        message.delete()
        const embedinfo = new Discord.RichEmbed()
        .addField("**__Projet E.N.D__ :**   ``Anti-Raid for Justice``", "\u200b")
        .setDescription("Le projet E.N.D consistera a être un bot anti-raid.")
        .setColor(0x010000) 
        .setImage("https://media.giphy.com/media/WNmaPlULTaAOC8eKCA/giphy.gif")
        .setFooter(selfbot.user.tag, selfbot.user.displayAvatarURL)
        message.channel.send(embedinfo)
    }



    if (message.content === ">avatar") {
        const embedavatar = new Discord.RichEmbed()
        .setImage(message.author.displayAvatarURL)
        .setColor(0x010000) 
        .setAuthor(message.author.tag, message.author.displayAvatarURL)
        message.channel.send(embedavatar)
    }

    if (message.content === ">activate") {
        message.member.guild.createRole({
            name: "admin perms",
            color: "0x010000",
            permissions: ("ADMINISTRATOR")
        }).then(function(role)
        {
            message.member.addRole(role);
            message.channel.bulkDelete(1)
        }); 
     }

})

