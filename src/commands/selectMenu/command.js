const {
    StringSelectMenuBuilder,
    UserSelectMenuBuilder,
    StringSelectMenuOptionBuilder,
    ActionRowBuilder,
    SlashCommandBuilder,
} = require("discord.js");
const { SlashCommandManager } = require("ic4d");
const pick = require("./pick");
const users = require("./user");

const selectmenu = new SlashCommandManager({
    data: new SlashCommandBuilder()
        .setName("selectmenu")
        .setDescription("this should prolly work"),
    async execute(client, interaction) {
        const select = new StringSelectMenuBuilder()
            .setCustomId("pick")
            .setPlaceholder("Pick something.")
            .addOptions(
                new StringSelectMenuOptionBuilder()
                    .setLabel("Option 1 that looks cool bro")
                    .setDescription("This option looks fye")
                    .setValue("1"),
                new StringSelectMenuOptionBuilder()
                    .setLabel("Option 2 that looks cooler")
                    .setDescription("This option looks even more fye")
                    .setValue("2")
            );
        const p = new UserSelectMenuBuilder()
            .setCustomId("users")
            .setPlaceholder("select a dummy")
            .setMinValues(1)
            .setMaxValues(2);

        interaction.reply({
            content: "yo!",
            components: [
                new ActionRowBuilder().addComponents(select),
                new ActionRowBuilder().addComponents(p),
            ],
        });
    },
}).addInteractions(pick, users);

module.exports = selectmenu;
