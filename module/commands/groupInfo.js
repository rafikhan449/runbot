module.exports.config = {
    name: "groupinfo",           
    description: "Group info including name, total members, member names, IDs, and gender.",
    permission: 0,          
    prefix: true,
    credit: "Anik",       
    cooldown: 5,
}

module.exports.run = async function({ api, event, client }) {
    try {

        const threadID = event.threadID;
        const threadInfo = await api.getThreadInfo(threadID);
        

        const groupName = threadInfo.name || "নাম নেই";
        const totalMembers = threadInfo.participantIDs.length;
        
        let msg = `গ্রুপ নাম: ${groupName}\n`;
        msg += `মোট সদস্য: ${totalMembers}\n\n`;


        const memberDetails = threadInfo.userInfo;
        

        let memberInfo = "";
        let count = 1; 
        memberDetails.forEach(member => {
            const name = member.name || "নাম নেই";
            const id = member.id;
            
            memberInfo += `সদস্য ${count}:\nনাম: ${name}\nআইডি: ${id}\n\n`;
            count++;
        });

        msg += memberInfo;
        api.sendMessage(msg, threadID);
        
    } catch (err) {
        console.log("Error: ", err);
    }
}