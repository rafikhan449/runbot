const fs = require('fs');

module.exports.config = {
    name: "uptime",           
    description: "uptime check",
    permission: 0,          
    prefix: true,         
    cooldown: 5
};

module.exports.run = async ({ api, event }) => {
    const time = process.uptime(),
        days = Math.floor(time / (60 * 60 * 24)), 
        hours = Math.floor((time % (60 * 60 * 24)) / (60 * 60)), 
        minutes = Math.floor((time % (60 * 60)) / 60), 
        seconds = Math.floor(time % 60); 

    const msg5 = {
        body: `➳𝘽𝙤𝙩 𝙞𝙨 𝙍𝙪𝙣𝙣𝙞𝙣𝙜⌚ ${days} দিন ${hours} ঘণ্টা ${minutes} মিনিট ${seconds} সেকেন্ড`,
        attachment: fs.createReadStream(__dirname + `/cache/uptime.jpg`)
    };
    
    api.sendMessage(msg5, event.threadID, event.messageID);
};
