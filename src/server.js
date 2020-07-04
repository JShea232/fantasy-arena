const { Server } = require('boardgame.io/server');
const { FantasyArena } = require('./game');

const server = Server({ games: [FantasyArena] });

server.run(5614);