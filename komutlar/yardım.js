const Discord = require('discord.js');
const loglar = require('../loglar.json')

var prefix = ayarlar.prefix;

exports.run = async (client, message, params, args) => {

	const yardım = new  Discord.RichEmbed()
	.setColor()
	.setAuthor(`AslanTR`, client.user.avatarURL)
	.setThumbnail(client.user.avatarURL)
	.addField(`AlbayReiz`, `**a+eğlence** = Eğlence Komutları \n**g!yetkili** = Yetkili Komutları \n**g!moderasyon** = Moderasyon Komutları \n**g!sunucu** = Sunucu Komutları \n**g!bot** = Bot Komutları \n**g!kullanıcı** = Kullanıcı Komutları`)
    .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.avatarURL)

    return message.channel.sendEmbed(yardım);

};



exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['yardım', 'help'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Belirlenen miktarda mesajı siler.',
  usage: 'yardım '
};
