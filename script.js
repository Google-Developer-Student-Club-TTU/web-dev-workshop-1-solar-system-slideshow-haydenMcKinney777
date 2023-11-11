import planets from './planets.js'

const image = document.getElementById("image-container");
const name = document.getElementById("planet-name");
const mass = document.getElementById("planet-mass");
const rings = document.getElementById("rings");
const description = document.getElementById("description");

const btnPrevious = document.querySelector(".btn.previous");
const btnNext = document.querySelector(".btn.next");

let counter = 0;

function showItem() {
    const item = planets[counter];
    image.src = item.image;
    name.textContent = item.name;
    mass.textContent = "mass: " + item.mass;
    rings.textcontent = "Rings: " + item.hasRings;
    description.textContent = item.description;

}

document.addEventListener('DOMContentLoaded', () => {
    showItem()

});

btnPrevious.addEventListener('click', () => {
    counter--;
    if(counter < 0){
        counter = planets.length - 1;
    }
    showItem();
})

btnNext.addEventListener('click', () => {
    counter++;
    if(counter > planets.length - 1){
        counter = 0;
    }
    showItem();
})