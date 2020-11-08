const vegan = document.querySelector(".vegan");
const navList = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

vegan.addEventListener('click',()=>{
    navList.classList.toggle('open');
    links.forEach(link=>{
        link.classList.toggle('fade');
    })
})
