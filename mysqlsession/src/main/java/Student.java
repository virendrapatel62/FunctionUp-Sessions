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
            statement.executeUpdate();
            System.out.println("Table Created...");
            connection.close();
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

    public Student(String firstName, String lastName, int id) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = id;
    }

    public static boolean deleteStudentById(int id) {
        try {
            String query = "Delete FROM students where id = ?";
            Connection connnection = DataBaseConnection.getConnection();
            PreparedStatement statement = connnection.prepareStatement(query);
            statement.setInt(1, id);
            int count = statement.executeUpdate();
            connnection.close();
            if (count > 0) {
                return true;
            }
            return false;

        } catch (Exception exception) {
            System.err.println(exception.getMessage());
            return false;
        }

    }

    public static int getCount() throws Exception {
        String query = "select count(*) from students;";
        int count = 0;

        Connection connection = DataBaseConnection.getConnection();
        PreparedStatement statement = connection.prepareStatement(query);
        ResultSet results = statement.executeQuery();
//    6
        if (results.next()) {
            count = results.getInt(1);
        }
        connection.close();

        return count;
    }


//    create Query
//    create DB connection
//    prepare statement
//    set Dynamic value;
//    execute query
//    connection close

    public static Student getFirstStudent() {
        String query = "select firstName , lastName , id from students order by id asc limit 1";
        Student student = null;
        try {
            Connection connection = DataBaseConnection.getConnection();
            PreparedStatement statement = connection.prepareStatement(query);
            ResultSet results = statement.executeQuery();

            while (results.next()) {
                student = new Student(results.getString(1), results.getString(2), results.getInt(3));
            }
            connection.close();
        } catch (Exception e) {
            return null;
        }

        return student;
    }

    public static Student getLastStudent() {
        String query = "select firstName , lastName , id from students order by id desc limit 1";
        Student student = null;
        try {
            Connection connection = DataBaseConnection.getConnection();
            PreparedStatement statement = connection.prepareStatement(query);
            ResultSet results = statement.executeQuery();

            while (results.next()) {
                student = new Student(results.getString(1), results.getString(2), results.getInt(3));
            }
            connection.close();
        } catch (Exception e) {
            return null;
        }

        return student;
    }

    public static ArrayList<Student> getAllStudents() throws Exception {
        ArrayList<Student> students = new ArrayList<>(); // [  {'Virendra', 'Patel', '1'} , {Sandeep', 'Yadav', '2'}  ]
        try {
            String query = "SELECT firstName , lastName , id from `students`;";
            Connection connection = DataBaseConnection.getConnection();
            PreparedStatement statement = connection.prepareStatement(query);
            ResultSet results = statement.executeQuery();

//#             firstName, lastName, id  -
//            'Virendra', 'Patel', '1'
//            'Sandeep', 'Yadav', '2'
//p
            while (results.next()) {
                Student student = new Student(results.getString(1), results.getString(2), results.getInt(3));
                students.add(student);
            }
            connection.close();
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
        return students;
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
        String query = "INSERT INTO `students` (`firstName`, `lastName`) VALUES ( ? , ? )";
        Connection connection = DataBaseConnection.getConnection();
        PreparedStatement statement = connection.prepareStatement(query, PreparedStatement.RETURN_GENERATED_KEYS);
        statement.setString(1, this.firstName);
        statement.setString(2, this.lastName);
        int count = statement.executeUpdate();
        System.out.println(count + " number of rows effected.");
        ResultSet keys = statement.getGeneratedKeys();

        while (keys.next()) {
            this.setId(keys.getInt(1));
        }
        connection.close();

    }

    public Student update() throws Exception {

        String query = "update students set firstName = ?,  lastName = ? where id = ?";
        Connection connection = DataBaseConnection.getConnection();
        PreparedStatement statement = connection.prepareStatement(query);

        statement.setString(1, this.firstName);
        statement.setString(2, this.lastName);
        statement.setInt(3, this.id);

        int count = statement.executeUpdate();

        if (count > 0) {
            return this;
        }

        throw new Exception("Updation Failed..");

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
