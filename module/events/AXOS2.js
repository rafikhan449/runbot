const fs = require('fs');
module.exports.config = {
  name: "AXOS2",
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
    if (body.toLowerCase() === 'valobasha' || body.toLowerCase() === 'love' || body === 'ভালোবাসা' || body === '🌹' || body === '🥀' || body === '💐') {
      const msg1 = {
				body: "~  ভালোবাসা অবিরাম কলিজা..!!🥰🥀",
				attachment: fs.createReadStream(__dirname + `/noprefix/valobashaoviram.mp3`)
			};
      api.sendMessage(msg1, threadID, messageID);
    } else if (body === '😂' || body === '🤣' || body === '😹') {
      const msg2 = {
				body: "~ পাগল নাকি এভাবে হাসে কেউ..!!",
				attachment: fs.createReadStream(__dirname + `/noprefix/pagolnaki.mp3`)
			}
      api.sendMessage(msg2, threadID, messageID);
    } else if (body === '🥵' || body === '😛' || body === '🤧') {
      const msg3 = {
				body: "~ জান পম পম খাবা..!!",
				attachment: fs.createReadStream(__dirname + `/noprefix/pompomkaba.mp3`)
			};
      api.sendMessage(msg3, threadID, messageID);
    } else if (body === '🤸' || body === '🤸‍♂️' || body === '🤸‍♀️' || body === '💃' || body === '🕺') {
      var msg4 = {
				body: " ~ ওই সাবধানে উলটে পরে যাবা তো..!!",
				attachment: fs.createReadStream(__dirname + `/noprefix/sabdan.mp3`)
			};
      api.sendMessage(msg4, threadID, messageID);
    } else if (body === '👨‍👩‍👧' || body === '👪' || body === '👫') {
      var msg5 = {
				body:"💠 দোয়া করি তোমরা, সুখি হও..!!",
				attachment: fs.createReadStream(__dirname + `/noprefix/sukihowtmra.mp3`)
			}
      api.sendMessage(msg5, threadID, messageID);
    } else if (body.toLowerCase() === '🙄') {
      var msg6 = {
				body: "ও্ঁই্ঁ বে্ঁটা্ উ্ঁপ্ঁরে্ঁ কি্ঁ দে্ঁখ্ঁস্ঁ আ্ঁমি্ঁ এ্ঁই্ঁ দি্ঁকে্ঁ 😚🌺",
				attachment: fs.createReadStream(__dirname + `/noprefix/upray.mp3`)
			};
      api.sendMessage(msg6, threadID, messageID);
    } 
  }
};