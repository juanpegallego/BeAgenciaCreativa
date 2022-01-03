
gsap.registerPlugin(ScrollTrigger);




/*------------------*/

gsap.to('header>h4', {
    scrollTrigger: {
        trigger: 'header',
        start: 'top top+=200'
    },
    duration: .5,
    opacity: 1,
    delay: .15,
    y: 0
})

gsap.to('header>h1', {
    scrollTrigger: {
        trigger: 'header',
        start: 'top top+=200'
    },
    duration: .25,
    opacity: 1,
    delay: .75,
    y: 0
})

/*------------------*/




gsap.to('.banner1__container > h2', {
    scrollTrigger: {
        trigger: '.banner1__container',
        start: 'top top+=300'
    },
    duration: .5,
    opacity: 1,
    delay: 0,
    y: 0
})


gsap.to('.banner1__container > p', {
    scrollTrigger: {
        trigger: '.banner1__container',
        start: 'top top+=300'
    },
    duration: .5,
    opacity: 1,
    delay: .25,
    y: 0
})


/*------------------*/


gsap.to('.banner2__container > h1', {
    scrollTrigger: {
        trigger: '.banner2__container',
        start: 'top top+=200'
    },
    duration: .5,
    opacity: 1,
    delay: 0,
    y: 0
})


gsap.to('.banner2__container > p', {
    scrollTrigger: {
        trigger: '.banner2__container',
        start: 'top top+=200'
    },
    duration: .5,
    opacity: 1,
    delay: .25,
    y: 0
})

/*------------------*/

gsap.to('.navigation__section', {
    scrollTrigger: {
        trigger: '.navigation__section',
        start: 'top bottom+=200'
    },
    duration: 2,
    opacity: 1,
    delay: 1,
})

/*------------------*/

gsap.to('footer', {
    scrollTrigger: {
        trigger: '.banner2__container',
        start: 'top top+=200',
        scrub:true
    },
    duration: .5,
    opacity: 1,
    delay: 1
})
