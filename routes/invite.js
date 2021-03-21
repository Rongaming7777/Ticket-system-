const { Router } = require('express');

module.exports.Router = class Routes extends Router {
    constructor() {
        super();

        this.get('/', function (req, res) {
            return res.redirect(`https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=-1`);
        });
    };
};

module.exports.page = '/invite';