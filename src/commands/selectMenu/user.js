module.exports = {
	customId:"users",
	type:"selectMenu",
	authorOnly: true,

	callback: async (i) => {
		i.update(`You picked the following users: <@${i.values.join(">, <@")}>`)
	}
}
