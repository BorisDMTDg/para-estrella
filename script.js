// ==========================================
// INTRODUCCIÓN
// ==========================================

const startBtn = document.getElementById("startBtn");
const intro = document.getElementById("intro");

startBtn.addEventListener("click", () => {

    intro.classList.add("hide");

    setTimeout(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, 500);

});


// ==========================================
// ANIMACIONES DEL CONTENIDO
// ==========================================

const elements = document.querySelectorAll(
    ".content, .final-content"
);

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }

    });

}, {
    threshold: 0.15
});

elements.forEach(element => {
    observer.observe(element);
});


// ==========================================
// ANIMACIONES DE LAS FOTOS
// ==========================================

const photos = document.querySelectorAll(
    ".photo-frame, .photo-polaroid, .photo-circle"
);

const photoObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("photo-visible");

            // Ya no necesitamos observarla
            photoObserver.unobserve(entry.target);
        }

    });

}, {
    threshold: 0.15
});

photos.forEach(photo => {
    photoObserver.observe(photo);
});


// ==========================================
// CORAZONES FLOTANTES
// ==========================================

function createHeart() {

    const heart = document.createElement("div");

    heart.innerHTML = "♥";

    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "-30px";
    heart.style.fontSize =
        (Math.random() * 12 + 10) + "px";
    heart.style.color =
        "rgba(255, 145, 190, 0.35)";
    heart.style.pointerEvents = "none";
    heart.style.zIndex = "5";

    document.body.appendChild(heart);

    const duration =
        Math.random() * 4000 + 5000;

    heart.animate(
        [
            {
                transform: "translateY(0) rotate(0deg)",
                opacity: 0
            },
            {
                opacity: 0.8,
                offset: 0.2
            },
            {
                transform:
                    `translateY(-110vh) rotate(${Math.random() * 80 - 40}deg)`,
                opacity: 0
            }
        ],
        {
            duration: duration,
            easing: "linear"
        }
    );

    setTimeout(() => {
        heart.remove();
    }, duration);
}

setInterval(createHeart, 900);


// ==========================================
// PDF
// ==========================================

window.addEventListener("beforeprint", () => {
    document.body.classList.add("printing");
});

window.addEventListener("afterprint", () => {
    document.body.classList.remove("printing");
});