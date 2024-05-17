const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const dots = document.querySelector(".dots");
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const p = document.querySelector("#banner p");
const imgDot = document.querySelector(".banner-img");
let index = 0;

const displayDots = ()=>{
	dots.innerHTML = "" //on vide le contenu de la div
	for(let i = 0; i < slides.length; i++){
		let dot = document.createElement("div");
		dot.classList.add("dot");
		dots.appendChild(dot);
        if (index === i){
			dot.classList.add("dot_selected")
		}
	}
}
displayDots()


const tabDots = document.querySelectorAll(".dots .dot")
const handleClickRight = ()=>{
	if (tabDots.length > 0){
		tabDots[index].classList.remove("dot_selected");
		index++; //incrémente l'index
		if (index >= tabDots.length){
			index = 0 //vérifie si l'index dépasse le nombre de slides, je le réinistialise
		}
		tabDots[index].classList.add("dot_selected") //j'ajoute la classe dot_selected au point actuel 
		imgDot.src = "./assets/images/slideshow/" + slides[index].image;
        p.innerHTML = slides[index].tagLine;
	}else {
		console.error("Il n'a pas de slides dans le tableau");
	}
}
const handleClickLeft = ()=>{
    if (tabDots.length > 0){
        tabDots[index].classList.remove("dot_selected");
        index--; // décrémente l'index
        if (index < 0){
            index = tabDots.length - 1; // réinitialise à la dernière slide
        }
        tabDots[index].classList.add("dot_selected"); // j'ajoute la classe dot_selected au point actuel 
        imgDot.src = "./assets/images/slideshow/" + slides[index].image;
        p.innerHTML = slides[index].tagLine;
    } else {
        console.error("Il n'a pas de slides dans le tableau");
    }
}

arrowRight.addEventListener("click",handleClickRight);
arrowLeft.addEventListener("click",handleClickLeft);