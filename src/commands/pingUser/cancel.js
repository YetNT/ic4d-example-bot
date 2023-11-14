module.exports = {
    customId: "cancel",
    callback: (i) => {
        i.update({ content: "ok", components: [] });
    },
    type:"button"
};
