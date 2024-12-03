const { SlashCommandBuilder } = require("discord.js");

const { ProgressBar } = require("@yetnt/progressbar");
const { SlashCommandManager } = require("ic4d");

const progressbar = new SlashCommandManager({
    data: new SlashCommandBuilder()
        .setName("progressbar")
        .setDescription("progress bar")
        .addIntegerOption((option) =>
            option
                .setName("percentage")
                .setDescription("percentage of the bar filled")
                .setRequired(true)
                .setMaxValue(100)
        )
        .addIntegerOption((option) =>
            option
                .setName("width")
                .setDescription("width of the bar")
                .setRequired(true)
        )
        .addBooleanOption((option) =>
            option
                .setName("split")
                .setDescription("split char")
                .setRequired(false)
        ),
    execute: async (interaction, client) => {
        let p = interaction.options.get("percentage").value;
        let w = interaction.options.get("width").value;
        let split = interaction.options.get("split")?.value;
        let progressBar = new ProgressBar(p, w, "▢", "▧");

        if (split == true) {
            progressBar.charSplit("▶");
        }

        interaction.reply({
            content: progressBar.bar,
            ephemeral: true,
        });
    },
});

module.exports = progressbar;
