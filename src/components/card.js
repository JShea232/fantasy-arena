import React from 'react';
import classNames from 'classnames';
import './card.scss';

export default class Card extends React.Component {
  state = {
    suit: this.props.suit,
    rank: this.props.rank
  };

  render() {
    return (
      <div className={classNames('card', this.state.suit)}>
        {this.state.rank}
      </div>
    )
  }
};