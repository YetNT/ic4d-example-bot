const { ApplicationCommandType } = require("discord.js")

module.exports = {
	name:"Message URL",
	type: ApplicationCommandType.Message,
	isCommand: false,

	callback: (i) => {
		const m = i.targetMessage

		i.reply(m.url)
	}
}
