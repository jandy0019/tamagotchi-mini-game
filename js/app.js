console.log('tamagatchi mini game');



class Tom {
	constructors(name, age, hunger, sleepiness, boredom) {
		this.name = name
		this.age = age
		this.hunger = hunger
		this.sleepiness = sleepiness
		this.boredom = boredom
	}
}

const game = {
	name: '',
	age: 0,
	hunger: 0,
	sleepiness: 0,
	boredom: 0,
	time: 0,
	newGame() {
		const tom = new Tom(this.name, this.hunger, this.sleepiness, this.boredom, this.age)
		console.log(tom);
	},
	startTimer() {
		const interval = setInterval(() => {
   		this.time++
   		this.newGame()
   		this.showStats()
   		console.log(this.time);
   		if (this.time % 5 === 0){
	      		this.age++
	      	}
	   		if (this.time % 2 === 0) {
		      		this.hunger++
		      		this.deadTom()
		      	} 
		      	if (this.time % 2 === 0){
		      		this.boredom++
		      		this.deadTom()
		      		}
			      	if (this.time % 3 === 0){
			      		this.sleepiness++
			      		this.deadTom()
			      		}
    	}, 1000)
	},
	stopTimer() {
		clearInterval(this.time)
	},
	ageTom() {	
		// if (this.age >= 2)
	},
	feedTom() {
		if (this.hunger >= 1) 
			this.hunger--
			console.log(this.hunger);
			$('.tom').removeClass('.container')
			$('.tom').addClass('.container-eat')
			$('.container').addClass('.head-after')
		
	},
	sleepTom() {
		if (this.sleepiness >= 5) 
			this.sleepiness -= 5
			$('body').css('background', 'black')
			$( ".container" ).fadeOut( "slow", function() {
 		 });
		
	},
	entertainTom() {
		if (this.boredom >= 1) 
			this.boredom -= 1
			console.log();
			$('.tom').removeClass('.container')
			$('.tom').addClass('.container-play')
		
	},
	deadTom() {
		if (this.hunger == 10){
			$('footer').fadeOut( "slow", function() {
 		 	});
 		 	$('header').fadeOut( "slow", function() {
 		 	});
 		 	$('.statsdiv').fadeOut( "slow", function() {
 		 	});
 		 	$('main').fadeOut( "slow", function() {
 		 	});
	    	$('body').append('.dead').css({
				'margin': '0 auto',
				'font-size': '100px',
				'padding-top': '300px',
				'text-align': 'center',
				'background-color': 'black',
	  			'color': 'white'
			}).text(`R.I.P.`)
	    	this.stopGame()
	    } else if (this.boredom == 10) {
	    	$('footer').fadeOut( "slow", function() {
 		 	});
 		 	$('header').fadeOut( "slow", function() {
 		 	});
 		 	$('.statsdiv').fadeOut( "slow", function() {
 		 	});
 		 	$('main').fadeOut( "slow", function() {
 		 	});
	    	$('body').append('.dead').css({
				'margin': '0 auto',
				'font-size': '100px',
				'padding-top': '300px',
				'text-align': 'center',
				'background-color': 'black',
	  			'color': 'white'
			}).text(`R.I.P.`)
	    	this.stopGame()
	    } else if (this.sleepiness == 10) {
	    	$('footer').fadeOut( "slow", function() {
 		 	});
 		 	$('header').fadeOut( "slow", function() {
 		 	});
 		 	$('.statsdiv').fadeOut( "slow", function() {
 		 	});
 		 	$('main').fadeOut( "slow", function() {
 		 	});
	    	$('body').append('.dead').css({
				'margin': '0 auto',
				'font-size': '100px',
				'padding-top': '300px',
				'text-align': 'center',
				'background-color': 'black',
					'color': 'white'
			}).text(`R.I.P.`)
	    	this.stopGame()
	    }
	},
	showStats() {
		$('#age-check').text(this.age)
		$('#hunger-check').text(this.hunger)
		$('#sleepiness-check').text(this.sleepiness)
		$('#boredom-check').text(this.boredom)
	},
}

$('#set-name').on('click', () => {
  game.startTimer()
})

$('#feed').on('click', () => {
	game.feedTom()
})

$('#sleep').on('click', () => {
	game.sleepTom()
})

$('#play').on('click', () => {
	game.entertainTom()
})







game.startTimer()














