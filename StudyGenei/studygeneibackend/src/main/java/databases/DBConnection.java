package databases;

import java.sql.Connection;
import java.sql.DriverManager;

public class DBConnection {

    private static final String URL = "jdbc:sqlite:studygenie.db";

    public static Connection getConnection() {

        try {

            Class.forName("org.sqlite.JDBC");

            Connection con = DriverManager.getConnection(URL);

            System.out.println("✅ Database Connected!");

            return con;

        } catch (Exception e) {

            System.out.println("❌ Database Connection Failed!");

            e.printStackTrace();

            return null;
        }
    }
}