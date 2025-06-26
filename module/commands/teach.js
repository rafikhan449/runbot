module.exports.config = {
  name: "teach",
  version: "1.0.0",
  permission: 0,
  credits: "Anik",
  prefix: true,
  description: "",
  category: "",
  cooldowns: 5
};

module.exports.run = ({ api, event, args }) => {
  const axios = require("axios");

  // args থেকে key=value স্ট্রিং বানানো
  const input = args.join(" ");
  if (!input.includes("=")) {
    return api.sendMessage("⚠️ Usage: 👇 \n /teach Message=Replay", event.threadID);
  }

  const [key, value] = input.split("=").map(str => str.trim());

  if (!key || !value) {
    return api.sendMessage("❌ Both key and value are required.", event.threadID);
  }

  const data = {
    key: key,
    response: value
  };

  axios.post(`${global.anikApi.talk}/teach`, data, {
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(response => {
    api.sendMessage(`✅ Server response:\n${JSON.stringify(response.data, null, 2)}`, event.threadID);
  })
  .catch(error => {
    api.sendMessage(`❌ Error: ${error.message}`, event.threadID);
  });
};
