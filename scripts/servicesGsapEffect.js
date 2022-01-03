
gsap.registerPlugin(ScrollTrigger);




gsap.to('.card:nth-of-type(1)', {
    scrollTrigger: {
        trigger: '.banner',
        start: 'top top+=200'
    },
    duration: 1,
    opacity: 1,
    delay: .5,
    ease:Elastic.easeOut,
    y: 0
})
gsap.to('.card:nth-of-type(2)', {
    scrollTrigger: {
        trigger: '.cards__container',
        start: 'top top+=200'
    },
    duration: .5,
    opacity: 1,
    delay: .15,
    y: 0
})
gsap.to('.card:nth-of-type(3)', {
    scrollTrigger: {
        trigger: '.cards__container',
        start: 'top top+=200'
    },
    duration: .5,
    opacity: 1,
    delay: .25,
    y: 0
})
gsap.to('.card:nth-of-type(4)', {
    scrollTrigger: {
        trigger: '.cards__container',
        start: 'top top+=200'
    },
    duration: .5,
    opacity: 1,
    delay: .35,
    y: 0
})
gsap.to('.card:nth-of-type(5)', {
    scrollTrigger: {
        trigger: '.cards__container',
        start: 'top top+=200'
    },
    duration: .4,
    opacity: 1,
    delay: .45,
    y: 0
})
gsap.to('.card:nth-of-type(6)', {
    scrollTrigger: {
        trigger: '.cards__container',
        start: 'top top+=200'
    },
    duration: .4,
    opacity: 1,
    delay: .55,
    y: 0
})


gsap.to('.card:nth-of-type(7)', {
    scrollTrigger: {
        trigger: '.cards__container',
        start: 'top top+=200'
    },
    duration: .4,
    opacity: 1,
    delay: .65,
    y: 0
})

gsap.to('.card:nth-of-type(8)', {
    scrollTrigger: {
        trigger: '.cards__container',
        start: 'top top+=200'
    },
    duration: .4,
    opacity: 1,
    delay: .75,
    y: 0
})

//------------------


const arraySecciones = ['redes', 'identidad', 'desarrollo', 'publicidad', 'mkt','ux']

const animarConGsap = (item) => {
    gsap.to(`#${item}`, {
        scrollTrigger: {
            trigger: `#${item}`,
            start: 'top top+=400'
        },
        duration: .2,
        opacity: 1,
        delay: 0,
        x: 0
    })
}


arraySecciones.forEach(
    item => animarConGsap(item)
)