// Get reference to the button and the image container
const showImageButton = document.getElementById('showImageButton');
const imageContainer = document.getElementById('imageContainer');

// Function to generate and show the image
function showImage() {
    // Check if an image is already present in the container
    if (imageContainer.children.length === 0) {
        // Create an image element
        const image = document.createElement('img');
        // Set the image source
        image.src = 'images.svg'; // Replace 'image.jpg' with the path to your image
        // Append the image to the container
        imageContainer.appendChild(image);
        // Show the image container
        imageContainer.style.display = 'flex';
    }
}

// Add click event listener to the button
showImageButton.addEventListener('click', showImage);
