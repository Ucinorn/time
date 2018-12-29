import { store } from 'react-easy-state'
// set up a rudimentary global store
// this contains all the runtime data and handles saving and loading

const game = store({
	// start with a certain amount of gold
	startingGold: 50,
	gold: 10,

	// every action depletes your energy
	energy: 100,
	maxenergy: 100,

	// a variety of skills you can learn in the game
	// level these up to get better at specific things in game
	lockpicking: {
		base: 1,
		level: 1,
		multi: 1
	},
	piano: {
		base: 1,
		level: 1,
		multi: 1
	},

  //  mental stats that you can improve between loops
	wits: {
		base: 1,
		level: 1,
		multi: 1
	},
	intellgence: {
		base: 1,
		level: 1,
		multi: 1
	},
	wisdom: {
		base: 1,
		level: 1,
		multi: 1
	},

	// physical stats that determine your physical attibutes
	// reset between loops
	// only comes into play with later upgrades from the Demon that let you upgrade them between loops
	strength: {
		base: 1,
		level: 0,
		multi: 1
	},
	dexterity: {
		base: 1,
		level: 0,
		multi: 1
	},
	stamina: {
			base: 1,
			level: 0,
			multi: 1
	},

});

export default game;
