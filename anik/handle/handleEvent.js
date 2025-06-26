const fs = require("fs");
const path = require("path");

module.exports = {
    loadEvents: () => {
        const events = new Map();
        const eventPath = path.join(__dirname, "../../module/events");

        fs.readdirSync(eventPath).forEach((file) => {
            if (file.endsWith(".js")) {
                try {
                    const eventHandler = require(path.join(eventPath, file));
                    if (
                        eventHandler.handleEvent &&
                        typeof eventHandler.handleEvent === "function" &&
                        eventHandler.config
                    ) {
                        events.set(eventHandler.config.name, eventHandler);
                        console.log(`Event handler loaded: ${eventHandler.config.name}`);
                    }
                } catch (error) {
                    console.error(`Error loading event file ${file}:`, error);
                }
            }
        });

        return events;
    },
};
