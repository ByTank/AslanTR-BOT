const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  
  if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('⚠ Uyarı ⚠', '`davet` adlı komutu özel mesajlarda kullanamazsın.')
    return message.author.sendEmbed(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.RichEmbed()
    .setColor(0xDF01A5)
        .addField('Botu Davet Et!', `[Tıkla!](https://discordapp.com/oauth2/authorize?client_id=549984881803788315&scope=bot&permissions=2080767167)`, true)
        .addField('Destek Sunucusu!', `[Tıkla!](https://discord.gg/b7xUtKh)`)
    .setFooter('Davet Sistemi', message.guild.ImageURL)
    return message.channel.sendEmbed(sunucubilgi);
    }
};


exports.conf = 
	enabled: true, 
	guildOnly: true, 
	aliases: [], 
	permLevel: 0,
	kategori: 'bot' 
}

exports.help = { 
	komut: 'davet', 
	description: 'Botu Davet Edebilirsiniz.', 
	usage: 'özel' 
}
