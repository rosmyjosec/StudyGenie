package model;

public class Subject {

    private String subjectName;
    private String difficulty;

    public Subject() {
    }

    public Subject(String subjectName, String difficulty) {
        this.subjectName = subjectName;
        this.difficulty = difficulty;
    }

    public String getSubjectName() {
        return subjectName;
    }

    public void setSubjectName(String subjectName) {
        this.subjectName = subjectName;
    }

    public String getDifficulty() {
        return difficulty;
    }

    public void setDifficulty(String difficulty) {
        this.difficulty = difficulty;
    }
}
