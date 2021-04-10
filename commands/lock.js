const Discord = require("discord.js");

exports.run = async (bot,message,args) => {
    if (!message.member.roles.cache.has('Denderro Bot') && !message.member.hasPermission("ADMINISTRATOR")) {
		return message.channel.send("Você não tem permissão para executar esse comando!");
    }
    
    const channel  = message.mentions.channels.first() || message.channel;
    const roles    = message.guild.roles.cache;
    const everyone = roles.find(role => role.name === "@everyone");

    await channel.overwritePermissions([
        {
            id: everyone,
            deny: ["SEND_MESSAGES"]
        }
    ]);

    const msg = new Discord.MessageEmbed()
        .setColor("#000000")
        .setTitle('Chat Pausado')
        .setDescription(`Os membros comuns foram proibidos de falar no chat <#${channel.id}>!`)
        .setThumbnail('https://cdn.discordapp.com/app-icons/734154625845952694/8261474e8963b9e62bf19159ca52dcea.png')
        .setTimestamp();

    return message.channel.send(msg);
};