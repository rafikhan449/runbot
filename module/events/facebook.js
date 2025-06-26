module.exports.config = {
    name: "Facebook",
    prefix: false,
    eventType: ["event"],
    permission: 0,
    credit: "Anik"
};

module.exports.handleEvent = ({ api, event }) => {
    if (event.body) {
        if (event.body.startsWith("https://www.facebook.com/")) {
            api.sendMessage(
                " ফেসবুক ভিডিও ডাউনলোড করে দিচ্ছি, একটু অপেক্ষা করুন।",
                event.threadID,
                event.messageID
            );

            const axios = require("axios");
            const path = require("path");
            const fs = require("fs");
            const writer = fs.createWriteStream(path.join(__dirname, "cache/video.mp4"));

            const startTime = Date.now(); 

            const down = async (url) => {
                try {
                    const res = await axios.get(url);
                    if (!res.data || !res.data.media || !res.data.media.hd) {
                        console.log("ভিডিও URL পাওয়া যায়নি।");
                        api.sendMessage("দুঃখিত, ভিডিও ডাউনলোড করা সম্ভব হয়নি।", event.threadID, event.messageID);
                        return;
                    }

                    const videoUrl = res.data.media.hd;

                    const videoStream = await axios.get(videoUrl, { responseType: "stream" });

                    videoStream.data.pipe(writer);

                    writer.on("finish", () => {
                        const videoPath = path.join(__dirname, "cache/video.mp4");
                        const elapsedTime = Math.round((Date.now() - startTime) / 1000); 

                        const msg = {
                            body: ` ফেসবুক ভিডিও ডাউনলোড সম্পন্ন ✅\n \n ডাউনলোড করতে সময় লেগেছে: ${elapsedTime} সেকেন্ড। \n ভিডিও টাইটেল: ${res.data.media.title}\n`,
                            attachment: fs.createReadStream(videoPath),
                        };

                        api.sendMessage(msg, event.threadID, () => {
                            fs.unlinkSync(videoPath);
                            console.log("ভিডিও সফলভাবে পাঠানো হয়েছে এবং ফাইল ডিলিট করা হয়েছে।");
                        });
                    });
                } catch (error) {
                    console.log("ভিডিও ডাউনলোড করার সময় ত্রুটি:", error.message);
                    api.sendMessage("দুঃখিত, ভিডিও ডাউনলোড করা সম্ভব হয়নি।", event.threadID, event.messageID);
                }
            };

            down(`${global.anikApi.mediadown}/facebook?link=${event.body}`);
        }
    }
};






