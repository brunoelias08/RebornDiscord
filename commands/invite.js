const i18n = require("../util/i18n");

module.exports = {
    name: "invite",
    description: i18n.__("invite.description"),
    execute(message) {
        return message.member
            .send(
                `https://discord.com/oauth2/authorize?client_id=${message.client.user.id}&permissions=70282305&scope=bot
    `
            )
            .catch(console.error);
    }
};

module.exports = {
    name: "p1",
    description: i18n.__("invite.description"),
    execute(message) {
        return message.member
            .send(
                `!b live BR Nanahuon
    `
            )
            .catch(console.error);
    }
};

module.exports = {
    name: "p2",
    cooldown: 10,
    description: i18n.__("ping.description"),
    execute(message) {
        message.channel
            .send('!b live BR bea peladinha')
            .catch(console.error);
    }
};