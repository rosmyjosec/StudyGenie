package com.studygenei;

import databases.DatabaseInitializer;
import dao.UserDAO;
import model.User;
import dao.SubjectDAO;
import dao.ExamDAO;
import dao.ProfileDAO;
import model.Subject;
import model.Exam;
import io.javalin.Javalin;
import java.util.Map;
import dao.ProfileDAO;
import model.Profile;

public class Main {

    public static void main(String[] args) {

        DatabaseInitializer.initialize();

        UserDAO userDAO = new UserDAO();

        SubjectDAO subjectDAO = new SubjectDAO();
        ExamDAO examDAO = new ExamDAO();
        ProfileDAO profileDAO = new ProfileDAO();
        Javalin app = Javalin.create(config -> {

    config.bundledPlugins.enableCors(cors -> {
        cors.addRule(it -> {
            it.anyHost();
        });
    });

}).start(7000);

        // Home Route
        app.get("/", ctx -> {
            ctx.result("StudyGenie Backend Running!");
        });

        // PASTE SIGNUP API HERE
        app.post("/signup", ctx -> {

    Map<String, String> data = ctx.bodyAsClass(Map.class);

    String fullName = data.get("fullName");
    String email = data.get("email");
    String password = data.get("password");
    String course = data.get("course");
    String semester = data.get("semester");

    User user = new User(
            fullName,
            email,
            password,
            course,
            semester
    );

    boolean success = userDAO.registerUser(user);

    if(success){
        ctx.result("Signup Successful");
    } else {
        ctx.status(400);
        ctx.result("Signup Failed");
    }
});


        // PASTE LOGIN API HERE
        app.post("/login", ctx -> {

    Map<String, String> data = ctx.bodyAsClass(Map.class);

    String email = data.get("email");
    String password = data.get("password");

    boolean success = userDAO.loginUser(email, password);

    if(success){
        ctx.result("Login Successful");
    } else {
        ctx.status(401);
        ctx.result("Invalid Email or Password");
    }
});

        app.post("/subjects", ctx -> {

    Subject subject =
            ctx.bodyAsClass(Subject.class);

    if(subjectDAO.addSubject(subject)){

        ctx.result("Subject Added");

    }else{

        ctx.status(400);
        ctx.result("Failed");

    }
});

app.get("/subjects", ctx -> {

    ctx.json(subjectDAO.getAllSubjects());

});

app.delete("/subjects/{name}", ctx -> {

    String name = ctx.pathParam("name");

    boolean success =
            subjectDAO.deleteSubject(name);

    if (success) {

        ctx.result("Deleted");

    } else {

        ctx.status(400);
        ctx.result("Delete Failed");

    }
});

app.post("/exams", ctx -> {

    Exam exam =
            ctx.bodyAsClass(Exam.class);

    if(examDAO.addExam(exam)){

        ctx.result("Exam Added");

    }else{

        ctx.status(400);
        ctx.result("Failed");

    }
});

app.get("/exams", ctx -> {

    ctx.json(examDAO.getAllExams());

});

app.delete("/exams/{subject}/{date}", ctx -> {

    String subject =
            ctx.pathParam("subject");

    String date =
            ctx.pathParam("date");

    boolean success =
            examDAO.deleteExam(subject, date);

    if(success){

        ctx.result("Exam Deleted");

    }else{

        ctx.status(400);
        ctx.result("Delete Failed");

    }
});

app.post("/profile", ctx -> {

    Profile profile =
            ctx.bodyAsClass(Profile.class);

    if(profileDAO.saveProfile(profile)){

        ctx.result("Profile Saved");

    }else{

        ctx.status(400);
        ctx.result("Failed");
    }
});
app.get("/profile", ctx -> {

    Profile profile =
            profileDAO.getLatestProfile();

    ctx.json(profile);
});


        System.out.println("=================================");
        System.out.println("🚀 StudyGenie Server Started");
        System.out.println("🌐 http://localhost:7000");
        System.out.println("=================================");
    }
}