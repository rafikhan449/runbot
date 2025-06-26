const axios = require('axios');
const fs = require('fs');
const path = require('path');

module.exports.config = {
    name: "love3",
    version: "1.0.0",
    permission: 0,
    credit: "Anik"
};

module.exports.run = async ({ api, event, args }) => {
    try {
        const userId1 = event.senderID;
        const mentions = Object.keys(event.mentions);
        if (mentions.length === 0) {
            return api.sendMessage("দয়া করে কাউকে মেনশন করুন!", event.threadID);
        }

        const userId2 = mentions[0];

        try {
            const response = await axios.get(`${global.anikApi.edit}/love3?id1=${userId1}&id2=${userId2}`, {
                responseType: 'arraybuffer'
            });

            const filePath = path.resolve(__dirname, 'love.jpg');
            fs.writeFileSync(filePath, response.data);

            api.sendMessage(
                {
                    body: "এই রইলো তোমার ভালোবাসার ছবি ❤️",
                    attachment: fs.createReadStream(filePath)
                },
                event.threadID,
                () => {
                    fs.unlinkSync(filePath);
                }
            );
        } catch (error) {
            console.error("Image fetch error:", error);
            api.sendMessage("ছবিটি আনতে সমস্যা হয়েছে।", event.threadID);
        }
    } catch (error) {
        console.error(error);
        api.sendMessage("কিছু ভুল হয়েছে!", event.threadID);
    }
};