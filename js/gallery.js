document.addEventListener("DOMContentLoaded", () => {
    const galleryGrid = document.querySelector('.gallery-grid');
    const imageModal = document.getElementById('image-modal');
    const modalImage = document.querySelector('.modal-image');
    const closeBtn = document.querySelector('.close-btn');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const imagePath = "images/gallery/";
    const imageCount = 12; // Total number of images
    
    let currentIndex = 0;
    
    // Load images into the gallery grid
    for (let i = 1; i <= imageCount; i++) {
      const imgElement = document.createElement('img');
      imgElement.src = `${imagePath}image${i}.png`;
      imgElement.alt = `Gallery Image ${i}`;
      imgElement.dataset.index = i - 1; // Save index for navigation
    
      // Add event listener for fade-in once the image is loaded
      imgElement.onload = () => {
        imgElement.classList.add('visible'); // Apply fade-in effect
      };
    
      galleryGrid.appendChild(imgElement);
    }
    
    // Open modal on image click
    galleryGrid.addEventListener('click', (e) => {
      if (e.target.tagName === 'IMG') {
        currentIndex = parseInt(e.target.dataset.index, 10);
        showImage(currentIndex);
      }
    });
    
    // Show image in modal
    function showImage(index) {
      modalImage.src = `${imagePath}image${index + 1}.png`;
      imageModal.classList.add('active');
    }
    
    // Close modal
    closeBtn.addEventListener('click', () => {
      imageModal.classList.remove('active');
    });
    
    // Navigate to previous image
    prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + imageCount) % imageCount; // Wrap around
      showImage(currentIndex);
    });
    
    // Navigate to next image
    nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % imageCount; // Wrap around
      showImage(currentIndex);
    });
    
    // Close modal on outside click
    imageModal.addEventListener('click', (e) => {
      if (e.target === imageModal) {
        imageModal.classList.remove('active');
      }
    });
    
    // Close modal on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && imageModal.classList.contains('active')) {
        imageModal.classList.remove('active');
      }
    });
  });


