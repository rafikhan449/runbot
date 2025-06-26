module.exports.config = {
    name: "allgroup",           
    description: "all group information",
    permission: 0,          
    prefix: true,
    credit: "Anik",       
    cooldown: 5,
}

module.exports.run = async function({ api, event, client }) {
    try {
       
        var inbox = await api.getThreadList(100, null, ['INBOX']);
        let list = [...inbox].filter(group => group.isSubscribed && group.isGroup);

        var listthread = [];

        for (var groupInfo of list) {
            let data = await api.getThreadInfo(groupInfo.threadID);

            listthread.push({
                id: groupInfo.threadID, 
                name: data.name || "নাম নেই", 
                sotv: data.userInfo.length, 
            });
        }

        var listbox = listthread.sort((a, b) => {
            if (a.sotv > b.sotv) return -1;
            if (a.sotv < b.sotv) return 1;
            return 0;
        });

        let msg = '';
        let i = 1;
        var groupid = [];

        for (var group of listbox) {
            msg += `${i++}. ${group.name}\ngroup id : ${group.id}\nmembers : ${group.sotv}\n\n`;
            groupid.push(group.id);
        }

        api.sendMessage(msg, event.threadID);
        
    } catch (err) {
        console.log("Error: ", err);
    }
}