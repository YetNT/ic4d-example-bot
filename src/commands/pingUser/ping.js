const {
    Interaction,
    ButtonStyle,
    ButtonBuilder,
    ActionRowBuilder,
    SlashCommandBuilder,
} = require("discord.js");
const { SlashCommandManager } = require("ic4d");

const pingUser = new SlashCommandManager({
    data: new SlashCommandBuilder()
        .setName("ping-user")
        .setDescription("Ping a user!")
        .addUserOption((option) =>
            option.setName("user").setDescription("hello").setRequired(true)
        ),

    async execute(interaction) {
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
});

module.exports = pingUser;
