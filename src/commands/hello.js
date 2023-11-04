const {
    Client,
    Interaction,
    ApplicationCommandOptionType,
} = require("discord.js");

module.exports = {
    name: "hello",
    description: "Hello",
    options: [
        {
            name: "hello",
            description: "hello",
            type: ApplicationCommandOptionType.String,
            required: true,
        },
    ],
    /**
     *
     * @param {Client} client
     * @param {Interaction} interaction
     */
    callback: (client, interaction) => {
        const s = interaction.options.get("hello").value;
        interaction.reply("Hello " + s);
    },
};
