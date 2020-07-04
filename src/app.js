import { Client } from 'boardgame.io/react';
import { Local, SocketIO } from 'boardgame.io/multiplayer';
import { FantasyArena } from './game';
import { FantasyArenaBoard } from './board.js';
import React from 'react'

const FantasyArenaClient = Client({
  board: FantasyArenaBoard,
  game: FantasyArena,
  //multiplayer: Local(),
  //const hostname = window.location.hostname;
  multiplayer: SocketIO({ server: 'localhost:5614' }),
  numPlayers: 5,
  //debug: false
});

const App = () => (
  <div>
    <FantasyArenaClient playerID="0"/>
    <FantasyArenaClient playerID="1"/>
    <FantasyArenaClient playerID="2"/>
    <FantasyArenaClient playerID="3"/>
    <FantasyArenaClient playerID="4"/>
  </div>
);

export default App;