import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;

public class Student {
    static {
        String query = "CREATE TABLE `functionUpDB`.`students` (" +
                "  `firstName` VARCHAR(45) NULL," +
                "  `lastName` VARCHAR(45) NULL," +
                "  `id` INT NOT NULL AUTO_INCREMENT," +
                "  PRIMARY KEY (`id`)," +
                "  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE);";
        try {
            Connection connection = DataBaseConnection.getConnection();
            PreparedStatement statement = connection.prepareStatement(query);
            statement.executeQuery();
            System.out.println("Table Created...");
        } catch (Exception exception) {
            System.err.println(exception.getMessage());
        }
    }

    private String firstName;
    private String lastName;
    private int id;

    public Student(String firstName, String lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    public Student(String firstName, String lastName , int id ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = id;
    }

    @Override
    public String toString() {
        return "Student{" +
                "firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", id=" + id +
                '}';
    }

    public void saveStudent() throws Exception {
        String query = "INSERT INTO `students` (`firstName`, `lastName`) VALUES (?, ?);";
        Connection connection = DataBaseConnection.getConnection();
        PreparedStatement statement = connection.prepareStatement(query, PreparedStatement.RETURN_GENERATED_KEYS);
        statement.setString(1, this.firstName);
        statement.setString(2, this.lastName);
        int count = statement.executeUpdate();
        ResultSet keys = statement.getGeneratedKeys();
        while (keys.next()) {
            this.setId(keys.getInt(1));
        }
    }

    public static ArrayList<Student> getAllStudents() throws Exception {
        String query = "SELECT firstName , lastName , id from `students`;";
        Connection connection = DataBaseConnection.getConnection();
        PreparedStatement statement = connection.prepareStatement(query);
        ResultSet results =statement.executeQuery();
        ArrayList<Student> students = new ArrayList<>();
        while (results.next()) {
            Student student = new Student(results.getString(1) , results.getString(2) , results.getInt(3));
            students.add(student);
        }

        return students;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }
}
