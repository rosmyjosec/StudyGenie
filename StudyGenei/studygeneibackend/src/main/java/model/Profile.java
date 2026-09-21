package model;

public class Profile {

    private String fullName;
    private String email;
    private String course;
    private String semester;
    private String bio;
    private String imageUrl;

    public Profile(){}

    public Profile(String fullName,
                   String email,
                   String course,
                   String semester,
                   String bio,
                   String imageUrl){

        this.fullName = fullName;
        this.email = email;
        this.course = course;
        this.semester = semester;
        this.bio = bio;
        this.imageUrl = imageUrl;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getCourse() {
        return course;
    }

    public void setCourse(String course) {
        this.course = course;
    }

    public String getSemester() {
        return semester;
    }

    public void setSemester(String semester) {
        this.semester = semester;
    }

    public String getBio() {
        return bio;
    }

    public void setBio(String bio) {
        this.bio = bio;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }
}