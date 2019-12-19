console.log('tamagatchi mini game');



class Tom {
	constructors(tommy) {
		this.name = ''
		this.age = age
		this.hunger = hunger
		this.sleepiness = sleepiness
		this.boredom = boredom
	}
}

const game = {
	name: '',
	hunger: 10,
	sleepiness: 10,
	boredom: 10,
	startGame() {
		const tom = new Tom()
		this.startTimer()
	},
	startTimer() {
		const interval = setInterval(() => {
      	
    	}, 3000)
	},
	stopTimer() {
		const interval = setInterval(() => {
      	
    	}, 1000)
	},
	hunger() {

	},
	sleepiness() {

	},
	boredom() {

	}
}

$('#set-name').on('click', () => {
  game.startGame()
})

