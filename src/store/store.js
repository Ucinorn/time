import { store } from 'react-easy-state'
import actions from "./actions"
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
		name: "Lockpicking",
		base: 0,
		level: 0,
		multi: 1
	},
	piano: {
		name: "Piano",
		base: 0,
		level: 0,
		multi: 1
	},
	bartering: {
		name: "Bartering",
		base: 0,
		level: 0,
		multi: 1
	},
	acrobatics: {
		name: "Acrobatics",
		base: 0,
		level: 0,
		multi: 1
	},

  //  mental stats that you can improve between loops
	wits: {
		name: "Wits",
		description: "How fast you can think and respond",
		base: 1,
		level: 1,
		multi: 1
	},
	intellgence: {
		name: "Intelligence",
		description: "Your capacity to understand complex concepts and for logical thinking.",
		base: 1,
		level: 1,
		multi: 1
	},

	// physical stats that determine your physical attibutes
	// reset between loops
	// only comes into play with later upgrades from the Demon that let you upgrade them between loops
	strength: {
		name: "Strength",
		base: 1,
		level: 0,
		multi: 1
	},
	dexterity: {
		name: "Dexterity",
		base: 1,
		level: 0,
		multi: 1
	},
	stamina: {
		name: "Stamina",
			base: 1,
			level: 0,
			multi: 1
	},

	// global store for actions
	

	// set up the action queue for access from throughout the app
	queue: [],
	// a list of actions that can be
	actions,

});

export default game;
