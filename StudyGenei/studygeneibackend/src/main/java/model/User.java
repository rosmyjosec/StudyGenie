package model;

public class User {

    private String fullName;
    private String email;
    private String password;
    private String course;
    private String semester;

    // Constructor
    public User(String fullName, String email, String password,
                String course, String semester) {

        this.fullName = fullName;
        this.email = email;
        this.password = password;
        this.course = course;
        this.semester = semester;
    }

    // Getters
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

    // Setters
    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setCourse(String course) {
        this.course = course;
    }

    public void setSemester(String semester) {
        this.semester = semester;
    }
}