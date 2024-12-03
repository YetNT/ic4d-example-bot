const { InteractionBuilder } = require("ic4d");

const users = new InteractionBuilder()
    .setCustomId("users")
    .setType("selectMenu")
    .setOnlyAuthor(true)
    .setCallback((i) => {
        i.update(
            `You picked the following users: <@${i.values.join(">, <@")}>`
        );
    });

module.exports = users;
