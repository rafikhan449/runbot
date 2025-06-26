const path = require('path');
const fs = require('fs');
const videoPath = path.join(__dirname, 'cache', 'wlc.mp4');

module.exports.config = {
    name: "welcome",
    prefix: false,
    eventType: ["event"],
    permission: 0,
};

module.exports.handleEvent = async ({ api, event }) => {
    const { logMessageType, logMessageData, threadID } = event;

    if (logMessageType === "log:subscribe") {
        const addedParticipants = logMessageData.addedParticipants;

        // মেসেজ তৈরির জন্য একাধিক সদস্যের নাম সংগ্রহ করা
        const names = [];
        const mentions = [];

        for (const member of addedParticipants) {
            if (member.userFbId === api.getCurrentUserID()) continue; // বট আইডি বাদ দিন

            mentions.push({ tag: member.fullName, id: member.userFbId });
            names.push(member.fullName);
        }

        if (names.length > 0) {
            const threadInfo = await api.getThreadInfo(threadID);
            const participantIDs = threadInfo.participantIDs;
            const threadName = threadInfo.threadName;

            const totalMembers = participantIDs.length;
            const msg = `আসসালামু আলাইকুম🌺 🥀༊🤗😻🤗 ${names.join(', ')} 😍.\n\n🌸༊🥀۞Wellcome-!!-🌻🥀 To ${threadName}\nYou are the ${totalMembers} member of this group🌻.\n\n𝄞❤️⋆⃝⑅⑅⃝•BOT OWNER♥🖤 Mohammad Anik ❤️😇Never Try To Spam Here🚫\n\n 『Mohammad Anik♥  』\n\n🥰 Follow Our Group Rules✅\n\n🤖 Hi I'm Anik-bot messenger, use ${global.config.PREFIX}help to see commands 🤖.`;

            api.sendMessage(
                {
                    body: msg,
                    mentions: mentions,
                    attachment: fs.createReadStream(videoPath)
                },
                threadID
            );
        }

        // চেক করা বটকে গ্রুপে যোগ করা হয়েছে কিনা
        if (addedParticipants.some(i => i.userFbId === api.getCurrentUserID())) {
            api.changeNickname(
                `[➥ ${global.config.PREFIX} ] ${global.config.BOTNAME}`,
                threadID,
                api.getCurrentUserID()
            );

            // ফাইল চেক করে পাঠানো
            if (fs.existsSync(videoPath)) {
                const msg = {
                    body: `আসসালামুআলাইকুম 💖
_________________________________
🤖 BOT CONNECTED!!! 
Adding in the group chat successfully!!!
😈 কিরে বাঁদর গুলা শয়তানি করার জন্য অ্যাড দিছস 😈
_________________________________

যেকোনো কমান্ড দেখতে ${global.config.PREFIX}help ব্যবহার করুন
উদাহরণ:
${global.config.PREFIX}mark (text)
${global.config.PREFIX}lexi (text)
${global.config.PREFIX}trump (text)
${global.config.PREFIX}info

_________________________________
যেকোনো অভিযোগ অথবা হেল্প এর জন্য আমার BOSS Anik কে নক করতে পারেন।
👉FB link: https://www.facebook.com/LostFragmentX
-`,
                    attachment: fs.createReadStream(videoPath),
                };

                api.sendMessage(msg, threadID);
            } else {
                api.sendMessage(
                    `⚠️ ভিডিও ফাইল পাওয়া যায়নি। দয়া করে নিশ্চিত করুন যে ফাইলটি ঠিকঠাকভাবে আপলোড করা আছে।`,
                    threadID
                );
            }
        }
    }
};