let item3 = document.getElementById("card-3");
let item4 = document.getElementById("card-4");
let item5 = document.getElementById("card-5");
let item6 = document.getElementById("card-6");

let mediaqueryS = window.matchMedia("(max-width: 611px)");
let mediaqueryL = window.matchMedia("(min-width: 612px)");

/*
window.addEventListener('resize', marginItem);

function marginItem(){
    if(mediaqueryL){
        item4.classList.remove("card-team--margin-top");
        item6.classList.remove("card-team--margin-top");
        item5.classList.add("card-team--margin-top");
    }
    if(mediaqueryS){
        item5.classList.remove("card-team--margin-top");
        item4.classList.add("card-team--margin-top");
        item6.classList.add("card-team--margin-top");
    }


}*/



if (screen.width >= 612){
    item5.classList.add("card-team--margin-top");
    item4.classList.remove("card-team--margin-top");
    item6.classList.remove("card-team--margin-top");
}else if (screen.width <= 611){
    item5.classList.remove("card-team--margin-top");
    item4.classList.add("card-team--margin-top");
    item6.classList.add("card-team--margin-top");
}



