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
    imagePath: 'images/thumbnails/illustration.png',
    link: 'https://vl-fanai.blogspot.com/2023/06/elevating-my-portrait-drawing-skills.html'
  },
  {
    title: 'Starting a Blog for Reflection and Accountability: Overcoming Procrastination and Embracing Imperfection',
    description: '"This is another blog post description."',
    imagePath: 'images/thumbnails/Man__dark-bg.jpeg',
    link: 'https://vl-fanai.blogspot.com/2023/04/why-i-finally-decided-to-start-writing.html'
  },
  {
    title: 'This is the third blog',
    description: '"This is the third blog post description."',
    imagePath: 'images/thumbnails/Man__dark-bg.jpeg',
    link: 'https://vl-fanai.blogspot.com/2023/04/ai-will-not-replacr-your-job-people-who.html'
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
const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('previous-btn');
const nextBtn = document.getElementById('next-btn');
let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.transform = `rotateY(${(i - index) * 45}deg) translateZ(200px)`;
  });
}

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
});

showSlide(currentIndex);
