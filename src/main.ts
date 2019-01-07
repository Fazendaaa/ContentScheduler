import { config } from 'dotenv';
import { join } from 'path';
import Telegraf, { Composer } from 'telegraf';
import I18n from 'telegraf-i18n';

config();

const bot = new Telegraf(<string> process.env.BOT_KEY);
export const internationalization = new I18n({
    useSession: true,
    allowMissing: true,
    defaultLanguage: 'en',
    sessionName: 'session',
    directory: join(__dirname, '../others/locales')
});

bot.startPolling();

bot.use(Composer.log());

bot.catch(console.error);

bot.start(async ({ replyWithMarkdown, replyWithVideo }) => {
    await replyWithMarkdown('start');

    return replyWithVideo('https://raw.githubusercontent.com/Fazendaaa/AnilistBot/master/others/gif/intro.gif');
});

bot.help(async ({ replyWithMarkdown, replyWithVideo }) => {
    await replyWithMarkdown('help');

    return replyWithVideo('https://raw.githubusercontent.com/Fazendaaa/AnilistBot/master/others/gif/help.gif');
});
