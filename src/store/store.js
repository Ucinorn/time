import { store } from 'react-easy-state'
// set up a rudimentary global store
// this contains all the runtime data and handles saving and loading

const game = store({
	// start with a certain amount of gold
	startingGold: 50,
	gold: 10,

	// an array of stats that determine what you can do
});

export default game;
