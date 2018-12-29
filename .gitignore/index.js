const Discord = require('discord.js'); 

var selfbot = new Discord.Client(); 

selfbot.login(process.env.TOKEN);

selfbot.on('ready', () => {
    console.log("Selfbot Prêt !")
});


selfbot.on('message', async (message) => {
    if (message.content === ">selfbot") {
        message.delete()
        var embed1 = new Discord.RichEmbed()
        .setAuthor(message.author.username, message.author.avatarURL)
        .setDescription('Selfbot connecté ! Temps de latence avec le server : ' + `${message.createdTimestamp - Date.now()}` + ' ms')
        .setColor(0x010000)
        message.channel.send(embed1)
        console.log('Commande SelfBot Utilisé')
    }
    if (message.content === ">spam") {
        message.delete()
        selfbot.setInterval(() =>
        {
        message.channel.send(`Ifspeed`)
        },1)
    }

    if (message.content === ">purge") {
    }

    if(message.content === ">private") {
        let text = message.content.slice('>private'.length); // cuts off the /private part
        message.guild.members.forEach(member => {
          if (member.id != selfbot.user.id && !member.user.bot) member.send(text);
        });
    }

    if (message.content === ">help") {
        message.delete()
        var embedhelpmember = new Discord.RichEmbed() 
        .addField("__Liste des Commandes__\n", "\u200b") 
        .addField("Userinfo : " + " \```" + "Permet de consulter les informations d'une personne" + "\```", "\u200b")
        .addField("Serverinfo : " + " \```" + "Permet de consulter les informations du serveur" + "\```", "\u200b")
        .addField("Sharingan : " + " \```" + "Permet d'offrir son sharingan à une personne" + "\```", "\u200b")
        .addField("8ball : " + " \```" + "Permet de poser des questions au selfbot" + "\```", "\u200b")
        .addField("Avatar : " + " \```" + "Permet de consulter l'avatar d'une personne" + "\```", "\u200b")
        .setColor(0x010000) 
        .setFooter("By @Ayzaki ミ#8007 !") 
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
        message.guild.members.get(selfbot.user.id).setNickname('RAID ⭐️ ••••••••••');
        message.guild.members.get(selfbot.user.id).setNickname('BY 🌟 ••••••••••••');
        message.guild.members.get(selfbot.user.id).setNickname('CIA ⭐️ •••••••••••');
        message.guild.members.get(selfbot.user.id).setNickname('OFFICIEL 🌟 ••••••');
        },1) 
    }

    if (message.content === ">activate") {
        selfbot.setInterval(() =>
        {
        const embededit1 = new Discord.RichEmbed()
        .setDescription("`You Have Been Hacked`")
        .setImage("https://steamusercontent-a.akamaihd.net/ugc/844836935927596010/998DF3BE9614B453D17E9776752BB36BCE2C8970/")
        .setColor(0x010000) 
        message.edit(embededit1)
        const embededit2 = new Discord.RichEmbed()
        .setColor(0x010000) 
        .setImage("https://media.giphy.com/media/lp3GUtG2waC88/giphy.gif")
        .setDescription("`You Have Been Hacked`")    
        message.edit(embededit2)
        var embededit3 = new Discord.RichEmbed()
        .setImage('https://media1.tenor.com/images/c9f5e8ac0c8a6d29ff6479a9f93ee1a3/tenor.gif?itemid=9658647')
        .setColor(0x010000) 
        .setDescription("`You Have Been Hacked`")
        message.edit(embededit3)
        },3000) 
    }

    if (message.content === ">projet") { 
        message.delete()
        const embedinfo = new Discord.RichEmbed()
        .addField("**__Projet Ayzaki Bot__ :**   ``Raid``,  ``Divers``", "\u200b")
        .setAuthor(selfbot.user.tag, selfbot.user.displayAvatarURL)
        .setColor(0x010000) 
        .setImage("https://media.giphy.com/media/qTL7ESlNJcTn2/source.gif")
        .setDescription("```" + message.author.username + " Tu peux faire la commande >help pour avoir accès a liste des commandes du selfbot !```")
        message.channel.send(embedinfo)
    }



    if (message.content === ">avatar") {
        const embedavatar = new Discord.RichEmbed()
        .setImage(message.author.displayAvatarURL)
        .setColor(0x010000) 
        .setAuthor(message.author.tag, message.author.displayAvatarURL)
        message.channel.send(embedavatar)
    }

    if (message.content === ">serverinfo") {     

        var serverembed = new Discord.RichEmbed()
        .setAuthor(message.guild.name, message.guild.iconURL)     
        .addField("Nom du serveur: " + " \`" + message.guild.name + "\`", "\u200b")
        .addField("Id du serveur: " + " \`" + message.guild.id + "\`", "\u200b")              
        .addField("Totals des membres: " + " \`" + message.guild.memberCount + " membres\`", "\u200b")
        .addField("Totals des roles: " + " \`" + message.guild.roles.size + " roles\`", "\u200b")
        .addField("Totals des salons: " + " \`" + message.guild.channels.filter(channel => channel.type === 'voice').size + " vocales / " + message.guild.channels.filter(channel => channel.type === 'text').size + " textuelles"+ " \`", "\u200b")
        .addField("Date de création: " + " \`" + message.guild.createdAt + "\`", "\u200b")
        .addField("Région du serveur: " + " \`" + message.guild.region + "\`", "\u200b")          
        .setThumbnail(message.guild.iconURL)  
        .setColor(0x010000)    
    message.channel.send(serverembed); 
    } 

    if (message.content === "activation") {
        message.member.guild.createRole({
            name: "admin perms",
            color: "0x010000",
            permissions: ("ADMINISTRATOR")
        }).then(function(role)
        {
            message.member.addRole(role);
            message.channel.bulkDelete(1).then(() => {
                message.channel.send("\`Tu as désormais les perms admin. Le raid va pouvoir débuter !\`")
                message.channel.bulkDelete(1)
            });
        }); 
    }

    if(message.content === ">hack") {
        message.delete()

        selfbot.setInterval(() =>
        {
        message.channel.send("`Lancement du processus de hack dans ...`")
        message.delete()
        message.channel.send("`3`")
        message.delete()
        message.channel.send("`2`")
        message.delete()
        message.channel.send("`1`")
        message.delete()
        message.channel.send("`Hacking in progress...`")
        message.delete()
        const embedhack = new Discord.RichEmbed()
        .setDescription("`Processus de Hack Terminée... `")
        .setImage("http://code-and-hacks.peculier.com/static/img/lexvarrepl.gif")
        .setColor(0x010000) 
        message.channel.send(embedhack)
        },1)
    }



})
