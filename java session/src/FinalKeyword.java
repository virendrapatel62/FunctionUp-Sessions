//final =>  this is final
public class FinalKeyword {
    public static void main(String[] args) {

        final String name = "";

//                name = "Sandeep"
        Student2 student = new Student2();

        student.walk();
        student.write();
    }
}

//final class Human{
    class Human{
    int leg = 2;
    int hands = 2;

    public void write(){
        System.out.println("Writing..");
    }
    final public void walk(){
        System.out.println("Human is walking.");
    }
    private void fly(){
        System.out.println("Flying...");
    }

}
class Student2 extends Human {
    @Override
    public void write() {
        System.out.println("Stiudent is writing in amazing hand wrting..");
    }

//    @Override
//    public void walk() {
//        System.out.println("Stiudent is walking reverse");
//    }
}