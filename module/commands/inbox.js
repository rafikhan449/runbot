module.exports.config = {
    name: "inbox",           
    description: "admin information",
    permission: 0,          
    prefix: true,
    credit: "anik",
    cooldown: 5,
}

module.exports.run = async ({ api, event }) => {
  try {
    await api.sendMessage(`Hey I'm ${global.config.BOTNAME}`, event.senderID);
    await api.sendMessage('check your inbox! 📥', event.threadID, event.messageID)
  } catch (error) {
    console.error("Error in inbox command:", error);
    
  api.sendMessage('আপনার ইনবক্সে নক দেওয়া যাবে না আপনি /accept কমান্ড ইউজ করেন', event.threadID, event.messageID )
  }
};

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Promise Rejection:', reason);
  
});
