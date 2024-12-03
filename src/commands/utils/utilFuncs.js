// Exmaple file if you have utility functions in your commands folder

module.exports = {
    // make sure to export this property so the CommandHandler doesn't mistake this for a command
    isCommand: false,
    func(i) {
        return i;
    },
};
