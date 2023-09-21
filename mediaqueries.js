let item3 = document.getElementById("card-3");
let item4 = document.getElementById("card-4");
let item5 = document.getElementById("card-5");
let item6 = document.getElementById("card-6");

let mediaquery = window.matchMedia("(min-width: 612px)");

console.log(mediaquery.matches);

mediaquery.addEventListener('change', marginItem);

function marginItem(e){
    if(e){
        item5.classList.add("card-team--margin-top");
    } else {
        item4.classList.add("card-team--margin-top");
        item6.classList.add("card-team--margin-top");
    }
}