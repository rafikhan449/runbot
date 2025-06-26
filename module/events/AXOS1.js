const fs = require('fs');
module.exports.config = {
  name: "AXOS1",
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
    if (body === '😘' || body === '💋') {
      const msg1 = {
        body: "~ লুচ্চা পোলা পান এখানে এসে চুমা চাপ্টি নাহ করে, পাঠ খেতে যাইয়া কর..😼🥀",
        attachment: fs.createReadStream(__dirname + `/noprefix/cummah.mp3`)
      };
      api.sendMessage(msg1, threadID, messageID);
    } else if (body === '😭' || body === '🥹' || body === '🥺') {
      const msg2 = {
        body: "কান্না করো কেনো সোনা",
        attachment: fs.createReadStream(__dirname + `/noprefix/kannakorokn.mp3`)
      };
      api.sendMessage(msg2, threadID, messageID);
    } else if (body.toLowerCase() === 'gd n8' || body.toLowerCase() === 'good night' || body === 'শুভ রাত্রি') {
      const msg3 = {
        body: "~ ঘুমাবা নাকি জান, আচ্ছা ঘুমিয়ে পরো, সকাল এ কথা হবে, শুভ রাত্রি..!!",
        attachment: fs.createReadStream(__dirname + `/noprefix/goodnight.mp3`)
      };
      api.sendMessage(msg3, threadID, messageID);
    } else if (body === 'oi' || body === 'Oi' || body === 'ওই' || body === 'Kui gela') {
      var msg4 = {
        body: "~ ডাকো কেনো গো, আমি আছি তো এখানে..!✋🥀",
        attachment: fs.createReadStream(__dirname + `/noprefix/dakoknogo.mp3`)
      };
      api.sendMessage(msg4, threadID, messageID);
    } else if (body === '18+' || body === 'video de' || body === '👅' || body === '🍆') {
      var msg6 = {
        body: "~ এই তুই ভালো হবি কবে 😾🔨..!",
        attachment: fs.createReadStream(__dirname + `/noprefix/hobikobe.mp3`)
      };
      api.sendMessage(msg6, threadID, messageID);
    } else if (body === 'খরগোশ' || body === '🐰' || body === '🐇') {
      var msg7 = {
        body: "এই খরগোশ গাজর খাবিনি তুই",
        attachment: fs.createReadStream(__dirname + `/noprefix/korgus.mp3`)
      };
      api.sendMessage(msg7, threadID, messageID);
    } else if (body === 'Ki koro' || body === 'Ki kro' || body === 'Bot ki koro' || body === 'কি করো') {
      var msg8 = {
        body: "~ এইতো তোমাদের সাথে আড্ডা দিচ্ছি, তোমরা কি করছো 🥰🥀",
        attachment: fs.createReadStream(__dirname + `/noprefix/kothabolsi.mp3`)
      };
      api.sendMessage(msg8, threadID, messageID);
    } else if (body === '🫣' || body === '🙈' || body === '🤭' || body === '🙊') {
      var msg9 = {
        body: "~ ওলে বাবু টাহ লজ্জা পাইছো, কি দেখে লজ্জা পাইলা গো..!!",
        attachment: fs.createReadStream(__dirname + `/noprefix/lojja.mp3`)
      };
      api.sendMessage(msg9, threadID, messageID);
    } else if (body.toLowerCase() === 'boke aso' || body === 'বোকে আসো') {
      var msg10 = {
        body: "~ আর পারমু নাহ যাও,  সর এখান থেকে..!!",
        attachment: fs.createReadStream(__dirname + `/noprefix/arparumna.mp3`)
      };
      api.sendMessage(msg10, threadID, messageID);
    }
  }
};