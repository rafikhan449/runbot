module.exports.config = {
  name: "rainbow",
  prefix: true,
  version: "1.0.0",
  permission: 0,
  credits: "Anik",
  description: "Change the thread color continuously like a rainbow",
  category: "System",
  usages: "rainbow",
  cooldowns: 0,
  dependencies: []
};

module.exports.run = async ({ api, event }) => {
  const threadID = event.threadID;
  const colors = [
    '196241301102133', // Vivid Blue
    '169463077092846', // Cyan
    '2442142322678320', // Green
    '234137870477637', // Yellow
    '980963458735625', // Orange
    '175615189761153', // Red
    '2136751179887052', // Purple
    '2058653964378557', // Pink
    '2129984390566328', // Turquoise
    '174636906462322', // Teal
    '1928399724138152', // Indigo
    '417639218648241', // Violet
    '930060997172551', // Magenta
    '164535220883264', // Light Blue
    '370940413392601', // Lime
    '205488546921017', // Salmon
    '809305022860427'  // Rose
  ];

  let index = 0;

  const interval = setInterval(() => {
    const color = colors[index];
    api.changeThreadColor(color, threadID, (err) => {
      if (err) {
        console.log("Error changing color:", err);
        clearInterval(interval); 
      }
    });

    index = (index + 1) % colors.length; 
  }, 1000);

  setTimeout(() => {
    clearInterval(interval);
    console.log("রেইনবো মোড বন্ধ করা হলো ✅");
  }, 30000); 
};