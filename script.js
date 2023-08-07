

let backword = document.querySelector('i');

backword.addEventListener('click' , function(){
    tl.reverse();
})




var tl = gsap.timeline();

tl.from('.wrapper' ,{
    duration:3,
    scale:0.7,
    opacity:0
})
.from('.linelem', {
    duration:2.5,
    width:0,
    opacity:0
}, '-=1.5')
.from('.linelem-content', {
    duration:1.5,
    width:0,
    opacity:0
}, '-=1')
.from('.linelem-content .line' , {
    duration:1,
    width:0,
    opacity:0
})
.from('.box' , {
    duration:1.5,
    x:0,
    opacity:0
}, '-=1')
.from('.box p', {
    duration:0.5,
    x:30,
    opacity:0
})