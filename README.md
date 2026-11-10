# 📚 StudyGenie – AI Study Planner

**Plan Smarter. Study Better. Achieve More.**

StudyGenie is a student productivity and study management web application designed to help students organize their academic activities, prepare for examinations, and manage their study schedules efficiently.

The application brings essential study tools together in one place, allowing students to manage subjects, track upcoming examinations, create study timetables, monitor progress, and maintain productive study habits.

---

## 🌟 Project Overview

Students often struggle to balance multiple subjects, examination schedules, assignments, and daily study activities. Managing these tasks manually can become confusing and time-consuming.

**StudyGenie** aims to simplify this process by providing a centralized platform for academic planning and productivity.

With a clean and user-friendly interface, StudyGenie helps students organize their academic responsibilities, stay consistent with their study routines, and make better use of their time.

## ✨ Key Features

### 1. 🔐 User Authentication
- User registration and login.
- Account-based access to the application.
- User information stored in an SQLite database.

### 2. 📅 Timetable Creator
- Create personalized study timetables.
- Organize study sessions according to subjects and days.
- Manage study schedules efficiently.
- Download the generated timetable as a PDF.

### 3. 📖 Subjects & Exams Management
- Add and manage academic subjects.
- Assign difficulty levels to subjects.
- Add examination dates.
- View upcoming examinations.
- Track the number of days remaining until an examination.
- Delete subjects and examination records.

### 4. ⏱️ Pomodoro Timer
- Use a focused study timer.
- Organize study sessions with breaks.
- Improve concentration and time management.

### 5. 📊 Progress Tracker & Analytics
- Monitor study-related progress.
- View academic information through an analytics section.
- Understand study activity and identify areas that need improvement.

### 6. ✅ To-Do List
- Organize daily academic tasks.
- Keep track of pending activities.
- Manage study-related responsibilities.

### 7. 💡 Study Tips
- Access useful study tips and productivity-related content.
- Explore study-related video resources.
- Discover techniques to improve learning habits.

### 8. 🔔 Reminders
- Maintain reminders for important academic activities.
- Keep track of tasks and upcoming responsibilities.
- Uses browser local storage for reminder data.

### 9. 👤 Profile Settings
- View and manage personal profile information.
- Update profile details.
- Store profile settings in the database.

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Structure of the web application |
| CSS3 | Styling, layouts and responsive interface |
| JavaScript | Frontend functionality and interactivity |
| Java | Backend application development |
| Javalin | Java web framework for REST API development |
| SQLite | Database management and data storage |
| JDBC | Java database connectivity |
| Maven | Dependency management and project build |
| Git & GitHub | Version control and project hosting |
| VS Code | Development environment |

---

## 🏗️ System Architecture

StudyGenie follows a client-server architecture.

1. **Frontend:** HTML, CSS and JavaScript provide the user interface and handle user interactions.
2. **Backend:** Java and Javalin process requests received from the frontend.
3. **Database:** SQLite stores user details, subjects, examinations and profile information.
4. **Communication:** The frontend communicates with the backend through HTTP requests and REST API endpoints.

### Architecture Flow

```text
        USER
          |
          v
   FRONTEND INTERFACE
   HTML | CSS | JavaScript
          |
          v
     HTTP REQUESTS
          |
          v
    JAVA BACKEND
       Javalin
          |
          v
      JDBC LAYER
          |
          v
     SQLITE DATABASE
          |
          v
     STORED DATA
```

---

## 📂 Project Structure

The project is organized into frontend and backend components.

```text
StudyGenie/
│
├── Frontend/
│   ├── login.html
│   ├── signup.html
│   ├── dashboard.html
│   ├── timetable.html
│   ├── subjectsandexams.html
│   ├── pomodoro.html
│   ├── progress.html
│   ├── analytics.html
│   ├── todo.html
│   ├── studytips.html
│   ├── remainders.html
│   ├── profile.html
│   ├── CSS/
│   └── JS/
│
└── Backend/
    ├── pom.xml
    ├── studygenie.db
    └── src/
        └── main/
            └── java/
                ├── com/
                │   └── studygenei/
                │       └── Main.java
                ├── dao/
                ├── databases/
                └── model/
```

