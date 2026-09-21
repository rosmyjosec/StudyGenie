// ===============================
// STUDYGENIE DASHBOARD SCRIPT
// ===============================

// Typing Animation

const text = "Welcome Back to StudyGenie";
let index = 0;

function typeText() {

    const typingElement = document.getElementById("typing");

    if (!typingElement) return;

    if (index < text.length) {
        typingElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeText, 80);
    }
}

window.onload = () => {
    typeText();
};

// ===============================
// Hero Button Popup
// ===============================

const heroBtn = document.querySelector(".hero-btn");

if (heroBtn) {

    heroBtn.addEventListener("click", () => {

        alert(
            "Study Plan Creator page will be connected soon!"
        );

    });

}

// ===============================
// Card Hover Animation
// ===============================

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px) scale(1.03)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px) scale(1)";

    });

});

// ===============================
// Progress Counter Animation
// ===============================

const counters = document.querySelectorAll(".stat-card h2");

counters.forEach(counter => {

    const targetText = counter.innerText;

    const numericValue = parseInt(targetText);

    if (isNaN(numericValue)) return;

    let current = 0;

    const increment = Math.ceil(numericValue / 50);

    const updateCounter = () => {

        current += increment;

        if (current >= numericValue) {

            counter.innerText = targetText;

        } else {

            if (targetText.includes("%")) {
                counter.innerText = current + "%";
            } else {
                counter.innerText = current;
            }

            requestAnimationFrame(updateCounter);
        }

    };

    updateCounter();

});

// ===============================
// Daily Motivation Quotes
// ===============================

const quotes = [

    "Success is the sum of small efforts repeated day in and day out.",

    "Study while others are sleeping. Build while others are relaxing.",

    "Your future self will thank you for today's effort.",

    "Consistency beats intensity.",

    "Every chapter completed is a step closer to your dream."

];

const quoteText = document.querySelector(".quote-card p");

if (quoteText) {

    const randomQuote =
        quotes[Math.floor(Math.random() * quotes.length)];

    quoteText.innerText = randomQuote;
}

// ===============================
// Greeting Based On Time
// ===============================

const heroTitle = document.querySelector(".hero-card h2");

if (heroTitle) {

    const hour = new Date().getHours();

    if (hour < 12) {

        heroTitle.innerText = "Good Morning ☀️";

    } else if (hour < 18) {

        heroTitle.innerText = "Good Afternoon 🌸";

    } else {

        heroTitle.innerText = "Good Evening 🌙";

    }

}

// ===============================
// Today's Date
// ===============================

const subtitle = document.querySelector(".subtitle");

if (subtitle) {

    const today = new Date();

    const dateString =
        today.toLocaleDateString("en-IN", {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric"
        });

    subtitle.innerHTML =
        "Stay productive • " + dateString;

}

// ===============================
// Logout Button
// ===============================

const logoutBtn = document.querySelector(".logout-btn");

if (logoutBtn) {

    logoutBtn.addEventListener("click", () => {

        const confirmLogout =
            confirm("Are you sure you want to logout?");

        if (confirmLogout) {

            window.location.href = "login.html";

        }

    });

}