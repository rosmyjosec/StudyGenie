document.getElementById("signupForm").addEventListener("submit", async (e) => {

    e.preventDefault();

    const userData = {
        fullName: document.getElementById("fullName").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        course: document.getElementById("course").value,
        semester: document.getElementById("semester").value
    };

    try {

        const response = await fetch("http://localhost:7000/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        });

        const message = await response.text();

        alert(message);

        if (response.ok) {
            alert("Account Created Successfully!");
            window.location.href = "login.html";
        }

    } catch (error) {

        console.error("Signup Error:", error);
        alert("Unable to connect to StudyGenie server.");
    }
});