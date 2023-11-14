const {SlashCommandObject, CommandInteractionObject} = require("ic4d")
const {ButtonBuilder, ActionRowBuilder, ButtonStyle} = require("discord.js")

const button = new CommandInteractionObject({
        customId:"button",
        type:"button",
        callback: (i) => {i.update("Damn you did it! Now do it again (Bet you can't)")},
        timeout: 1_000,
	timeoutMsg: "Loser, the button timed out."
})

const onesec = new SlashCommandObject({
	name:"onesecond",
        description:"lol",
        callback: (c, i) => {
                i.reply({
                        content: "e",
                        components: [
                                new ActionRowBuilder()
                                        .addComponents(
                                                new ButtonBuilder()
                                                       .setCustomId("button")
                                                       .setLabel("click me!")
                                                       .setStyle(ButtonStyle.Success)
                                        )
                        ]
                })
        }
}, button)

module.exports = onesec
