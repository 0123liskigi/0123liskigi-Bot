var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + 0123liskigi FNF And Robloxヅ#2058
 + ')');
});
bot.on('message', function (user, 0123liskigi FNF And Robloxヅ#2058
, https://discord.com/channels/835445508456579112/835445508456579114, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            // !ping
            case 'ping':
                bot.sendMessage({
                    to: https://discord.com/channels/835445508456579112/835445508456579114,
                    message: 'Pong!'
                });
            break;
            // Just add any case commands if you want to..
         }
     }
});
