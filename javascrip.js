  // NAVBAR 1

//   document.addEventListener('DOMContentLoaded', function () {
//     const barsIcon = document.querySelector('.fa-bars');
//     const container = document.querySelector('.container');

//     barsIcon.addEventListener('click', function () {
//         container.style.display = container.style.display === 'none' ? 'flex' : 'none';
//     });
// });

document.addEventListener('DOMContentLoaded', function () {
    const barsIcon = document.querySelector('.fa-bars');
    const container = document.querySelector('.container');

    // Initially hide the container element
    container.style.display = 'none';

    barsIcon.addEventListener('click', function () {
        container.style.display = container.style.display === 'none' ? 'flex' : 'none';
    });
});




// ORG-IMAGE-SLIDER
const images = [
    "image22.png",
    "img-slide2.png",
    "3.jpg",
    "4.jpg",
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg"
  ];



  
  
  const buttons = document.querySelectorAll('.change-image-btn');
  const mainImage = document.getElementById("main-image");
  let currentIndex = 0;

  function changeImage(event) {
    const buttonIndex = parseInt(event.target.getAttribute('data-index'));
    currentIndex = buttonIndex;
    updateImage();
  }

  function updateImage() {
    mainImage.style.animation = 'none'; // Reset animation
    setTimeout(() => {
      mainImage.style.animation = null; // Re-enable animation
      mainImage.src = images[currentIndex];
      mainImage.alt = "Image " + (currentIndex + 1);
    }, 50); // Wait for a short delay before changing image (to reset animation)
  }

  buttons.forEach(button => {
    button.addEventListener('click', changeImage);
  });
