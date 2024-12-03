const {
    ApplicationCommandType,
    ContextMenuCommandBuilder,
} = require("discord.js");
const { ContextMenuBuilder } = require("ic4d");

const url = new ContextMenuBuilder({
    data: new ContextMenuCommandBuilder()
        .setName("Get Message URL")
        .setType(ApplicationCommandType.Message),
    execute: (i) => {
        const m = i.targetMessage;

        i.reply({
            ephemeral: true,
            content: `The message URL is: ${m.url}`,
        });
    },
});

module.exports = url;
