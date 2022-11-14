import java.sql.Connection;
import java.sql.DriverManager;

public class DataBaseConnection { private final static  String PASSWORD  = "root";
    private final static  String DATABASE_NAME  = "functionUpDB";
    private final static  String USER  = "root";
    private final static  String CONNECTION_URL   =  "jdbc:mysql://localhost:3306/" + DATABASE_NAME + "?useSSL=false"  ;


    public static Connection getConnection() throws  Exception{
        Class.forName("com.mysql.cj.jdbc.Driver");
        Connection connection = DriverManager.getConnection(CONNECTION_URL , USER , PASSWORD);
        return connection;
    }
}
