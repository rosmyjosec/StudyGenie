document.getElementById("loginForm").addEventListener("submit", async (e) => {

    e.preventDefault();

    const loginData = {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    };

    try {

        const response = await fetch("http://localhost:7000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(loginData)
        });

        const message = await response.text();

        alert(message);

        if (response.ok) {

            alert("Login Successful!");

            // Change this later to your dashboard page
            window.location.href = "dashboard.html";
        }

    } catch (error) {

        console.error("Login Error:", error);
        alert("Unable to connect to StudyGenie server.");
    }
});