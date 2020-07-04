import React from 'react';
import './board.scss';
import Card from './components/card.js'
import _map from 'lodash/map';
import { SUITS } from './utils/constants';

export class FantasyArenaBoard extends React.Component {
  onClick(id) {
    this.props.moves.clickCell(id);
  }

  onDraw() {
    this.props.moves.drawUpToHandSize();
  }

  getCardType(column) {
    switch (column) {
      case 0:
        return SUITS.CYCLOPS;
      case 1:
        return SUITS.DRAGON;
      case 2:
        return SUITS.HYDRA;
      case 3:
        return SUITS.RANGER;
      case 4:
        return SUITS.TITAN;
      case 5:
        return SUITS.TROLL;
      case 6:
        return SUITS.UNICORN;
      case 7:
        return SUITS.WARLOCK;
      default:
        return;
    }
  }

  render() {

    /**
     * This section is for displaying the columns of creature cards.
     * Columns will be removed as rounds progress.
     */
    let tbody = [];
    for (let row = 0; row < 5; row++) {
      let cells = [];
      for (let column = 0; column < 8; column++) {
        const id = 8 * row + column;
        cells.push(
          <td className={`card ${this.getCardType(column)}`} key={id} onClick={() => this.onClick(id)}>
            {this.props.G.cells[id]}
          </td>
        );
      }
      tbody.push(<tr key={row}>{cells}</tr>);
    }

    /**
     * This section is for displaying information about the player
     * and the current active player.
     */
    const id = this.props.playerID;
    const currentPlayer = this.props.ctx.currentPlayer;
    const playerTurnText = currentPlayer === id ? 'Your Turn' : `Player ${currentPlayer}'s Turn`

    /**
     * This section is for displaying the player's hand.
     */
    const hand = this.props.G.players[id].hand;
    const displayedHand = _map(hand, (card) => {
      return <Card suit={card.suit} rank={card.rank}/>
    });

    return (
      <div className='background'>
        <p>Player {id}</p>
        <p>{playerTurnText}</p>  
        <table id='board'>
          <tbody>{tbody}</tbody>
        </table>
        <button onClick={() => this.onDraw()}>Deck</button>
        <div className='hand'>{displayedHand}</div>
      </div>
    );
  }
}