const Discord = require('discord.js');

module.exports.run = (client, message) => {
var request = require('request');
request('https://www.doviz.com/api/v1/currencies/USD/latest', function (error, response, body) {
    if (error) return console.log('Hata:', error);
    else if (!error) { 
        var info = JSON.parse(body);
request('https://www.doviz.com/api/v1/currencies/EUR/latest', function (error, response, body) {
    if (error) return console.log('Hata:', error); 
    else if (!error) { 
        var euro = JSON.parse(body);
      message.channel.sendEmbed(new Discord.RichEmbed().setDescription(`Dolar satış: ${info.selling} TL \nDolar alış: ${info.buying} TL \n\nEuro satış: ${euro.selling} TL \nEuro alış: ${euro.buying} TL`).setFooter('doviz.com alt yapısı kullanılarak hazırlanmıştır.').setColor("RED"));    }
})
    }
})
    };
 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["döviz"],
  permLevel: "0",
  kategori: "eğlence"
};

exports.help = {
  name: 'döviz',
  description: 'döviz',
  usage: 'döviz'
};
