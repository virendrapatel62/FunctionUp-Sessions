public class MutableClass {
    public static void main(String[] args) {
        Student student  = new Student(24 , "Virendra");
        System.out.println(student);
//        student.age = 23 ;
        System.out.println(student);
    }
}


class Student{
    final int age ;
    final String name ;  // same as const in javascript

    public Student(int age , String name){
        this.age = age;

        this.name = name;
    }

    @Override
    public String toString() {
        return this.name + " -- " + this.age;
    }
}