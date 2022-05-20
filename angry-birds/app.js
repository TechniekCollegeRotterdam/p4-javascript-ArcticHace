//Oefening angry-birds

const bird = document.querySelector(".bird");
let px = 0;

bird.addEventListener("click", function(){
    px = px + 50;
    bird.style.left = px + "px";
});                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         

window.addEventListener("keydown", function(e){
    console.log(e.key);
    if(e.key == "ArrowRight"){
        px = px + 50;
        bird.style.left = px + "px";
    }

    if(e.key == "ArrowLeft"){
        px = px - 50;
        bird.style.left = px + "px";
    }

    if(e.key == "ArrowUp"){
        px = px + 50;
        bird.style.bottom = px + "px";
    }

    if(e.key == "ArrowDown"){
        px = px - 50;
        bird.style.bottom = px + "px";
    }       
});