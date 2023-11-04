const {
    Client,
    Interaction,
    ApplicationCommandOptionType,
    ButtonStyle,
    ButtonBuilder,
    ActionRowBuilder,
} = require("discord.js");

module.exports = {
    name: "ping-user",
    description: "Ping a user!",
    options: [
        {
            name: "user",
            description: "hello",
            type: ApplicationCommandOptionType.User,
            required: true,
        },
    ],
    /**
     *
     * @param {Client} client
     * @param {Interaction} interaction
     */
    callback: (client, interaction) => {
        const s = interaction.options.get("user").value;

        interaction.reply({
            content: "Are you sure? you know you'll ping them right?",
            components: [
                new ActionRowBuilder().addComponents(
                    new ButtonBuilder()
                        .setCustomId("cancel")
                        .setLabel("Cancel")
                        .setStyle(ButtonStyle.Danger),
                    new ButtonBuilder()
                        .setCustomId("yes")
                        .setLabel("Yes")
                        .setStyle(ButtonStyle.Primary)
                ),
            ],
        });
    },
};
