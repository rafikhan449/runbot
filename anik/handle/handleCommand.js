const fs = require("fs");
const path = require("path");

module.exports = {
    loadCommands: () => {
        const commands = new Map();
        const commandPath = path.join(__dirname, "../../module/commands");

        fs.readdirSync(commandPath).forEach((file) => {
            if (file.endsWith(".js")) {
                try {
                    const command = require(path.join(commandPath, file));
                    global.commandCon = command.config
                    
                    if (
                        (command.run || command.handleEvent) && // run বা handleEvent থাকতে হবে
                        command.config
                    ) {
                        commands.set(command.config.name.toLowerCase(), command);
                        console.log(`Command loaded: ${command.config.name}`);
                    }
                } catch (error) {
                    console.error(`Error loading command file ${file}:`, error);
                }
            }
        });

        return commands;
    },
};
