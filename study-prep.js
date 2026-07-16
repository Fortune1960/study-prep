// Future JavaScript will be added here

console.log("JOHESSA Study Prep Loaded Successfully");

const menu = document.getElementById("menu-toggle");
const nav = document.getElementById("nav-links");

menu.addEventListener("click", () => {

    nav.classList.toggle("active");
    menu.classList.toggle("active");

    if(nav.classList.contains("active")){
        menu.innerHTML = '<i class="fas fa-times"></i>';
    }else{
        menu.innerHTML = '<i class="fas fa-bars"></i>';
    }

});

const links = document.querySelectorAll("#nav-links a");

links.forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

        menu.innerHTML = '<i class="fas fa-bars"></i>';

    });

});

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

            observer.unobserve(entry.target);

        }

    });

},{
    threshold:0.2
});

cards.forEach(card => observer.observe(card));