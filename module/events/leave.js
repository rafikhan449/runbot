const path = require('path');
const fs = require('fs');
const photo = path.join(__dirname, 'cache', 'kick.gif');

module.exports.config = {
  name: "leave",
  prefix: false,
  permission: 0,
  eventType: ["event"],
  version: "1.0.0",
  credits: "Anik",
  description: ""
};

module.exports.handleEvent = ({ api, event }) => {
  if (!event.logMessageData || !event.logMessageData.leftParticipantFbId) {
    return;
  }

  const leftParticipantFbId = event.logMessageData.leftParticipantFbId;
  const name = event.logMessageBody.slice(0, -15);
  const type = (event.author === leftParticipantFbId) ? "self-separation" : "being kicked by the administrator";

  // Bot kick detection
  if (leftParticipantFbId === api.getCurrentUserID()) {
    console.warn("Bot was removed from the group!");
    return; // Prevent further action
  }

  if (type === "self-separation") {
    api.addUserToGroup(leftParticipantFbId, event.threadID, (error, info) => {
      if (error) {
        api.sendMessage(
          `এড দিতে পারি না কেন ${name}, হালায় আমার সাথে দুই নাম্বারি করলো ব্লক মারে 😒🫤`,
          event.threadID
        );
      } else {
        const reAddMsg = `${name} বেপি তোমাকে ছাড়া আমার ভালো লাগে না তাই আবার এড দিলাম 😁🫣`;
        api.sendMessage(reAddMsg, event.threadID);
      }
    });
  } else {
    const msg = {
      body: `${name} তোর গ্রুপে থাকার কোন যোগ্য নাই তাই তোকে কিক মারা হলো 😹😹`,
      attachment: fs.existsSync(photo) ? fs.createReadStream(photo) : null // Check if the file exists
    };

    api.sendMessage(msg, event.threadID);
  }
};
