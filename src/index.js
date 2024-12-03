require("dotenv").config();
const {
    CommandHandler,
    ReadyHandler,
    InteractionHandler,
    CoreHandler,
} = require("ic4d");
const {
    Client,
    IntentsBitField,
    EmbedBuilder /* ActionRowBuilder, ButtonBuilder, ButtonStyle,*/,
} = require("discord.js");
const path = require("path");

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMessages,
    ],
});

const core = new CoreHandler(client, path.join(__dirname, "..", "logs"));

const LoaderOptions = {
    loadedNoChanges: "NAME was loaded, but nothing changed.",
    loaded: "NAME was registered!",
    edited: "NAME has been edited.",
    deleted: "NAME has been deleted.",
    skipped: "NAME was skipped. (Command deleted or set to delete.)",
};

const interactions = new InteractionHandler(
    core,
    path.join(__dirname, "commands"),
    LoaderOptions
);
const handler = new CommandHandler(
    core,
    path.join(__dirname, "commands"),
    {
        devs: ["671549251024584725", "745271655072268318"],
    },
    LoaderOptions
);

const ready = new ReadyHandler(
    core,
    undefined,
    async () => {
        await handler.registerCommands();
        await interactions.registerContextMenus();
        interactions.start("this aint ur interaction dawg");
    },
    (client) => {
        console.log(`${client.user.tag} is online.`);
    }
);

(async () => {
    try {
        ready.execute();

        await handler.handleCommands(
            [
                // middleware example
                async (obj, interaction) => {
                    // print command name
                    console.log(obj.name);
                    // if "userId" triggered the command, stop execution and respond with epheremal
                    const userId = "jdfkjsfd"; // replace with real ID of course, or jusdt remove this, it's just an example.
                    if (interaction.id === userId) {
                        await interaction.reply({
                            ephemeral: true,
                            content: "u not allowed to use this command.",
                        });
                        return 1;
                    }
                    return 0;
                },
            ],
            [
                // postware example
                (obj, interaction) => {
                    console.log("interaction replied? " + interaction.replied);
                },
            ]
        );
    } catch (error) {
        console.log(error);
    }
})();

client.login(process.env.TOKEN);
