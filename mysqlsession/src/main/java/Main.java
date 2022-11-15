import java.util.ArrayList;
import java.util.Date;
import java.util.Scanner;

class Main {

    public static String getMessage (){
        return "Hello Wordl..";
    }

    public static void main(String[] args) throws Exception
    {

        System.out.println(Student.getLastStudent());
        System.out.println(Student.getFirstStudent());
        System.out.println(Student.getCount());


//        Student student = new Student("Viren" , "Kuamr" , 0);
//        student.update();


//        deleteStudent();
//        runStudentCreationApp();

//        ArrayList<Student> students = Student.getAllStudents();
//        for (Student student : students) {
//            System.out.println(student);
//        }
    }


    public static void deleteStudent(int id) {
        boolean success =  Student.deleteStudentById(id);
        if(success){
            System.out.println("Deleted Student");
        }else{
            System.out.println("Can not delete..");
        }
    }

    public static void runStudentCreationApp () throws  Exception{
        Scanner console = new Scanner(System.in);
        String next = "yes";
        while(next.equalsIgnoreCase("yes")){

            System.out.println("First Name : ");
            String fname = console.nextLine();

            System.out.println("Last Name : ");
            String lName = console.nextLine();

            Student student = new Student(fname , lName);
            student.saveStudent();

            System.out.println("Student Saved...");
            System.out.println("Do you want to save next - Yes/No");
            next = console.nextLine();
        }
    }

}

