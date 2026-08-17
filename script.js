/* =========================================
   PHOTO SLIDESHOW
========================================= */

const photos = [

    "photos/photo1.jpeg",
    "photos/photo2.jpeg",
    "photos/photo3.jpeg"

];


const lines = [

    "🌸 Keep smiling and keep making beautiful memories.",

    "✨ May your days always be filled with happiness.",

    "🎈 Wishing you many more wonderful moments ahead."

];


let currentPhoto = 0;


const photo =
    document.getElementById("changingPhoto");


const memoryText =
    document.getElementById("memoryText");


/* =========================================
   CHANGE PHOTO EVERY 2 SECONDS
========================================= */

if (photo && memoryText) {

    setInterval(() => {

        /* Fade OUT */

        photo.classList.add("photo-fade");

        memoryText.classList.add("text-fade");


        setTimeout(() => {

            currentPhoto++;

            if (
                currentPhoto >= photos.length
            ) {
                currentPhoto = 0;
            }


            /* Change photo */

            photo.src =
                photos[currentPhoto];


            /* Change line */

            memoryText.textContent =
                lines[currentPhoto];


            /* Fade IN */

            photo.classList.remove(
                "photo-fade"
            );

            memoryText.classList.remove(
                "text-fade"
            );

        }, 700);

    }, 2000);

}


/* =========================================
   FLOATING HEARTS + STARS
========================================= */

const decorations = [

    "❤️",
    "💕",
    "💗",
    "✨",
    "⭐",
    "🌸",
    "💫"

];


function createDecoration() {

    const container =
        document.getElementById(
            "decorations"
        );


    if (!container) {
        return;
    }


    const item =
        document.createElement("div");


    item.className =
        "floating-decoration";


    item.textContent =
        decorations[
            Math.floor(
                Math.random()
                * decorations.length
            )
        ];


    item.style.left =
        Math.random() * 100 + "vw";


    item.style.fontSize =
        15 +
        Math.random() * 25 +
        "px";


    item.style.animationDuration =
        4 +
        Math.random() * 4 +
        "s";


    container.appendChild(item);


    setTimeout(() => {

        item.remove();

    }, 8000);

}


setInterval(
    createDecoration,
    450
);


/* =========================================
   LITTLE SPARKLE EFFECT
========================================= */

function createSparkle() {

    const sparkle =
        document.createElement("div");


    sparkle.className =
        "sparkle";


    sparkle.textContent = "✦";


    sparkle.style.left =
        Math.random() * 100 + "vw";


    sparkle.style.top =
        Math.random() * 100 + "vh";


    document.body.appendChild(
        sparkle
    );


    setTimeout(() => {

        sparkle.remove();

    }, 1500);

}


setInterval(
    createSparkle,
    350
);