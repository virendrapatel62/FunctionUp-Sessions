package dsa.set;

import java.util.HashMap;
import java.util.HashSet;
import java.util.Objects;

class Student{
    String name ;
    int id ;

    Student(String name , int id){
        this.name = name ;
        this.id = id;
    }

    @Override
    public String toString() {
       return this.name + "";
    }

    @Override
    public boolean equals(Object obj) {
        Student another = (Student) obj;
//        System.out.println("Equal");

        return (another.id == this.id);
    }

    @Override
    public int hashCode() {
//        System.out.println("Hashcode");
        return this.name.hashCode();
    }
}

public class Main {
    public static void main(String[] args) {
        HashSet<Student> set = new HashSet();

//      STEPS : 1. [  ] , [  ]



//        set.add(12);
//        set.add(14);
//        set.add(13);
//        set.add(14);
//        set.add(12);
//        set.remove(14);
//        System.out.println(set);
//        set.clear();
//        System.out.println(set);



//         [new Student("Virendra" , 1) ] [new Student("Harsh" , 2)]

        set.add(new Student("Virendra" , 1));
        set.add(new Student("Harsh" , 2));
        set.add(new Student("Harsh" , 2));
        set.add(new Student("Virendra" , 1));

        System.out.println(set);
        set.clear();
        System.out.println(set);


    }
}
