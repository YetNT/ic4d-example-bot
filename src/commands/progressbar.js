// This uses the object directly instead of builders, not recommended but it works.

const {
    Client,
    ApplicationCommandOptionType,
    CommandInteraction,
} = require("discord.js");

const { ProgressBar } = require("@yetnt/progressbar");

module.exports = {
    name: "progressbar",
    description: "progress bar",
    options: [
        {
            name: "percentage",
            description: "percentage of the bar filled",
            type: ApplicationCommandOptionType.Integer,
            required: true,
            max_value: 100,
        },
        {
            name: "width",
            description: "width of the bar",
            type: ApplicationCommandOptionType.Integer,
            required: true,
        },
        {
            name: "split",
            description: "split char",
            type: ApplicationCommandOptionType.Boolean,
            required: false,
        },
    ],

    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     */
    callback: async (client, interaction) => {
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
};
