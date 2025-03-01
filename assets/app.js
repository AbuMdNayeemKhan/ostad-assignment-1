// js for nav
const navbtn = document.querySelector('.togoller');
const navbar = document.querySelector('nav');
navbtn.addEventListener('click', () => {
    navbar.classList.toggle('active');
});
// js for from
document.getElementById("contactForm").addEventListener("click", () => {
    alert("Thank you for your message! I will get back to you soon.");
});