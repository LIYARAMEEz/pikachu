/* Copyright (C) 2021 Rameez muthu
CODDED Rameez
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
Pikachu
*/

const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');

const Language = require('../language');
const Lang = Language.getString('system_stats');


if (Config.WORKTYPE == 'private') {

    Asena.addCommand({pattern: 'owner', fromMe: true, desc: 'shows the detail of bot owner'}, (async (message, match) => {

        if (message.jid === '15369524516-1612300121@g.us') {

            return;
        }

        if (Config.PLK == 'default') {
            await message.client.sendMessage(message.jid,'𝙻𝙸𝚈𝙰 Bot created by *𝚁𝙰𝙼𝙴𝙴𝚉 𝚂𝙴𝚁*' , MessageType.text);
        }
        else {
            await message.client.sendMessage(message.jid,Config.PLK + '\n\n---------------------', MessageType.text);
        }
    }));
}

else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({pattern: 'owner', fromMe: false, desc: 'shows the detail of bot owner'}, (async (message, match) => {

        if (message.jid === '54218542512-1612300121@g.us') {

            return;
        }

        if (Config.PLK == 'default') {
            await message.client.sendMessage(message.jid,'𝙻𝙸𝚈𝙰 Bot created by *𝚁𝙰𝙼𝙴𝙴𝚉 𝚂𝙴𝚁*' , MessageType.text);
        }
        else {
            await message.client.sendMessage(message.jid,Config.PLK + '\n\n--------------------', MessageType.text);
        }
    }));
}
