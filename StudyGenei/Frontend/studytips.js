// ======================
// Typing Animation
// ======================

const text = "Study Tips & Learning Hub";

let index = 0;

function typeText() {

    if (index < text.length) {

        document.getElementById("typing").innerHTML += text.charAt(index);

        index++;

        setTimeout(typeText, 80);
    }
}

window.onload = () => {
    typeText();
};


// ======================
// Motivational Quotes
// ======================

const quotes = [

    "Small daily improvements lead to big results.",

    "Success is the sum of small efforts repeated every day.",

    "Study now. Shine later.",

    "Discipline beats motivation.",

    "Dream big. Start small. Act now.",

    "Every page you read is progress.",

    "Consistency creates confidence.",

    "Focus on your goals, not obstacles.",

    "Your future self will thank you.",

    "One hour of study today saves ten hours tomorrow."
];

const quoteElement = document.getElementById("quote");

let quoteIndex = 0;

function changeQuote() {

    quoteElement.style.opacity = "0";

    setTimeout(() => {

        quoteIndex++;

        if (quoteIndex >= quotes.length) {
            quoteIndex = 0;
        }

        quoteElement.innerHTML = quotes[quoteIndex];

        quoteElement.style.opacity = "1";

    }, 500);
}

setInterval(changeQuote, 5000);


// ======================
// Scroll Reveal Animation
// ======================

const cards = document.querySelectorAll(".video-card");

function revealCards() {

    cards.forEach(card => {

        const cardTop = card.getBoundingClientRect().top;

        const triggerPoint = window.innerHeight - 100;

        if (cardTop < triggerPoint) {

            card.classList.add("show");
        }
    });
}

window.addEventListener("scroll", revealCards);

window.addEventListener("load", revealCards);


// ======================
// Logo Click Animation
// ======================

const logo = document.querySelector(".hero-logo img");

if (logo) {

    logo.addEventListener("click", () => {

        logo.style.transform = "scale(1.15)";

        setTimeout(() => {

            logo.style.transform = "";

        }, 300);
    });
}


// ======================
// Smooth Page Loading
// ======================

document.body.style.opacity = "0";

window.addEventListener("load", () => {

    document.body.style.transition = "opacity 1s ease";

    document.body.style.opacity = "1";
});


// ======================
// Video Card Hover Sound Effect (Optional)
// ======================

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transition = "all 0.4s ease";

    });

});


// ======================
// Floating Title Effect
// ======================

const title = document.getElementById("typing");

setInterval(() => {

    title.style.transform = "translateY(-5px)";

    setTimeout(() => {

        title.style.transform = "translateY(0px)";

    }, 1000);

}, 2000);


// ======================
// Greeting Based on Time
// ======================

const hour = new Date().getHours();

let greeting = "";

if (hour < 12) {

    greeting = " Good Morning, Keep Learning!";

} else if (hour < 17) {

    greeting = " Good Afternoon, Study Smart!";

} else {

    greeting = " Good Evening, Keep Growing!";
}

setTimeout(() => {

    const greetingDiv = document.createElement("div");

    greetingDiv.innerHTML = greeting;

    greetingDiv.style.position = "fixed";
    greetingDiv.style.top = "20px";
    greetingDiv.style.right = "20px";
    greetingDiv.style.padding = "12px 18px";
    greetingDiv.style.background = "#7b4ca0";
    greetingDiv.style.color = "white";
    greetingDiv.style.borderRadius = "12px";
    greetingDiv.style.boxShadow = "0 10px 20px rgba(0,0,0,0.15)";
    greetingDiv.style.zIndex = "999";

    document.body.appendChild(greetingDiv);

    setTimeout(() => {

        greetingDiv.remove();

    }, 5000);

}, 1500);