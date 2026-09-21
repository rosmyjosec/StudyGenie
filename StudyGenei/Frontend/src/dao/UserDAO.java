package dao;

import database.DBConnection;
import model.User;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

public class UserDAO {

    public boolean registerUser(User user) {

        String sql =
        "INSERT INTO users(full_name,email,password,course,semester) VALUES(?,?,?,?,?)";

        try {

            Connection con = DBConnection.getConnection();

            PreparedStatement ps = con.prepareStatement(sql);

            ps.setString(1, user.getFullName());
            ps.setString(2, user.getEmail());
            ps.setString(3, user.getPassword());
            ps.setString(4, user.getCourse());
            ps.setString(5, user.getSemester());

            int rows = ps.executeUpdate();

            return rows > 0;

        } catch(Exception e) {
            e.printStackTrace();
        }

        return false;
    }

    public boolean loginUser(String email, String password) {

        String sql =
        "SELECT * FROM users WHERE email=? AND password=?";

        try {

            Connection con = DBConnection.getConnection();

            PreparedStatement ps = con.prepareStatement(sql);

            ps.setString(1, email);
            ps.setString(2, password);

            ResultSet rs = ps.executeQuery();

            return rs.next();

        } catch(Exception e) {
            e.printStackTrace();
        }

        return false;
    }
}