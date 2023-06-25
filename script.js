let navbar = document.querySelector('.header.navbar');
let menu = document.querySelector('#menu-btn');
menuBtn.onclick = () =>{
    menuBtn.classList.toggle('fa-bars');
    navbar.classList.toggle('active');
}
window.onscroll =() =>{
    menuBtn.classList.revome('fa-bars');
    navbar.classList.remove('active');
};