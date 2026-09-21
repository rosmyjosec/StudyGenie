import static spark.Spark.*;

public class Main {

    public static void main(String[] args) {

        port(4567);

        get("/", (req, res) -> {
            return "StudyGenie Server Running!";
        });

        System.out.println("StudyGenie Server Started");
        System.out.println("http://localhost:4567");
    }
}
