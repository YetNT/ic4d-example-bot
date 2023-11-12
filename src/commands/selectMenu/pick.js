module.exports = {
	customId:"pick",
	type:"selectMenu",
	authorOnly: true,
	callback: async (i) => {
		const option = await i.values[0]

		switch (option) {
			case "1":
				i.update("ight")
				break;
			case "2":
				i.update("nah")
				break;
		}
	}
}
