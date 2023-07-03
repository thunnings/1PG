import { Client, GatewayIntentBits } from 'discord.js';


const bot = new Client({ 
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages
    ]
});

bot.on('ready', () => console.log(bot.user.username + ' is online'));
bot.on('messageCreate', async (msg) => {
    if (msg.author.bot) return;

    await msg.reply('Hi');
});

bot.login('MTEyNDUzMzg3MjM0NDk3NzQyOA.GtY4Zi.4PpDHkj4v1Tk59p41OFEIuTBbT17rT2vSF-7P0');