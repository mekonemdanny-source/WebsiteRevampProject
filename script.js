// =========================
// LIGHT / DARK MODE
// =========================

const themeButton = document.getElementById("themeButton");

themeButton.onclick = function () {

    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        themeButton.textContent = "Dark Mode";
    } else {
        themeButton.textContent = "Light Mode";
    }

};


// =========================
// SHOW / HIDE TRAILER
// =========================

const trailerButton = document.getElementById("trailerButton");
const trailer = document.getElementById("trailerContainer");

trailerButton.onclick = function () {

    if (trailer.style.display === "none") {

        trailer.style.display = "flex";
        trailerButton.textContent = "Hide Trailer";

    } else {

        trailer.style.display = "none";
        trailerButton.textContent = "Show Trailer";

    }

};


// =========================
// FILMMAKER HOVER EFFECT
// =========================

const cards = document.querySelectorAll(".filmmaker-card");

cards.forEach(function(card) {

    const bio = card.querySelector(".hidden-info");

    card.onmouseover = function() {
        bio.style.display = "block";
    };

    card.onmouseout = function() {
        bio.style.display = "none";
    };

});


// =========================
// IMAGE ENLARGEMENT
// =========================

const galleryImages = document.querySelectorAll(".gallery-image");
const imageOverlay = document.getElementById("imageOverlay");
const largeImage = document.getElementById("largeImage");
const closeImage = document.getElementById("closeImage");

galleryImages.forEach(function(image) {
// forEach applys code to each thing in an [] or () for me its the images.
    image.onclick = function() {

        imageOverlay.style.display = "flex";
        largeImage.src = image.src;

    };

});

closeImage.onclick = function() {

    imageOverlay.style.display = "none";

};

imageOverlay.onclick = function(event) {

    if (event.target === imageOverlay) {
        imageOverlay.style.display = "none";
    }

};