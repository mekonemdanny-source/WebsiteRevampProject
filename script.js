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

// =========================
// REVIEWS CAROUSEL
// =========================

// Add your reviews here
const reviews = [
    {
        quote: "A stunning piece of filmmaking that also gives the audience a vast amount of new knowledge and perspective and leaves a powerful impact on the viewers.",

        source: "— SunSentinel, Documentary Educates, January 30, 2013"
    },

    {
        quote: "Amazing and often unheard of story",
        source: "— Indiewire, Shadow and Act: On Cinema of the African Diaspora, April, 2013 (Blavity.com)"
    },

    {
        quote: "Multiculturalism gets more complicated in a work-in-progress video by Avishai Mekonen, an Ethiopian Israeli, and Shari Rothfarb Mekonen, an American. The video interweaves Mr. Mekonen&#39;s own search for identity as a Jew of color new to America with those of others: a Korean-American female rabbi; an Ethiopian rabbi; a rabbinical student from Uganda; a professor of African history at Princeton University who is of Yemenite and Ethiopian descent; and a rabbi born to a family of Jews who lived in Cuba for five generations but were able to practice their religion openly only after immigrating to the United States.",





        source: "— The New York Times, American Jewishness in All Its Infinite Variety, October 5th, 2005"
    }
];


let currentReview = 0;

const reviewQuote = document.getElementById("reviewQuote");
const reviewSource = document.getElementById("reviewSource");

const previousReview = document.getElementById("previousReview");
const nextReview = document.getElementById("nextReview");

const reviewContent = document.querySelector(".review-content");

function showReview(animation) {

    // Remove the previous animation
    reviewContent.classList.remove("slide-next");
    reviewContent.classList.remove("slide-previous");

    // Force the animation to restart
    void reviewContent.offsetWidth;

    // Add the new animation
    reviewContent.classList.add(animation);

    // Change the review
    reviewQuote.textContent = '"' + reviews[currentReview].quote + '"';
    reviewSource.textContent = reviews[currentReview].source;
}


nextReview.onclick = function() {

    currentReview++;

    if (currentReview >= reviews.length) {
        currentReview = 0;
    }

    showReview("slide-next");

};


previousReview.onclick = function() {

    currentReview--;

    if (currentReview < 0) {
        currentReview = reviews.length - 1;
    }

    showReview("slide-previous");

};


// show the first review
showReview("");