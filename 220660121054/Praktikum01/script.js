// Add event listener to audio element
const audio = document.querySelector('audio');
audio.addEventListener('play', function() {
  console.log('Audio is playing!');
});

// Add event listener to video element
const video = document.querySelector('iframe[src*="youtube"]');
video.addEventListener('load', function() {
  console.log('Video is loaded!');
});

// Add event listener to social media links
const socialLinks = document.querySelectorAll('footer a');
socialLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    window.open(link.href, '_blank');
  });
});

// Add animation effect to hover on links and buttons
const linksAndButtons = document.querySelectorAll('a, button');
linksAndButtons.forEach(element => {
  element.addEventListener('mouseover', function() {
    element.style.transform = 'scale(1.1)';
  });
  element.addEventListener('mouseout', function() {
    element.style.transform = 'scale(1)';
  });
});

// Add scroll effect to page
window.addEventListener('scroll', function() {
  const scrollPosition = window.scrollY;
  const header = document.querySelector('header');
  if (scrollPosition > 200) {
    header.style.background = 'rgba(0, 0, 0, 0.5)';
  } else {
    header.style.background = 'transparent';
  }
});