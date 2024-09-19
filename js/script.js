// Functionality for project sharing
function setupShareButton(buttonId, title, text, url) {
  const button = document.getElementById(buttonId);
  if (button) {
    button.addEventListener('click', function () {
      if (navigator.share) {
        navigator.share({
          title: title,
          text: text,
          url: url
        })
        .then(() => console.log('Shared successfully'))
        .catch(error => console.log('Error sharing:', error));
      } else {
        navigator.clipboard.writeText(url).then(() => {
          alert("Link copied to clipboard!");
        }).catch(err => {
          alert("Failed to copy text:", err);
        });
      }
    });
  }
}

// Share buttons setup
setupShareButton('Object_det_shareBtn', 'Obstacle Detection Project', 'Real-time obstacle detection project for quadruped robots.', 'https://www.linkedin.com/feed/');
setupShareButton('Sign_language_shareBtn', 'Amharic Sign Language Project', 'Transcription of Amharic sign language to text.', 'https://drive.google.com/file/d/1To9SS-R6rlLZhiKyp4O8G_JRwqjGpu9p/view?usp=sharing');
setupShareButton('Rental_shareBtn', 'Online Rental System', 'Manage rental properties and transactions efficiently.', 'https://github.com/Alki45/rental/');
