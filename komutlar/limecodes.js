
const Discord = require('discord.js')
 
exports.run = async (client ,message, args) => {

message.reply("Örnek") 

};
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 0
};
 
exports.help = {
 name: 'limecodes',
 description: 'Botun Pingini Ölçer',
 usage: 'ping'
};
