const { InteractionBuilder, SlashCommandManager } = require("ic4d");
const {
    ButtonBuilder,
    ActionRowBuilder,
    ButtonStyle,
    SlashCommandBuilder,
} = require("discord.js");

const button = new InteractionBuilder()
    .setCustomId("button")
    .setType("button")
    .setTimeout((interaction, client) => {
        interaction.update("Loser, the button timed out.");
    }, 1_000)
    .setCallback((i) => {
        i.update("Damn you did it! Now do it again (Bet you can't)");
    });

const onesec = new SlashCommandManager({
    data: new SlashCommandBuilder().setName("onesecond").setDescription("lol"),
    execute: (interaction, client) => {
        interaction.reply({
            content: "e",
            components: [
                new ActionRowBuilder().addComponents(
                    new ButtonBuilder()
                        .setCustomId("button")
                        .setLabel("click me!")
                        .setStyle(ButtonStyle.Success)
                ),
            ],
        });
    },
}).addInteractions(button);

module.exports = onesec;
