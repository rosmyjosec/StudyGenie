package dao;

import databases.DBConnection;
import model.Profile;

import java.sql.*;

public class ProfileDAO {

    public boolean saveProfile(Profile profile){

        String sql = """
        INSERT INTO profile
        (full_name,email,course,semester,bio,image_url)
        VALUES(?,?,?,?,?,?)
        """;

        try{
            Connection con = DBConnection.getConnection();

            PreparedStatement ps =
                    con.prepareStatement(sql);

            ps.setString(1, profile.getFullName());
            ps.setString(2, profile.getEmail());
            ps.setString(3, profile.getCourse());
            ps.setString(4, profile.getSemester());
            ps.setString(5, profile.getBio());
            ps.setString(6, profile.getImageUrl());

            return ps.executeUpdate() > 0;

        }catch(Exception e){
            e.printStackTrace();
            return false;
        }
    }

    public Profile getLatestProfile(){

        try{

            Connection con =
                    DBConnection.getConnection();

            PreparedStatement ps =
                    con.prepareStatement(
                    "SELECT * FROM profile ORDER BY id DESC LIMIT 1");

            ResultSet rs = ps.executeQuery();

            if(rs.next()){

                return new Profile(
                        rs.getString("full_name"),
                        rs.getString("email"),
                        rs.getString("course"),
                        rs.getString("semester"),
                        rs.getString("bio"),
                        rs.getString("image_url")
                );
            }

        }catch(Exception e){
            e.printStackTrace();
        }

        return null;
    }
}