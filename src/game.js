import { INVALID_MOVE, PlayerView } from 'boardgame.io/core';
import _forEach from 'lodash/forEach';
import { SUITS, SPECIALS, RANKS } from './utils/constants';

const createDeck = () => {
  const deck = [];
  _forEach(SUITS, (suit) => {
    _forEach(RANKS, (rank) => {
      deck.push({ suit, rank })
    })
  });

  // Each game includes 3 special referee cards
  deck.push({ suit: SPECIALS.REFEREE});
  deck.push({ suit: SPECIALS.REFEREE});
  deck.push({ suit: SPECIALS.HEAD});

  return deck;
}

export const FantasyArena = {
  setup: (ctx) => ({ 
    cells: Array(40).fill(null),
    players: {
      0: { hand: [] },
      1: { hand: [] },
      2: { hand: [] },
      3: { hand: [] },
      4: { hand: [] },
    },
    secret: {
      deck: ctx.random.Shuffle(createDeck())
    },
  }),

  turn: {
    moveLimit: 1,
  },

  playerView: PlayerView.STRIP_SECRETS,

  moves: {
    clickCell: (G, ctx, id) => {
      if (G.cells[id]) {
        return INVALID_MOVE;
      }
      G.cells[id] = ctx.currentPlayer;
    },

    placeBet: (G, ctx) => {

    },

    drawUpToHandSize: {
      move: (G, ctx) => {
        let currentPlayer = G.players[ctx.currentPlayer];
        if (currentPlayer && currentPlayer.hand && G.secret.deck) {
          const card = G.secret.deck.pop();
          currentPlayer.hand.push(card);
        }
      },
      client: false
    },
  }
};