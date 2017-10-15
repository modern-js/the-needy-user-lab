const api = require('express')();

let reqestNum = 0;

api.get('/food', (req, res) => {
    if ( reqestNum > 9 ) {
        res.send({ error: 4 });

    } else {
        reqestNum += 1;
        res.send({ food: 1 });
    }
});

api.get('/drink', (req, res) => {
    if ( reqestNum > 9 ) {
        res.send({ error: 4 });

    } else {
        reqestNum += 1;
        res.send({ drink: 2 });
    }
});

api.get('/tv', (req, res) => {
    if ( reqestNum > 9 ) {
        res.send({ error: 4 });

    } else {
        reqestNum += 1;
        res.send({ tv: 3 });
    }
});

module.exports = api;
