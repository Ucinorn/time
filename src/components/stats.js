import React, { Component } from 'react';
import { view, store } from 'react-easy-state'
import game from '../store/store.js';

import Stat from './stat.js'

class Stats extends Component {
  render() {
    return (
			<div>
				<Stat name="Intelligence" att={game.intelligence}	/>
				<Stat name="Wits" att={game.wits}	/>
				<hr/>
				<Stat name="Strength" att={game.strength}	/>
				<Stat name="Dexterity" att={game.dexterity}	/>
				<Stat name="Stamina" att={game.stamina}	/>
				<hr/>
				<Stat name="Lockpicking" att={game.lockpicking}	/>
				<Stat name="Piano" att={game.piano}	/>
				<Stat name="Bartering" att={game.bartering}	/>
			</div>
    );
  }
}

export default view(Stats)
