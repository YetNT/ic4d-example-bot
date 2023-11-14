const { ButtonInteraction } = require("discord.js");
module.exports = {
    customId: "yes",
    type:"button",
    /**
     *
     * @param {ButtonInteraction} i
     */
    callback: async (i) => {
        i.update({ content: "PING", components: [] });
    },
};
