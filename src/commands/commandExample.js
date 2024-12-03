const { SlashCommandBuilder } = require("discord.js");
const { SlashCommandManager } = require("ic4d");

const nsfw = new SlashCommandManager({
    data: new SlashCommandBuilder()
        .setName("very-bad")
        .setNSFW(true)
        .setDescription("this is not good cmd"),
    execute(interaction, client) {
        interaction.reply({
            content: "this is not good cmd",
        });
    },
});

module.exports = nsfw;
