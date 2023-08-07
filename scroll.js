




let scrole = document.querySelector('.scroller');

window.addEventListener('mousemove' , function(details){
    let xValue = details.clientX;
    let yValue = details.clientY;

    scrole.style.left = `${xValue}px`;
    scrole.style.top = `${yValue}px`;
})