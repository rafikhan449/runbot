module.exports.config = {
    name: "emoji",           
    description: "group emoji changer",
    permission: 0,          
    prefix: true,
    credit: "Anik",       
    cooldown: 5,
}



module.exports.run = async function({ api, event, args }) {

	var emoji = args.join(" ");
	
	if (!emoji) api.sendMessage("You have not typed any emoji. Please type any emoji.⚙️🔨", event.threadID, event.messageID);
	
	else api.changeThreadEmoji(emoji, event.threadID, () => api.sendMessage(`🔨 The bot successfully changed Emoji to: ${emoji}`, event.threadID, event.messageID));
}