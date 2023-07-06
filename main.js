// Add an event listener to the window load event
window.addEventListener('load', function() {
  // Get all the navigation links
  var homeLink = document.getElementById('home-link');
  var aboutLink = document.getElementById('about-link');
  var blogLink = document.getElementById('blog-link');
  var projectsLink = document.getElementById('projects-link');
  var contactLink = document.getElementById('contact-link');

  // Get all the sections
  var homeSection = document.getElementById('home-section');
  var aboutSection = document.getElementById('about-section');
  var blogSection = document.getElementById('blog-section');
  var projectsSection = document.getElementById('projects-section');
  var contactSection = document.getElementById('contact-section');

  // Set the initial section to display
  homeSection.style.display = 'flex';
  aboutSection.style.display = 'none';
  blogSection.style.display = 'none';
  projectsSection.style.display = 'none';
  contactSection.style.display = 'none';

  // Add click event listeners to the navigation links
  homeLink.addEventListener('click', function() {
    showSection(homeSection);
  });

  aboutLink.addEventListener('click', function() {
    showSection(aboutSection);
  });

  blogLink.addEventListener('click', function() {
    showSection(blogSection);
  });

  projectsLink.addEventListener('click', function() {
    showSection(projectsSection);
  });

  contactLink.addEventListener('click', function() {
    showSection(contactSection);
  });

  // Function to show a specific section and hide the rest
  function showSection(section) {
    // Hide all sections
    homeSection.style.display = 'none';
    aboutSection.style.display = 'none';
    blogSection.style.display = 'none';
    projectsSection.style.display = 'none';
    contactSection.style.display = 'none';

    // Show the selected section
    section.style.display = 'flex';
  }
});


// Define an array of blog posts
const blogPosts = [
  {
    title: 'Elevating my Portrait Drawing Skills through AI-Generated Art',
    description: '"Unlocking my artistic potential, I harness AI-generated art to enhance my portrait-drawing skills and explore boundless creativity."',
    imagePath: '',
    link: 'https://codepen.io/VL_Fanai/pen/RwYpXpY'
  },
  {
    title: '',
    description: '',
    imagePath: 'https://images.unsplash.com/photo-1509266272358-7701da638078?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Ym9va3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=60',
    link: ''
  },
  {
    title: '',
    description: '',
    imagePath: 'https://images.unsplash.com/photo-1505563480588-ca7375d17e0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1pbmltYWwlMjBhYnN0cmFjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60',
    link: ''
  },
  // Add more blog posts as needed
];

let currentPostIndex = 0;

// Function to update the content based on the current post index
function updateContent() {
  const currentPost = blogPosts[currentPostIndex];

  document.getElementById('blog-title').textContent = currentPost.title;
  document.getElementById('blog-description').innerHTML = currentPost.description;
  document.getElementById('blog-number').textContent = (currentPostIndex + 1).toString().padStart(2, '0');
  document.querySelector('.image img').src = currentPost.imagePath;

  const readMoreButton = document.getElementById('read-more-btn');
  readMoreButton.href = currentPost.link;
}

// Function to navigate to the next blog post
function nextBlogPost() {
  currentPostIndex = (currentPostIndex + 1) % blogPosts.length;
  updateContent();
}

// Function to navigate to the previous blog post
function previousBlogPost() {
  currentPostIndex = (currentPostIndex - 1 + blogPosts.length) % blogPosts.length;
  updateContent();
}

// Event listeners for the navigation buttons
document.getElementById('next-btn').addEventListener('click', nextBlogPost);
document.getElementById('previous-btn').addEventListener('click', previousBlogPost);

// Initially update the content with the first blog post
updateContent();



// Project Section Functions
document.addEventListener("DOMContentLoaded", function() {
  const carousel = document.querySelector(".carousel");
  const prevButton = document.querySelector(".prev-button");
  const nextButton = document.querySelector(".next-button");
  const dotIndicators = document.querySelector(".dot-indicators");

  prevButton.addEventListener("click", function() {
    carousel.scrollBy({
      left: -carousel.offsetWidth,
      behavior: "smooth"
    });
  });

  nextButton.addEventListener("click", function() {
    carousel.scrollBy({
      left: carousel.offsetWidth,
      behavior: "smooth"
    });
  });

  carousel.addEventListener("scroll", function() {
    const slideIndex = Math.round(carousel.scrollLeft / carousel.offsetWidth);
    updateDotIndicators(slideIndex);
  });

  function updateDotIndicators(currentIndex) {
    const slides = carousel.getElementsByClassName("slide");
    const dotIndicatorContainer = document.querySelector(".dot-indicators");

    dotIndicatorContainer.innerHTML = "";

    for (let i = 0; i < slides.length; i++) {
      const dot = document.createElement("span");
      dot.classList.add("dot-indicator");
      if (i === currentIndex) {
        dot.classList.add("active-dot");
      }
      dot.addEventListener("click", function() {
        carousel.scroll({
          left: i * carousel.offsetWidth,
          behavior: "smooth"
        });
      });
      dotIndicatorContainer.appendChild(dot);
    }
  }
});

