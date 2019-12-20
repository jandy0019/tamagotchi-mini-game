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
		if (this.age = 1) {
			$('.container').css({
				'width': '400px',
				'height': '400px'
			})
			$('.head').css({
				'width': '400px',
				'height': '400px',
				'background': 'purple'
			})
		}
	},
	feedTom() {
		if (this.hunger >= 1) 
			this.hunger--
			console.log(this.hunger);
			$('.tom').removeClass('.container')
			$('.tom').addClass('.container-eat')
			$('.container').addClass('.head-after')
			$('.container').addClass('.mouth-after')
		
	},
	sleepTom() {
		if (this.sleepiness >= 5) 
			this.sleepiness -= 5
			$('.container').fadeOut( "slow", function() {
 		 	});
 		 	$('body').fadeOut( "slow", function() {
 		 	});
 		 		$('body').css('background-image', "")
				$('body').append($('.stars'))
				$('body').append($('.twinkling'))
				$('body').append($('.clouds'))
 		 	$('body').fadeIn( "slow", function() {
 		 	});
			console.log($('.clouds'));
			console.log();
	},
	entertainTom() {
		if (this.boredom >= 1) 
			this.boredom -= 1
			console.log();
			// $('.tom').removeClass('.container')
			// $('.tom').addClass('.container-play')
			$('.head').css('animation', 'play 2s', 'ease 0s', 'infinite')
		
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
	    	this.stopTimer()
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
	    	this.stopTimer()
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
	    	this.stopTimer()
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














