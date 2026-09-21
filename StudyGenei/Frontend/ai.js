const chatInput = document.getElementById("chat-input");
const chatBody = document.getElementById("chat-body");
const sendBtn = document.getElementById("send-btn");
const chatToggle = document.getElementById("chat-toggle");
const chatbot = document.getElementById("chatbot");
const closeChat = document.getElementById("close-chat");

chatToggle.addEventListener("click", () => {
    chatbot.style.display = "flex";
});

closeChat.addEventListener("click", () => {
    chatbot.style.display = "none";
});

const knowledgeBase = {

    greetings: [
        "Hello 👋 I'm StudyGenie Assistant. How can I help you today?",
        "Hi there 💜 Welcome back to StudyGenie!",
        "Hey! Ready to boost your productivity today?"
    ],

    studygenie: [
        "StudyGenie is an AI-powered Smart Learning Assistant designed to help students plan, study, track progress, and achieve academic goals.",
        "StudyGenie combines Timetable Creation, Pomodoro Timer, Progress Tracking, Study Tips, Goal Setting, Analysis and AI Guidance in one platform."
    ],

    timetable: [
        "The Timetable Creator generates personalized study schedules based on your subjects, exam dates, and available study hours.",
        "A smart timetable helps balance difficult and easy subjects efficiently."
    ],

    pomodoro: [
        "The Pomodoro Timer uses focused study sessions followed by short breaks to improve concentration.",
        "Recommended technique: 25 minutes study + 5 minutes break. After 4 sessions, take a longer break."
    ],

    progress: [
        "The Progress Tracker helps monitor completed tasks, study hours, and consistency.",
        "Tracking your progress daily improves accountability and motivation."
    ],

    goals: [
        "Set SMART Goals: Specific, Measurable, Achievable, Relevant and Time-Bound.",
        "Break large goals into smaller daily tasks for better success."
    ],

    studytips: [
        "Use Active Recall instead of passive reading.",
        "Practice Spaced Repetition for long-term memory retention.",
        "Study difficult subjects when your energy level is highest."
    ],

    exams: [
        "Prepare module-wise and solve previous year question papers.",
        "Focus on important concepts first, then move to advanced topics.",
        "Revision is more important than learning new topics before exams."
    ],

    ktu: [
        "For KTU exams, study module-wise and focus on frequently repeated questions.",
        "Prepare 5-mark and 10-mark answers separately.",
        "Practice diagrams and definitions thoroughly."
    ],

    coding: [
        "Build small projects consistently to improve coding skills.",
        "Practice Java, HTML, CSS, JavaScript and Data Structures regularly.",
        "Projects teach more practical skills than tutorials."
    ],

    career: [
        "Strong projects, internships and problem-solving skills are important for software engineering careers.",
        "Maintain a portfolio and GitHub profile to showcase your work.",
        "Consistency is more valuable than intensity."
    ],

    motivation: [
        "Small progress every day leads to big achievements.",
        "Don't compare your Chapter 1 with someone else's Chapter 20.",
        "Your future self will thank you for studying today."
    ],

    dashboard: [
        "The Dashboard is the central hub of StudyGenie where all tools are connected.",
        "You can access Timetable Creator, Study Tips, Goals, Pomodoro Timer, Progress Tracking and Analysis from the Dashboard."
    ],

    analysis: [
        "Analysis helps identify strengths, weaknesses and study patterns.",
        "Use analytics regularly to improve your study strategy."
    ]
};

function addMessage(message, sender) {

    const msgDiv = document.createElement("div");
    msgDiv.classList.add("message", sender);

    msgDiv.innerHTML = message;

    chatBody.appendChild(msgDiv);

    chatBody.scrollTop = chatBody.scrollHeight;
}

function addTypingIndicator() {

    const typing = document.createElement("div");

    typing.classList.add("message", "bot");

    typing.id = "typing";

    typing.innerHTML = "StudyGenie is typing...";

    chatBody.appendChild(typing);

    chatBody.scrollTop = chatBody.scrollHeight;
}

function removeTypingIndicator() {

    const typing = document.getElementById("typing");

    if (typing) typing.remove();
}

function getBotResponse(text) {

    text = text.toLowerCase();

    if (
        text.includes("hello") ||
        text.includes("hi") ||
        text.includes("hey")
    ) {
        return randomResponse(knowledgeBase.greetings);
    }

    if (
        text.includes("studygenie") ||
        text.includes("about")
    ) {
        return randomResponse(knowledgeBase.studygenie);
    }

    if (
        text.includes("timetable") ||
        text.includes("schedule")
    ) {
        return randomResponse(knowledgeBase.timetable);
    }

    if (
        text.includes("pomodoro") ||
        text.includes("timer") ||
        text.includes("focus")
    ) {
        return randomResponse(knowledgeBase.pomodoro);
    }

    if (
        text.includes("progress") ||
        text.includes("tracker")
    ) {
        return randomResponse(knowledgeBase.progress);
    }

    if (
        text.includes("goal") ||
        text.includes("target")
    ) {
        return randomResponse(knowledgeBase.goals);
    }

    if (
        text.includes("study tips") ||
        text.includes("tips") ||
        text.includes("revision")
    ) {
        return randomResponse(knowledgeBase.studytips);
    }

    if (
        text.includes("exam") ||
        text.includes("semester")
    ) {
        return randomResponse(knowledgeBase.exams);
    }

    if (
        text.includes("ktu")
    ) {
        return randomResponse(knowledgeBase.ktu);
    }

    if (
        text.includes("java") ||
        text.includes("coding") ||
        text.includes("programming")
    ) {
        return randomResponse(knowledgeBase.coding);
    }

    if (
        text.includes("career") ||
        text.includes("job") ||
        text.includes("software engineer")
    ) {
        return randomResponse(knowledgeBase.career);
    }

    if (
        text.includes("motivation") ||
        text.includes("sad") ||
        text.includes("stress")
    ) {
        return randomResponse(knowledgeBase.motivation);
    }

    if (
        text.includes("dashboard")
    ) {
        return randomResponse(knowledgeBase.dashboard);
    }

    if (
        text.includes("analysis")
    ) {
        return randomResponse(knowledgeBase.analysis);
    }

    return `
    I couldn't fully understand that question.

    Try asking about:
    
    • Study Tips
    • Timetable Creation
    • Pomodoro Timer
    • Goals
    • Progress Tracking
    • Analysis
    • KTU Exams
    • Java Programming
    • Career Guidance
    • Motivation
    `;
}

function randomResponse(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function sendMessage() {

    const userText = chatInput.value.trim();

    if (userText === "") return;

    addMessage(userText, "user");

    chatInput.value = "";

    addTypingIndicator();

    setTimeout(() => {

        removeTypingIndicator();

        const response = getBotResponse(userText);

        addMessage(response, "bot");

    }, 1200);
}

sendBtn.addEventListener("click", sendMessage);

chatInput.addEventListener("keypress", function(e) {

    if (e.key === "Enter") {

        sendMessage();

    }

});

window.onload = () => {

    setTimeout(() => {

        addMessage(
            `
            👋 Welcome to <b>StudyGenie Assistant</b><br><br>

            I can help you with:
            <br>📅 Timetable Creation
            <br>⏱ Pomodoro Timer
            <br>🎯 Goal Setting
            <br>📈 Progress Tracking
            <br>📚 Study Tips
            <br>📊 Analysis
            <br>🎓 KTU Exam Guidance
            <br>💻 Coding & Career Advice
            <br><br>
            Ask me anything!
            `,
            "bot"
        );

    }, 700);
};