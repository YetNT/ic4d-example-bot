const {
    ApplicationCommandType,
    ContextMenuCommandBuilder,
    ContextMenuCommandType,
} = require("discord.js");
const { ContextMenuBuilder } = require("ic4d");

const user = new ContextMenuBuilder({
    data: new ContextMenuCommandBuilder()
        .setName("Get User")
        .setType(ApplicationCommandType.User),
    execute: (i) => {
        const user = i.targetUser;

        i.reply({
            ephemeral: true,
            content: user.displayAvatarURL(),
        });
    },
});

module.exports = user;
