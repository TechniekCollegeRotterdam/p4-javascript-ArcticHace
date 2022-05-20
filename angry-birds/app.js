//Oefening angry-birds

const bird = document.querySelector(`.bird`);
let position = 0;

bird.addEventListener("click", function(){
    position = position + 50;
    bird.style.left = position + 'px';
});