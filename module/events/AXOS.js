const fs = require('fs');
module.exports.config = {
  name: "AXOS",
  prefix: false,
  permission: 0,
  eventType: ["event"],
  version: "1.0.0",
  credits: "Anik",
  description: "emoji reply voice"
};

module.exports.handleEvent = async ({ api, event }) => {
  const { body, threadID, messageID } = event;

  if (body) {
    if (body.toLowerCase() === 'anik') {
      const msg1 = {
        body: "~ আমি এখন ব্যস্ত আছি যা বলার আমার রোবটকে বলো..!!",
        attachment: fs.createReadStream(__dirname + `/noprefix/amiekonbg.mp3`)
      };
      api.sendMessage(msg1, threadID, messageID);
    } else if (body === '🤗' || body === '😌') {
      const msg2 = {
        body: "-হুম আমিও তোমাকে অনেক ভালোবাসি..!!",
        attachment: fs.createReadStream(__dirname + `/noprefix/amiotmkonk.mp3`)
      };
      api.sendMessage(msg2, threadID, messageID);
    } else if (body === '🖕' || body === '✌️') {
      const msg3 = {
        body: "~ আঙ্গুল দেখাও, আঙ্গুল তোমার হেডা দিয়ে ভরে দিম..!!🥀",
        attachment: fs.createReadStream(__dirname + `/noprefix/anguldekaw.mp3`)
      };
      api.sendMessage(msg3, threadID, messageID);
    } else if(body === '😏' || body === '🥴' || body === '😎' || body === '🥱') {
    var msg4 = {
				body: "~  তুমি Attitude দেখাছো, তাতে আমার বাল ছেরা গেলো..!! 😾🥀",
				attachment: fs.createReadStream(__dirname + `/noprefix/attitude.mp3`)
			}
			api.sendMessage(msg4, threadID, messageID);
        
    } else if(body === 'biya' || body === 'Biya' || body === 'বিয়া') {
    
    var msg5 = {
				body: "~ এই আমি এখন এসব, বিয়া সাধিতে নাই..!!🥀",
				attachment: fs.createReadStream(__dirname + `/noprefix/biya.mp3`)
			}
        api.sendMessage(msg5, threadID, messageID);
    } else if(body === '🤤' || body === '😋') {
    
    var msg6 = {
				body: "~ বাবু খাইছো.. 🥀",
				attachment: fs.createReadStream(__dirname + `/noprefix/babukaiso.mp3`)
			}
			api.sendMessage(msg6, threadID, messageID);
        
    }else if(body === '🐸') {
    
    var msg7 = {
				body: "~ ব্যাং কাকে দেখাও, আমি ব্যাং দেখে ভয় পাই নাহ🥰🥀",
				attachment: fs.createReadStream(__dirname + `/noprefix/beng.mp3`)
			}
			
			api.sendMessage(msg7, threadID, messageID);
        
    } else if(body === '👻' || body === '💀' || body === '☠️') {
    
    var msg8 = {
				body: "~ ওরে বাবা ভুত আসছে কই থেকে এই খান🙀..!!",
				attachment: fs.createReadStream(__dirname + `/noprefix/buth.mp3`)
			}
        api.sendMessage(msg8, threadID, messageID);
    } else if(body === '😽' || body === '😻') {
    
    var msg9 = {
				body: "~  আমার কিউটি বিল্লু ত্যাহ্..!🥀",
				attachment: fs.createReadStream(__dirname + `/noprefix/billitah.mp3`)
			}
        api.sendMessage(msg9, threadID, messageID);
    } else if(body === '🥰' || body === '😍') {
    var msg10 = {
				body: "~ ওমা তুমি কি আমার পর ক্রাশ খেয়েছো নাকি..!🥀",
				attachment: fs.createReadStream(__dirname + `/noprefix/crashkaisonigo.mp3`)
			}
			api.sendMessage(msg10, threadID, messageID);
        
    } 
  }
};