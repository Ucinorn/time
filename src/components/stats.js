import React, { Component } from 'react';
import store from '../store/store.js'

class Stats extends Component {
  render() {
    return (
      <div>{store.gold} / {store.startingGold}</div>
    );
  }
}

export default Stats;
