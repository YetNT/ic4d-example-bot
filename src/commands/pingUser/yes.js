const { ButtonInteraction } = require("discord.js");
module.exports = {
    customId: "yes",
    /**
     *
     * @param {ButtonInteraction} i
     */
    callback: async (i) => {
        i.update({ content: "PING", components: [] });
    },
};
