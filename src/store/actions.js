const actions = {
	searchChange: {
		name: "Search for Change",
		description: "Look in nearby pots, boxes, noocks and crannies for spare change",
		count: 0,
		maxCount: 150,
		chanceToSucceed: 0.1,
		level: 0,
		maxLevel: 10,
		mods: ['memory', 'speed']
	},
	collectChange: {
		name: "Gather Change",
		description: "Grab spare change from various locations you've found them before",
		count: 0,
		maxCount: 25,
		level: 0,
		maxLevel: 5,
		chanceToSucceed: 0.90,
		failures: ['You misremember the location of this cash.']
		mods: ['memory', 'speed']
	}
}
export default actions;
