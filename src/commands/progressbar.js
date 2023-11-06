const {
    Client,
    Interaction,
    ApplicationCommandOptionType,
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
     * @param {Interaction} interaction
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
