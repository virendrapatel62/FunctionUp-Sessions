package oops;

public class Person extends Human{
    int anything = 90;

     Person(){

    }

    public void walk(){
        super.walk();
        System.out.println("PARANT"  + super.anything);
        System.out.println("THIS"  + this.anything);
        System.out.println("Person is Walking..");
    }
}


class S{

}

class B{

}