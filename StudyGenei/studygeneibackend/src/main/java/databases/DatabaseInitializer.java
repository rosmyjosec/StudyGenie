package databases;

import java.sql.Connection;
import java.sql.Statement;

public class DatabaseInitializer {

    public static void initialize() {

        String sql = """
                CREATE TABLE IF NOT EXISTS users (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    full_name TEXT NOT NULL,
                    email TEXT UNIQUE NOT NULL,
                    password TEXT NOT NULL,
                    course TEXT,
                    semester TEXT
                );
                """;
                String createSubjectsTable = """
CREATE TABLE IF NOT EXISTS subjects(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    subject_name TEXT NOT NULL,
    difficulty TEXT NOT NULL
)
""";

String createExamsTable = """
CREATE TABLE IF NOT EXISTS exams(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    subject_name TEXT NOT NULL,
    exam_date TEXT NOT NULL
)
""";
        String createProfileTable = """
CREATE TABLE IF NOT EXISTS profile(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    full_name TEXT,
    email TEXT,
    course TEXT,
    semester TEXT,
    bio TEXT,
    image_url TEXT
)
""";
        try {
            Connection con = DBConnection.getConnection();
            Statement stmt = con.createStatement();

            stmt.execute(sql);
            stmt.execute(createSubjectsTable);
            stmt.execute(createExamsTable);
            stmt.execute(createProfileTable);
            System.out.println("✅ Users table ready!");

        } catch (Exception e) {
            System.out.println("❌ Database initialization failed!");
            e.printStackTrace();
        }
    }
}