module.exports.config = {
    name: "sendmsg",
    description: "Send a message to all groups where the bot is present.",
    permission: 2, 
    prefix: true,
    cooldown: 10
};

module.exports.run = async ({ api, event, args }) => {
    try {
       
        const message = args.join(" ");
        if (!message) {
            return api.sendMessage("Please provide a message to send.", event.threadID, event.messageID);
        }

       
        const threadList = await api.getThreadList(100, null, ["INBOX"]);
        const groupThreads = threadList.filter(thread => thread.isGroup);

     
        for (const thread of groupThreads) {
        const msg = {
            body: `𝗠𝗲𝘀𝘀𝗮𝗴𝗲 𝗳𝗿𝗼𝗺 𝗔𝗱𝗺𝗶𝗻👇🏻 \n ${message}`
        }
        
        
            await api.sendMessage(msg, thread.threadID);
        }

        
        api.sendMessage(`Message sent to ${groupThreads.length} groups successfully!`, event.threadID, event.messageID);
    } catch (err) {
        console.error(err);
        api.sendMessage("Failed to send the message to all groups. Please try again later.", event.threadID, event.messageID);
    }
};
