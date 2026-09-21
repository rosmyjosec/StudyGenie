package model;

public class Exam {

    private String subjectName;
    private String examDate;

    public Exam() {
    }

    public Exam(String subjectName, String examDate) {
        this.subjectName = subjectName;
        this.examDate = examDate;
    }

    public String getSubjectName() {
        return subjectName;
    }

    public void setSubjectName(String subjectName) {
        this.subjectName = subjectName;
    }

    public String getExamDate() {
        return examDate;
    }

    public void setExamDate(String examDate) {
        this.examDate = examDate;
    }
}