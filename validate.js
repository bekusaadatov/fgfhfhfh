export default class Validate {
    
    valiteMsg(msg, bot) {
        if(this.isStartCmd(msg)) console.log('isStartCmd');
        else if(this.isEduTypeCmd(msg)) console.log('isEduTypeCmd');
    }

    // here 1
    isStartCmd(msg) {
        let text = msg.text;

        if(text === '/start') {
            return true;
        }
        else {
            return false;
        }
    }

    isEduTypeCmd(msg) {
        let text = msg.text;

        if(text === 'Выбрать стандартное обучение') {
            return true;
        }
        else {
            return false;
        }
    }
}