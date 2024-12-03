const { SlashCommandManager, InteractionBuilder } = require("ic4d");
const {
    SlashCommandBuilder,
    ButtonBuilder,
    ButtonStyle,
    EmbedBuilder,
    ActionRowBuilder,
} = require("discord.js");
const { Game, Plane, PlaneObject } = require("disgamekit");

// i'll dynamically make the buttons because i cant be bothered to write it out.
const Ids = ["Left", "Up", "Down", "Right"];
const buttons = Ids.map((id) => {
    return new ButtonBuilder()
        .setCustomId(id.toLowerCase())
        .setLabel(id)
        .setStyle(ButtonStyle.Success);
});
const interactions = Ids.map((id) => {
    return new InteractionBuilder()
        .setCustomId(id.toLowerCase())
        .setType("button")
        .setCallback(
            /**
             * some nice JSdoc
             * @param {{game: Game, plane: Plane,player: PlaneObject, apple: PlaneObject }} vars
             */
            async (i, c, vars) => {
                const player = vars.player;
                switch (i.customId) {
                    case "left":
                        player.x -= 1;
                        break;
                    case "up":
                        player.y += 1;
                        break;
                    case "down":
                        player.y -= 1;
                        break;
                    case "right":
                        player.x += 1;
                        break;
                }
                vars.plane.update(vars.apple, player);

                await i.update({
                    embeds: [
                        new EmbedBuilder().setDescription(vars.plane.return()),
                    ],
                    components: [
                        new ActionRowBuilder().addComponents(...buttons),
                    ],
                });
            }
        );
});

const newGame = new SlashCommandManager({
    data: new SlashCommandBuilder()
        .setName("new-game")
        .setDescription("Play a game"),
    async execute(interaction, client, addVars) {
        // await interaction.deferReply(); // we may be doing calculations, so to be safe lets defer the reply.

        const game = new Game("gameid");
        game.start();
        const plane = new Plane(game, 10, 10, ":black_large_square:");

        const player = new PlaneObject(plane, 0, 0, "player", ":snake:");
        const apple = new PlaneObject(plane, 3, 4, "apple", ":apple:", true);

        plane.update(player, apple);

        await interaction.reply({
            embeds: [new EmbedBuilder().setDescription(plane.return())],
            components: [new ActionRowBuilder().addComponents(...buttons)],
        });

        apple.on("collision", (obj) => {
            // collision with player, do something.
            interaction.editReply({
                embeds: [new EmbedBuilder().setDescription("u ate da apple.")],
                components: [],
            });
            game.end();
        });

        addVars({ game, plane, player, apple });
    },
}).addInteractions(...interactions);

module.exports = newGame;
