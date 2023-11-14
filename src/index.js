require("dotenv").config();
const { CommandHandler, ReadyHandler, InteractionHandler } = require("ic4d");
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

const LoaderOptions =  {
	loadedNoChanges: "NAME was loaded, but nothing changed.",
	loaded: "NAME was registered!",
	edited: "NAME has been edited.",
	deleted: "NAME has been deleted.",
	skipped: "NAME was skipped. (Command deleted or set to delete.)",
}

const interactions = new InteractionHandler(
    client,
    path.join(__dirname, "commands"),
    LoaderOptions,
    true
);
const handler = new CommandHandler(
    client,
    path.join(__dirname, "commands"),
    {
        devs: ["671549251024584725", "745271655072268318"],
    },
    LoaderOptions
);

const ready = new ReadyHandler(
    client,
    async () => {
        await handler.registerCommands();
	await interactions.registerContextMenus();
        interactions.start();
    },
    (client) => {
        console.log(`${client.user.tag} is online.`);
    }
);

(async () => {
    try {
        ready.execute();
        await handler.handleCommands();
    } catch (error) {
        console.log(error);
    }
})();

client.login(process.env.TOKEN);
