import { config } from 'dotenv';
config({ path: '.env' });

import { Client, GatewayIntentBits } from 'discord.js';
import { EventHandler } from './handlers/event-handler.js';


export const bot = new Client({ 
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages
    ]
});

new EventHandler().init();

bot.login(process.env.BOT_TOKEN);