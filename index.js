const express = require('express');
const app = express();
app.get('/', (request, response) => {
	const ping = new Date();
	ping.setHours(ping.getHours() - 3);
	console.log(
		`Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`
	);
	response.sendStatus(200);
});
app.listen(process.env.PORT);

const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');

client.on('message', message => {
	if (message.author.bot) return;
	if (message.channel.type == 'dm') return;
	if (!message.content.toLowerCase().startsWith(config.prefix.toLowerCase()))
		return;
	if (
		message.content.startsWith(`<@!${client.user.id}>`) ||
		message.content.startsWith(`<@${client.user.id}>`)
	)
		return;

	const args = message.content
		.trim()
		.slice(config.prefix.length)
		.split(/ +/g);
	const command = args.shift().toLowerCase();

	try {
		const commandFile = require(`./commands/${command}.js`);
		commandFile.run(client, message, args);
	} catch (err) {
		console.error('Erro:' + err);
	}
});

client.on("ready", () =>{
console.log("Estou Online..")
let activities = [
    `Meu prefix é $`,
	`Code by ! Iceboy23#0666`

],
i = 0;
setInterval(() => client.user.setActivity(`${activities[i++ % activities.length]}`, {
  type: "WATCHING"
}), 1000); //WATCHING, LISTENING, PLAYING, STREAMING
  client.user
    .setStatus("dnd") //idle, dnd, online, invisible
    .catch(console.log);
console.log("Estou Online...")

});

//Invite blocker
client.on("message", async message => {
  const regex = /(https?:\/\/)?(www\.)?(discord\.(gg|io|me|li|club)|discordapp\.com\/invite|discord\.com\/invite)\/.+[a-z]/gi;
  if (regex.exec(message.content)) {
    await message.delete({timeout: 1000});
      await message.channel.send(
        `${message.author} **você não pode postar link de outros servidores aqui seu otário**`
      );
  }
});

client.login("TOKEN_HERE");

//Code by ! Iceboy23#8034