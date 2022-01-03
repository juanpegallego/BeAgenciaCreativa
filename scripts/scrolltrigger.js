gsap.registerPlugin(ScrollTrigger);

 
gsap.to('.character__img', {
    scrollTrigger: {
        trigger: 'header',
        start: 'top bottom-=200'
    },
    duration: 1,
    opacity: 1,  
    delay:0,    
    ease:Power4.easeOut,  
    y:0,
    x:0
}) 

 
//--------------------- H E A D E R ------------------------//

gsap.to('.header__title>h1', {
    scrollTrigger: {
        trigger: 'header',
        start: 'top bottom-=200',
    },
    duration: .5,
    opacity: 1,  
    ease:Elastic.easeOut, 
    delay:.5,    
    x:0
}) 

gsap.to('.header__title>a', {
    scrollTrigger: {
        trigger: 'header',
        start: 'top bottom-=200',
    },
    duration: 5,
    opacity: 1,  
    delay:1,    
}) 




//--------------------- M A I N  ------------------------//



gsap.to('.card:nth-child(1)', {
    scrollTrigger: {
        trigger: '.cards__container',
        start: 'top bottom-=300',
    },
    duration: .5,
    opacity: 1,       
    delay:0,    
    y:0
}) 

gsap.to('.card:nth-child(2)', {
    scrollTrigger: {
        trigger: '.cards__container',
        start: 'top bottom-=100',
    },
    duration: .5,
    opacity: 1,  
    delay:.5,    
    y:0
}) 
gsap.to('.card:nth-child(3)', {
    scrollTrigger: {
        trigger: '.cards__container',
        start: 'top bottom-=100',
    },
    duration: .5,
    opacity: 1,  
    delay:1,    
    y:0
}) 