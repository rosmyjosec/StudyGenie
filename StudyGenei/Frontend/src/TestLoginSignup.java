import dao.UserDAO;
import model.User;

public class TestLoginSignup {

    public static void main(String[] args) {

        UserDAO dao = new UserDAO();

        User user = new User(
                "Rosmy Jose",
                "rosmy123@gmail.com",
                "123456",
                "BTech CSE",
                "S3"
        );

        boolean registered = dao.registerUser(user);

        if(registered) {
            System.out.println("Signup Successful!");
        } else {
            System.out.println("Signup Failed!");
        }

        boolean login =
                dao.loginUser("rosmy123@gmail.com", "123456");

        if(login) {
            System.out.println("Login Successful!");
        } else {
            System.out.println("Invalid Credentials!");
        }
    }
}