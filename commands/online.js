const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  let totalSeconds = client.uptime / 1000;
  let days = Math.floor(totalSeconds / 86400);
  let hours = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds % 60;

  let uptime = `๐๏ธ ${days.toFixed()} dias\n๐๏ธ ${hours.toFixed()} horas\n๐๏ธ ${minutes.toFixed()} minutos\n๐๏ธ ${seconds.toFixed()} segundos`;

  const embed = new Discord.MessageEmbed()
    .setTitle(`Tempo de atividade ๐ฐ๏ธ`)
    .setThumbnail("https://cdn.discordapp.com/avatars/485512277454356485/b90bd4645aff242c1573dae36372beb7.png?size=1024")
    .setColor("#9400d3")
    .setDescription(`**Estou online hรก:**\n${uptime}`)

  message.channel.send(embed);
};