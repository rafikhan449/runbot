module.exports.config = {
    name: "autoreact",
    version: "1.0.0",
    permission: 0,
    eventType: ["event"],
    credits: "Muhammad Anik",
    description: "Automatically reacts to all incoming messages.",
    prefix: false, // No prefix required
    category: "automation",
    usages: "[auto react]",
    cooldowns: 0
};

module.exports.handleEvent = async ({ api, event }) => {
if(event.body || event.attachments) {

const emoji = [
  "🍎", "🍌", "🍇", "🍓", "🍍", "🍑", "🍒", "🥭", "🍋", "🍈", "🍉", "🍐", "🥝",
  "🍔", "🍟", "🍕", "🌮", "🌭", "🍿", "🍩", "🍪", "🎂", "🍫", "🍬", "🍭",
  "☕", "🧃", "🍵", "🍾", "🥤", "🍺", "🍷", "🍹", "🍽", "🧁", "🥧", "🍖", "🍗",
  "🥪", "🌽", "🥕", "🍠", "🍛", "🍜", "🍝", "🥗", "🍤", "🥟", "🍣", "🍚",
  "🐶", "🐱", "🐭", "🐹", "🐰", "🦊", "🐻", "🐼", "🐨", "🐯", "🦁", "🐮", "🐷",
  "🐸", "🐵", "🐦", "🐤", "🐺", "🦆", "🦅", "🦉", "🐴", "🦄", "🐝", "🐞", "🦋",
  "🐢", "🐍", "🦎", "🐙", "🐡", "🐬", "🐳", "🐋", "🦈", "🐊", "🐆", "🐅", "🐃",
  "🐂", "🐄", "🐪", "🐫", "🐘", "🦏", "🦛", "🐁", "🐀", "🐇", "🐿", "🦨", "🦦"
];



const randomNumber = Math.floor(Math.random() * emoji.length);




api.setMessageReaction(emoji[randomNumber], event.messageID, (err) => {}, true);
    
}
    
    



};
