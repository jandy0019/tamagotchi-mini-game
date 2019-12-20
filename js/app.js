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
    timer: 0,
    lightsOn: false,
    lightTimer: 0,
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
            this.ageTom()
            if (this.time % 5 === 0) {
                this.age++
            }
            if (this.time % 2 === 0) {
                this.hunger++
                this.deadTom()
            }
            if (this.time % 2 === 0) {
                this.boredom++
                this.deadTom()
            }
            if (this.time % 3 === 0) {
                this.sleepiness++
                this.deadTom()
            }
            if (this.lightsOn === true) {
                this.lightTimer++
                if (this.lightTimer > 3) {
                    this.wakeTom()
                    this.lightTimer = 0
                }
            }
        }, 1000)
        this.timer = interval
    },
    stopTimer() {
        clearInterval(this.timer)
        console.log(this.timer);
        this.time = 0
    },
    nameTom() {
        const $name = $('#name-field').val()
        this.name = $('#name-field').val()
        $('#name').text($name)
        $('#form').hide()
        console.log($name);
        game.startTimer()
    },
    ageTom() {
        if (this.age === 1) {
            $('.iris').css({
                'background': 'purple'
            })
        } else if (this.age === 2) {
            $('.iris').css({
                'background': 'blue'
            })
        } else if (this.age === 3) {
            $('.iris').css({
                'background': 'yellow'
            })
        } else if (this.age === 4) {
            $('.iris').css({
                'background': 'pink'
            })
        }
        console.log('beepboop');
    },
    feedTom() {
        if (this.hunger >= 1)
            this.hunger--
        console.log(this.hunger);
        $('.head').css('animation', 'eat 2s', 'linear 0s', 'infinite')

    },
    sleepTom() {
        if (this.sleepiness >= 5)
            this.sleepiness -= 5
        $('.container').fadeOut("slow", function() {});
        $('.night').fadeIn("slow", function() {});
        this.lightsOn = true
    },
    wakeTom() {
        $('.night').fadeOut("slow", function() {});
        $('.night').hide()
        $('.container').fadeIn("slow", function() {});
    },
    entertainTom() {
        if (this.boredom >= 1)
            this.boredom -= 1
        console.log();
        $('.head').css('animation', 'play 2s', 'ease 0s', 'infinite')

    },
    deadTom() {
        if (this.hunger == 10 || this.boredom == 10 || this.sleepiness == 10) {
            $('footer').fadeOut("slow", function() {});
            $('header').fadeOut("slow", function() {});
            $('.statsdiv').fadeOut("slow", function() {});
            $('main').fadeOut("slow", function() {});
            $('body').append('.dead').css({
                'margin': '0 auto',
                'font-size': '100px',
                'padding-top': '300px',
                'text-align': 'center',
                'background-color': 'black',
                'color': 'white',
                'background-image': ''
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

$('.night').hide()

$('#set-name').on('click', (e) => {
    e.preventDefault()
    game.nameTom()
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


// game.startTimer()