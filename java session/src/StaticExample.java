public class StaticExample {
    public static void main(String[] args) {
        Person p = new Person(new Pen("red") , "Virendra");
        Person p2 = new Person(new Pen("blue") , "Sandeep");
        System.out.println(p.count);

        System.out.println(p2.count);
        System.out.println(Person.count);
        new Person.A();
    }
}


class Person{
    Pen pen ;
    String name;
    static int count = 0;
    static class  A{

    }
    Person(Pen pen , String name){
            this.name = name ;
            this.pen = pen;
            count ++;
    }
}

class WaterCooler {

}


class Pen{
    String name = "Anything";
    String color ;

    Pen(String color){
        this.color = color;
    }
}


