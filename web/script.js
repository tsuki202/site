
let section = document.querySelectorAll('section');
let newLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    
    let header = document.querySelector('header');
    
    header.classList.toggle('stinky', window.scrollY > 100);
  
}