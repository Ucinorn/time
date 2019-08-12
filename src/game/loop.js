
import store from '../store/store.js'

// define the core gameplay loop, ticks once every 100 milliseconds
// React is handling all our renderign so thats not included here... yet
const Loop = {

	interval: false,
	baseTickrate: 100,
	currentTick: 0,

	startLoop() {
		var self = this;
		self.stopLoop();
	  this.interval = setInterval(function() {
			self.currentTick++;
	    self.onTenthSecond();
			if (self.currentTick % 10 === 0){
				self.onSecond();
			}
			if (self.currentTick % 600 === 0){
				self.onMinute();
			}
			if (self.currentTick % 3000 === 0 || self.currentTick > 3000){
				self.onFiveMinute();
				self.currentTick = 0;
			}
	  }, self.baseTickrate);
	},

	stopLoop() {
		if (this.interval) {
			clearInterval(this.interval);
			this.interval = false;
		}
	},

	// anything that occurs on specific time interval happens here
	onTenthSecond(){
		// implies a gold loss rate of 10 per second
		if (store.gold > 0) {
			--store.gold;
		} else {
			this.resetTime();
		}

		// tick through any actions that are queued
		if (store.queue.length)
	},
	onSecond(){},
	onMinute(){},
	onFiveMinute(){},

	// perform all operations to reset the game state
	resetTime(){
		store.gold = store.startingGold;
		this.currentTick = 0;
	},

	// whenever you gain gold it adds to your current time total
	gainGold(amount) {
		if (typeof amount == "number") {
			store.gold += amount
		} else {
			store.gold ++
		}
	},

	queueAction(action) {
		// check the action exists
		if (! action in store.actions) { return	}
		let newaction = Object.assign({}, store.actions[a])
		store.queue.push(newaction)
	},

	tickAction() {
		if (store.queue.length == 0) {return}
		let a = store.queue[0]
		if (a) {

		}
	}

	completeAction(action, gold) {

	},


}

export default Loop;
