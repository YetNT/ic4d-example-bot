const { SlashCommandBuilder } = require("discord.js");
const { SlashCommandManager } = require("ic4d");

const hello = new SlashCommandManager({
    data: new SlashCommandBuilder()
        .setName("hello")
        .setDescription("Hello")
        .addStringOption((option) =>
            option.setName("hello").setDescription("Hello").setRequired(true)
        ),
    execute(client, interaction) {
        const s = interaction.options.get("hello").value;
        interaction.reply("Hello " + s);
    },
});

module.exports = hello;
