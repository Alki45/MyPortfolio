// Profile Image Slider
const profileImages = document.querySelectorAll('.profile-image img');
let currentIndex = 0;

function showNextImage() {
  profileImages.forEach((img, index) => {
    if (index === currentIndex) {
      img.classList.add('active');
    } else {
      img.classList.remove('active');
    }
  });
  currentIndex = (currentIndex + 1) % profileImages.length;
}

setInterval(showNextImage, 5000);

// Share Button for Object Detection
document.getElementById("Object_det_shareBtn").addEventListener("click", function() {
  if (navigator.share) {
    navigator.share({
      title: "Obstacle Detection Project",
      text: "Check out this real-time obstacle detection project for quadruped robots!",
      url: "Object_det_shareBtn"
    })
    .then(() => console.log('Successfully shared'))
    .catch((error) => console.log('Error sharing:', error));
  } else {
    alert("Sorry, your browser does not support the Web Share API.");
  }
});

// Share Button for Sign Language
const signLanguageShareBtn = document.getElementById('Sign_language_shareBtn');
const signLanguageLink = document.querySelector('.Sign-language a');

signLanguageShareBtn.addEventListener('click', function() {
  const linkUrl = signLanguageLink.getAttribute('href');
  const sharedText = `Check out this project on Amharic sign language transcription: ${linkUrl}`;

  if (navigator.share) {
    navigator.share({
      title: 'Amharic Sign Language Project',
      text: sharedText,
      url: linkUrl
    })
    .then(() => console.log('Successfully shared'))
    .catch((error) => console.log('Error sharing:', error));
  } else {
    alert("Sorry, your browser does not support the Web Share API.");
  }
});

// Share Button for Rental System
document.getElementById("Rental_shareBtn").addEventListener("click", function() {
  if (navigator.share) {
    navigator.share({
      title: "Online Rental System",
      text: "Check out this platform for managing rental properties and transactions.",
      url: "https://github.com/Alki45/rental/"
    })
    .then(() => console.log('Successfully shared'))
    .catch((error) => console.log('Error sharing:', error));
  } else {
    alert("Sorry, your browser does not support the Web Share API.");
  }
});
