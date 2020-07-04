export const SUITS = Object.freeze({
  CYCLOPS: 'cyclops',
  DRAGON: 'dragon',
  HYDRA: 'hydra',
  RANGER: 'ranger',
  TITAN: 'titan',
  TROLL: 'troll',
  UNICORN: 'unicorn',
  WARLOCK: 'warlock',
  SPECTATOR: 'spectator',
});

export const SPECIALS = Object.freeze({
  HEAD: 'head',
  REFEREE: 'referee'
})

export const RANKS = Array(11).fill(0).map((_e, rank)=> rank);