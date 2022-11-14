package oops;


class Animal{
    public void sound(){
        System.out.println("Animal is Creating sound.");
    }
}

class Dog extends  Animal{ // Dog is a Animal
    int numberOfLeg = 4; // Dog has 4 legs

    public void sound(){
        System.out.println("BHO");
    }
}
class Cat extends  Animal{ // Cat is a Animal
//    public void sound(){
//        System.out.println("MEON");
//    }
}
public class Polimorphism {

        public static void main(String[] args) {
            Animal animal = new Animal();
            Animal animal2 = new Dog();
            Animal animal3 = new Cat();
            new oops.Polimorphism().playSound(animal2);
            new oops.Polimorphism().playSound(animal3);
            new oops.Polimorphism().playSound(animal);
        }
        public void playSound(Animal animal ){
            animal.sound();
        }
}