*Note: Adjust the folder and file names above to match the actual structure of your GitHub repository.*

---

## ⚙️ Installation & Setup

Follow these instructions to run StudyGenie on your local machine.

### Prerequisites

Install the following before running the project:

- Java Development Kit (JDK)
- Apache Maven
- Visual Studio Code or another Java IDE
- A modern web browser
- Live Server extension (recommended for running the frontend)

### Step 1: Clone the Repository

Open your terminal and execute:

```bash
git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
```

Navigate to the project directory:

```bash
cd YOUR-REPOSITORY
```

### Step 2: Start the Backend

Open the backend folder in your terminal:

```bash
cd studygeneibackend
```

Compile the project:

```bash
mvn clean compile
```

Start the Java backend server:

```bash
mvn exec:java
```

The backend will run at:

```text
http://localhost:7000
```

The SQLite database is initialized by the application when the backend starts.

### Step 3: Start the Frontend

1. Open the frontend folder in Visual Studio Code.
2. Install the Live Server extension if it is not already installed.
3. Open `login.html`.
4. Right-click and select **Open with Live Server**.
5. Register an account or log in to access the application.

**Important:** Keep the backend server running while using features that communicate with the database.

---

## 🔗 Backend API Endpoints

StudyGenie uses REST API endpoints to communicate between the frontend and backend.

| HTTP Method | Endpoint | Description |
|---|---|---|
| GET | `/` | Check backend server status |
| POST | `/signup` | Register a new user |
| POST | `/login` | Authenticate a user |
| GET | `/subjects` | Retrieve subjects |
| POST | `/subjects` | Add a subject |
| DELETE | `/subjects/{name}` | Delete a subject |
| GET | `/exams` | Retrieve examinations |
| POST | `/exams` | Add an examination |
| DELETE | `/exams/{subject}/{date}` | Delete an examination |
| GET | `/profile` | Retrieve profile information |
| POST | `/profile` | Save profile information |
| GET | `/analytics` | Retrieve analytics data |

---

## 🎯 Project Objectives

- To develop a centralized academic management platform for students.
- To simplify examination and study schedule planning.
- To improve time management and productivity.
- To provide convenient tools for managing subjects and examinations.
- To encourage consistent study habits through productivity tools.
- To demonstrate the practical implementation of Java, JDBC, REST APIs and database operations.

---

## ✅ Advantages

- Simple and user-friendly interface.
- Multiple academic management tools in one application.
- Efficient organization of subjects and examination schedules.
- Centralized storage of important academic information.
- Improved time management and study planning.
- Practical application of frontend and backend technologies.

## ⚠️ Limitations

- Requires a running backend server for database-dependent features.
- Designed primarily for local development and demonstration.
- Some features, such as reminders, use browser local storage.
- Advanced cloud synchronization and multi-device access are not currently included.

---

## 🚀 Future Enhancements

The project can be extended with the following features:

- AI-powered personalized study recommendations.
- Smart timetable generation based on subject difficulty and available study hours.
- Cloud-based database and synchronization.
- Email and push notifications for examination reminders.
- Advanced performance analytics and visual reports.
- Mobile application integration.
- Collaborative study planning and sharing.
- Secure password hashing and enhanced authentication.

---

## 🎓 Project Information

| Detail | Information |
|---|---|
| Project Name | StudyGenie |
| Project Type | Java Mini Project |
| Domain | Student Productivity & Academic Management |
| Frontend | HTML, CSS, JavaScript |
| Backend | Java, Javalin |
| Database | SQLite |
| Build Tool | Maven |
| Academic Level | B.Tech Computer Science and Engineering |

---

## 👩‍💻 Contributors

This project was developed collaboratively as part of an academic mini-project.

- **ROSMY JOSE C** – [GitHub Username]
- **MANNA MARIYA SHEFFY** – [GitHub Username]
- **SANVYA SANDEEP** – [GitHub Username]
- **SIVADARSAN A R** – [GitHub Username]

---

## 📄 License

This project was developed for academic and educational purposes.

---

## 💜 Acknowledgement

We would like to thank our faculty members, mentors and everyone who supported us throughout the development of this project.

**StudyGenie – Your Personal Companion for Smarter Studying!**

⭐ If you find this project interesting, consider giving this repository a star.


