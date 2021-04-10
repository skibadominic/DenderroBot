const Discord = require("discord.js");

exports.run = async (client, message, args) => {
message.delete();
const content = args.join(" ");

if (!args[0]) {
  return message.channel.send(`${message.author.username}, escreva a sugestão após o comando`)
} else if (content.length > 1000) {
  return message.channel.send(`${message.author.username}, forneça uma sugestão de no máximo 1000 caracteres.`);
} else {
  var canal = message.guild.channels.cache.find(ch => ch.id === "815911346981830697");
  const msg = await canal.send(
    new Discord.MessageEmbed()
    .setColor("#9400d3")
    .addField("Autor:", message.author)
    .addField("Conteúdo:", content)
    .setTimestamp()
  );
  await message.channel.send(`${message.author} a sugestão foi enviada com sucesso!`);

  const emojis = ["✔️", "❎"];

  for (const i in emojis) {
    await msg.react(emojis[i])
  }
}
}