// ================= HERO ANIMATION =================
document.addEventListener("DOMContentLoaded", () => {

    const content = document.querySelector(".hero-content");

    if (content) {

        content.style.opacity = "0";
        content.style.transform = "translateY(30px)";

        setTimeout(() => {

            content.style.transition = "all 1s ease";
            content.style.opacity = "1";
            content.style.transform = "translateY(0)";

        }, 200);

    }

});


// ================= VIDEO MODAL =================
function openVideo(url) {

    const modal = document.getElementById("videoModal");
    const frame = document.getElementById("videoFrame");

    if (!modal || !frame) return;

    // Convert YouTube watch URL to embed URL
    if (url.includes("watch?v=")) {
        url = url.replace("watch?v=", "embed/");
    }

    // Autoplay enabled
    if (!url.includes("?")) {
        url += "?autoplay=1";
    } else {
        url += "&autoplay=1";
    }

    frame.src = url;

    modal.classList.remove("hidden");

    document.body.style.overflow = "hidden";

}

function closeVideo() {

    const modal = document.getElementById("videoModal");
    const frame = document.getElementById("videoFrame");

    if (!modal || !frame) return;

    frame.src = "";

    modal.classList.add("hidden");

    document.body.style.overflow = "auto";

}


// ================= CLOSE MODAL WHEN CLICKING OUTSIDE =================
window.addEventListener("click", (e) => {

    const modal = document.getElementById("videoModal");

    if (e.target === modal) {
        closeVideo();
    }

});


// ================= FILTER SYSTEM =================
const buttons = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".project-card");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        // Active button
        buttons.forEach(btn => btn.classList.remove("active"));

        button.classList.add("active");

        const filter = button.getAttribute("data-filter");

        cards.forEach(card => {

            const category = card.getAttribute("data-category");

            if (filter === "all" || category === filter) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

});


// ================= SCROLL ANIMATION =================
const animatedElements = document.querySelectorAll(
    ".about, .contact, .style-card"
);

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        } else {

            entry.target.classList.remove("show");

        }

    });

}, {
    threshold: 0.1
});

animatedElements.forEach(el => {

    el.classList.add("fade-up");

    observer.observe(el);

});