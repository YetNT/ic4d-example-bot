const { ApplicationCommandType } = require("discord.js")

module.exports = {
	isCommand: false,
	name:"Get Image",
	type: ApplicationCommandType.User,
	callback: (i) => {
		const user = i.targetUser

		i.reply({
			ephemeral:true,
			content: user.displayAvatarURL()
		})
	}
}
