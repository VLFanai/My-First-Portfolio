// Add an event listener to the window load event
window.addEventListener('load', function() {
  // Get all the navigation links
  var homeLink = document.getElementById('home-link');
  var blogLink = document.getElementById('blog-link');
  var projectsLink = document.getElementById('projects-link');
  var contactLink = document.getElementById('contact-link');
  var aboutLink = document.getElementById('about-link');

  // Get all the sections
  var homeSection = document.getElementById('home-section');
  var aboutSection = document.getElementById('about-section');
  var blogSection = document.getElementById('blog-section');
  var projectsSection = document.getElementById('projects-section');
  var contactSection = document.getElementById('contact-section');

  // Set the initial section to display
  homeSection.style.display = 'block';

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

