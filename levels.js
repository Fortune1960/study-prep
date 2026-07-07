const headers = document.querySelectorAll(".level-header");

headers.forEach(header => {

header.addEventListener("click",()=>{

const card = header.parentElement;

card.classList.toggle("active");

});

});