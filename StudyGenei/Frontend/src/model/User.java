package model;

public class User {

    private String fullName;
    private String email;
    private String password;
    private String course;
    private String semester;

    public User(String fullName, String email, String password,
                String course, String semester) {

        this.fullName = fullName;
        this.email = email;
        this.password = password;
        this.course = course;
        this.semester = semester;
    }

    public String getFullName() {
        return fullName;
    }

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }

    public String getCourse() {
        return course;
    }

    public String getSemester() {
        return semester;
    }
}