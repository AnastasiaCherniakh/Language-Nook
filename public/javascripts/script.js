const btnMenu = document.querySelector('#btnMenu');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElements = document.querySelectorAll('.faded');

btnMenu.addEventListener('click',function(){
    console.log('click menu');

    if(header.classList.contains('open')) {
        header.classList.remove('open');
        fadeElements.forEach(function(el){
            el.classList.remove('fade_in');
            el.classList.add('fade_out');
        });
    }
    else {
        header.classList.add('open');
        fadeElements.forEach(function(el){
            el.classList.remove('fade_out');
            el.classList.add('fade_in');
        });

    }
});