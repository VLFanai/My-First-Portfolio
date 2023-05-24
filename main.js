const mainTheme = document.querySelector('main');
const toggleButton = document.querySelector('#dark-mode-toggle');

function toggleTheme() {
  mainTheme.classList.toggle("light-mode");
}

  

// --TYPING ANIMATION
// Delay in milliseconds before the text appears and starts typing
const delay = 2000;

// Function to initialize the typing animation after the delay
function startTyping() {
  var typed = new Typed('#auto-type2', {
    strings: ['Developer', 'Youtuber', 'Illustrator'],
    typeSpeed: 100,
    backSpeed: 70,
    loop: true,
  });
}

// Delay the start of typing by the specified delay
setTimeout(startTyping, delay);

//ANOTHER TYPING ANIMATION
var typed = new Typed('#auto-type1', {
    strings: ['Welcome to my site!'],
    typeSpeed: 50,
    loop: false,
});
