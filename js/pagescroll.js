class PageScroll {
    constructor(selector, opts) {
        this.$root = document.querySelector(selector)
        this.$sections = this.$root.querySelectorAll('.section')
        this.opts = opts
        this.$up = null
        this.$down = null
        this.level = 0
        this.bound = this.$sections.length
        this.isAnimating = false
        this.#setup()
    }
    #renderNav() {
        let arrows =
            `<svg id='control-up' width="40" height="35" viewBox="0 0 40 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.4019 1.5C18.5566 -0.5 21.4434 -0.5 22.5981 1.5L39.0526 30C40.2073 32 38.7639 34.5 36.4545 34.5H3.54552C1.23612 34.5 -0.207259 32 0.947441 30L17.4019 1.5Z" fill="${this.opts.controlColor || 'white'}"/>
        </svg>
        <svg id='control-down' width="40" height="35" viewBox="0 0 40 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.4019 1.5C18.5566 -0.5 21.4434 -0.5 22.5981 1.5L39.0526 30C40.2073 32 38.7639 34.5 36.4545 34.5H3.54552C1.23612 34.5 -0.207259 32 0.947441 30L17.4019 1.5Z" fill="${this.opts.controlColor || 'white'}"/>
        </svg>
        `
        let container = document.createElement("div")
        container.id = container.classList = 'controllers'
        container.innerHTML = arrows
        this.$root.appendChild(container)
    }
    #setActive(index) {
        this.opts.nav[index].classList.add('active-link')
        for (let j = 0; j < this.opts.nav.length; j++) {
            if (index != j) {
                this.opts.nav[j].classList.remove('active-link')
            }
        }
    }
    #setup() {
        this.#renderNav()
        this.$up = document.querySelector('.control-up')
        this.$down = document.querySelector('#control-down1')
        this.$down2 = document.querySelector('#control-down2')
        this.$down3 = document.querySelector('#control-down3')
        this.$down4 = document.querySelector('#control-down4')
        this.$sections.forEach(elem => elem.style.transition = `transform ${+this.opts.animDuration / 1000 + 's' || '0.3s'}`)
        this.$sections.forEach(elem => elem.style.transitionTimingFunction = this.opts.easing ? this.opts.easing : 'linear')
        this.moveup = this.moveup.bind(this)
        this.moveupAll = this.moveupAll.bind(this)
        this.movedown = this.movedown.bind(this)
        this.$up.addEventListener('click', this.moveupAll)
        this.$down.addEventListener('click', this.movedown, console.log('click'))
        this.$down2.addEventListener('click', this.movedown, console.log('click'))
        this.$down3.addEventListener('click', this.movedown, console.log('click'))
        this.$down4.addEventListener('click', this.movedown, console.log('click'))
        this.$up.addEventListener('touchstart', this.moveupAll)
        this.$down.addEventListener('touchstart', this.movedown, console.log('click'))
        this.$down2.addEventListener('touchstart', this.movedown, console.log('click'))
        this.$down3.addEventListener('touchstart', this.movedown, console.log('click'))
        this.$down4.addEventListener('touchstart', this.movedown, console.log('click'))
        this.$root.addEventListener('wheel', (event) => {
            if (event.deltaY > 0) this.movedown()
            else this.moveup()
        })
        if (this.opts.nav) {
            for (let i = 0; i < this.opts.nav.length; i++) {
                this.opts.nav[i].addEventListener('click', () => {
                    this.moveto(i)
                    this.#setActive(i)
                })
            }
        }
        let touchstartY = 0
        let touchendY = 0
        this.$root.addEventListener('touchstart', (event) => {
            touchstartY = event.changedTouches[0].screenY
        })
        this.$root.addEventListener('touchend', (event) => {
            touchendY = event.changedTouches[0].screenY
            if(window.innerWidth < 1000){
                if(touchendY > touchstartY + 50){
                    console.log(touchstartY)
                    console.log(touchendY)
                    this.moveup()
                }
                if(touchendY + 50 < touchstartY){
                    console.log("down")
                    console.log(touchstartY)
                    console.log(touchendY)
                    this.movedown()
                }
            }
        })


    }
    moveupAll() {
        if (this.level != 0 && !this.isAnimating) {
            this.isAnimating = true
            this.level = 0

            this.$sections.forEach(elem => elem.style.transform = `translateY(0%)`)
            let translateAmt = "translateY(" + 0 + "%)";
            document.querySelector('header').style.transform = translateAmt
            setTimeout(() => { this.isAnimating = false }, this.opts.animDuration || 300)
        }
    }
    moveup() {
        if (this.level != 0 && !this.isAnimating) {
            this.isAnimating = true
            this.level--
            console.log(this.level)
            let yAmt = 100
            let footerHeight = document.querySelector('footer');
            let yPercent = footerHeight.offsetHeight / window.innerHeight
            if (this.level == 3) {


                yAmt = ((3 + yPercent) * 100 / 4)
                console.log(yAmt, yPercent, 'hi')
            }
            this.$sections.forEach(elem => elem.style.transform = `translateY(${-this.level * yAmt}%)`)
            let translateAmt = "translateY(" + -this.level * yAmt + "%)";
            document.querySelector('header').style.transform = translateAmt
            setTimeout(() => { this.isAnimating = false }, this.opts.animDuration || 300)
        }
    }
    movedown() {
        if ((this.level) + 1 < this.bound && !this.isAnimating) {
            this.isAnimating = true
            this.level++
            console.log(this.level)
            let yAmt = 100
            let footerHeight = document.querySelector('.footer--content');
            let yPercent = footerHeight.offsetHeight / window.innerHeight
            console.log(screen.height);
            if (this.level == 4) {

                if (yPercent < 1) {
                    yAmt = ((3 + yPercent) * 100 / 4)
                }
                if (yPercent > 1) {
                    yAmt = ((3 + 1) * 100 / 4)
                }


                console.log(yAmt, yPercent)
            }
            this.$sections.forEach(elem => elem.style.transform = `translateY(${-this.level * yAmt}%)`)
            let translateAmt = "translateY(" + -this.level * yAmt + "%)";
            document.querySelector('header').style.transform = translateAmt


            console.log(`translateY(${-this.level * yAmt}%)`)
            setTimeout(() => { this.isAnimating = false }, this.opts.animDuration || 300)

        }
    }
    moveto(pos) {
        if (pos >= 0 && pos <= this.bound) {
            let movingTo = this.level - pos
            console.log(movingTo * 100)
            this.$sections.forEach(elem => elem.style.transform = `translateY(${(movingTo - this.level) * 100}%)`)
            this.level = pos
            console.log(pos)
        }
    }
}

