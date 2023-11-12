const { StringSelectMenuBuilder, UserSelectMenuBuilder, StringSelectMenuOptionBuilder, ActionRowBuilder } = require("discord.js")

module.exports = {
	name:"selectmenu",
	description:"this should prolly work",

	callback: async (client, interaction) => {
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
					.setValue("2"),
			)
		const p = new UserSelectMenuBuilder()
			.setCustomId('users')
			.setPlaceholder('select a dummy')
			.setMinValues(1)
			.setMaxValues(2)

		interaction.reply({
			content:"yo!",
			components: [
				new ActionRowBuilder().addComponents(select),
				new ActionRowBuilder().addComponents(p)
			]
		})
	}
}
