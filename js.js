//Declaramos los Datos: Personas/reviews
const personas = [
    {
        id: 1,
        name: "Juan Palotes",
        profesion: "UX Designer",
        img: "./public/img1.jpg",
        review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, iste pariatur aliquid blanditiis sunt corrupti, et delectus, fuga quidem voluptatibus obcaecati! Iure possimus laborum maxime blanditiis id aut cum libero. card's content"
    },
    {
        id: 2,
        name: "Pepa Peeg",
        profesion: "Architect",
        img: "./public/img2.jpg",
        review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, iste pariatur aliquid blanditiis sunt corrupti, et delectus, fuga quidem voluptatibus obcaecati! Iure possimus laborum maxime blanditiis id aut cum libero. card's content"
    },
    {
        id: 3,
        name: "Pepito Perez",
        profesion: "Engineer",
        img: "./public/img3.jpg",
        review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, iste pariatur aliquid blanditiis sunt corrupti, et delectus, fuga quidem voluptatibus obcaecati! Iure possimus laborum maxime blanditiis id aut cum libero. card's content"
    },
    {
        id: 4,
        name: "Miky Maus",
        profesion: "Politic",
        img: "./public/img4.jpg",
        review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, iste pariatur aliquid blanditiis sunt corrupti, et delectus, fuga quidem voluptatibus obcaecati! Iure possimus laborum maxime blanditiis id aut cum libero. card's content"
    }
]

//Declaramos constantes: Elementos
const img = document.getElementById("img");
const nombre = document.getElementById("name");
const job = document.getElementById("job");
const review = document.getElementById("review");

//Declaramos constantes: Botones - Para eventos
const btnPre = document.querySelector(".prev");
const btnNext = document.querySelector(".next");
const btnRandom = document.querySelector(".random");

//Declaramos el parametro inicial
let currentReview = 0;

//Cargo el Dato Inicial
window.addEventListener("DOMContentLoaded", function () {
    mostrarPersona(currentReview);
})

//Funcion para mostrar la persona
function mostrarPersona(person) {
    const persona = personas[person];
    img.src = persona.img;
    nombre.textContent = persona.name;
    job.textContent = persona.profesion;
    review.textContent = persona.review;
}

//Botones

btnNext.addEventListener("click", ()=>{
    currentReview++;
    if (currentReview > personas.length -1){
        currentReview = 0;
    }
    console.log(currentReview);
    mostrarPersona(currentReview);
})

btnPre.addEventListener("click", ()=>{
    currentReview--;
    if (currentReview < 0){
        currentReview = personas.length -1;
    }
    console.log(currentReview);
    mostrarPersona(currentReview);
})

btnRandom.addEventListener("click", ()=>{
    currentReview = Math.floor(Math.random () * personas.length)
    console.log(currentReview);
    mostrarPersona(currentReview);
})

