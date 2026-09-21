package dao;

import databases.DBConnection;
import model.Exam;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class ExamDAO {

    public boolean addExam(Exam exam) {

        String sql =
                "INSERT INTO exams(subject_name,exam_date) VALUES(?,?)";

        try {

            Connection con =
                    DBConnection.getConnection();

            PreparedStatement ps =
                    con.prepareStatement(sql);

            ps.setString(1, exam.getSubjectName());
            ps.setString(2, exam.getExamDate());

            return ps.executeUpdate() > 0;

        } catch (Exception e) {

            e.printStackTrace();
            return false;

        }
    }

    public boolean deleteExam(String subjectName, String examDate) {

        String sql =
                "DELETE FROM exams WHERE subject_name=? AND exam_date=?";

        try {

            Connection con =
                    DBConnection.getConnection();

            PreparedStatement ps =
                    con.prepareStatement(sql);

            ps.setString(1, subjectName);
            ps.setString(2, examDate);

            return ps.executeUpdate() > 0;

        } catch (Exception e) {

            e.printStackTrace();
            return false;

        }
    }

    public List<Exam> getAllExams() {

        List<Exam> exams =
                new ArrayList<>();

        try {

            Connection con =
                    DBConnection.getConnection();

            PreparedStatement ps =
                    con.prepareStatement(
                            "SELECT * FROM exams"
                    );

            ResultSet rs =
                    ps.executeQuery();

            while (rs.next()) {

                exams.add(
                        new Exam(
                                rs.getString("subject_name"),
                                rs.getString("exam_date")
                        )
                );

            }

        } catch (Exception e) {

            e.printStackTrace();

        }

        return exams;
    }
}