import TelegramBot from 'node-telegram-bot-api';
import Validate from './validate.js'

const token = '5652352643:AAH_bvIlZZNiSbZVG5EWNwE0z7QSOSpqK84';
const bot = new TelegramBot(token, {polling: true});
let validate = new Validate();

bot.on('message', (msg) => {
    validate.valiteMsg(msg, bot);
})
