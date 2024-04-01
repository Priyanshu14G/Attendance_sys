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
        image.src = 'numbers.svg'; // Replace 'image.jpg' with the path to your image
        image.style.width = '610px';
        image.style.height = '70vh';
        // Append the image to the container
        imageContainer.appendChild(image);
        // Show the image container
        imageContainer.style.display = 'flex';
    }
}

// Add click event listener to the button
showImageButton.addEventListener('click', showImage);
//image.style.width = '610px'; // Example of setting width to 100%
//image.style.height = '70vh'; // Example of setting height to 100%



// Get reference to the button and the image container
const ImageButton = document.getElementById('ImageButton');
const boximg = document.getElementById('boximg');

// Function to generate and show the image
function showImage() {
    // Check if an image is already present in the container
    if (boximg.children.length === 0) {
        // Create an image element
        const image = document.createElement('img');
        // Set the image source
        image.src = 'alphabets.svg'; // Replace 'image.jpg' with the path to your image
        image.style.width = '590px';
        image.style.height = '70vh';
        // Append the image to the container
        boximg.appendChild(image);
        // Show the image container
        boximg.style.display = 'flex';
    }
}

// Add click event listener to the button
ImageButton.addEventListener('click', showImage);
//image.style.width = '610px'; // Example of setting width to 100%
//image.style.height = '70vh'; // Example of setting height to 100%

