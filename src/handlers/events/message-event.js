import Event from './event.js';

export default class extends Event {
    on = 'messageCreate';

    async invoke (msg) {
        if (msg.author.bot) return;
    
        await msg.reply('Hi')
    }
}