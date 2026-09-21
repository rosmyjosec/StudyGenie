package dao;

import databases.DBConnection;
import model.Subject;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class SubjectDAO {

    public boolean addSubject(Subject subject) {

        String sql =
                "INSERT INTO subjects(subject_name,difficulty) VALUES(?,?)";

        try {

            Connection con =
                    DBConnection.getConnection();

            PreparedStatement ps =
                    con.prepareStatement(sql);

            ps.setString(1, subject.getSubjectName());
            ps.setString(2, subject.getDifficulty());

            return ps.executeUpdate() > 0;

        } catch (Exception e) {

            e.printStackTrace();
            return false;

        }
    }

    public List<Subject> getAllSubjects() {

        List<Subject> subjects =
                new ArrayList<>();

        try {

            Connection con =
                    DBConnection.getConnection();

            PreparedStatement ps =
                    con.prepareStatement(
                            "SELECT * FROM subjects"
                    );

            ResultSet rs =
                    ps.executeQuery();

            while (rs.next()) {

                subjects.add(
                        new Subject(
                                rs.getString("subject_name"),
                                rs.getString("difficulty")
                        )
                );
            }

        } catch (Exception e) {

            e.printStackTrace();

        }

        return subjects;
    }

    public boolean deleteSubject(String subjectName) {

        String sql =
                "DELETE FROM subjects WHERE subject_name=?";

        try {

            Connection con =
                    DBConnection.getConnection();

            PreparedStatement ps =
                    con.prepareStatement(sql);

            ps.setString(1, subjectName);

            return ps.executeUpdate() > 0;

        } catch (Exception e) {

            e.printStackTrace();
            return false;

        }
    }
}