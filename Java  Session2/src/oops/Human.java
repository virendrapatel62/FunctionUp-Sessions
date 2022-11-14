package oops;



public class Human {
    public int numberOfEyes = 2; // anythere
    protected int protectedVariable = 90; // in package , child class using child object
    private int privateAnything = 90; // only within class
    int defaultValue = 90; // in package
    public int anything = 89;

    public void walk(){
        System.out.println("Human is Walking..");
    }
}
