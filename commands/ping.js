module.exports.run = async (client, message, args) => {
  const m = await message.channel.send('ping?');

  m.edit(`📡 **| Seu ping está logo a baixo:**\n🖥 | Ping do Servidor: **${m.createdTimestamp -
      message.createdTimestamp}ms**\n📺 | Seu Ping: **${Math.round(
      client.ws.ping
    )}ms**`
  );
};