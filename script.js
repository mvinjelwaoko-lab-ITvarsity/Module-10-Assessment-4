// Loads all images from the images folder
const gallery = document.getElementById("gallery");

// You can add your image filenames here:
const images = [
    "img1.jpg",
    "img2.jpg",
    "img3.jpg"
];

images.forEach(img => {
    const imageElement = document.createElement("img");
    imageElement.src = "images/" + img;
    gallery.appendChild(imageElement);
});
