package oops;

class A{
    A(int i){
        System.out.println("A CONS" + i);
    }
}

class C extends A{
    C(){
        super(12);
        System.out.println("C CONS");
    }
}
public class ConstructorChaining {
    public static void main(String[] args) {
        new C();
        System.out.println(Object.class);
    }
}
