const { InteractionBuilder } = require("ic4d");

const pick = new InteractionBuilder()
    .setCustomId("pick")
    .setType("selectMenu")
    .setOnlyAuthor(true)
    .setCallback(async (i) => {
        const option = await i.values[0];

        switch (option) {
            case "1":
                i.update("ight");
                break;
            case "2":
                i.update("nah");
                break;
        }
    });
module.exports = pick;
// exported to command.js
// this doesnt need it's own file, but it's just for showcase purposes.
