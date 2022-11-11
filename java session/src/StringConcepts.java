public class StringConcepts {

    public static void main(String[] args) {
        //        String name = new String("Virendra"); // new keyword always create new Objects/
//        String nameAgain = new String("Virendra");


        String name = "Virendra";  // when I create Strign using Double Quote it create new object when it does'nt exist in String pool
        String nameAgain = "Virendra"; //


        System.out.println(name == nameAgain); //  checks the refe

        System.out.println(name.equals(nameAgain)); // chec the value


        String firstName = "avinash";
        String upperFirstName = firstName.toUpperCase();
        String lowerCase = upperFirstName.toLowerCase();

        System.out.println("firstName  : " + firstName ); // avinash
        System.out.println("firstName Upper  : " + upperFirstName ); // AVINASH
        System.out.println("firstName Lower  : " + lowerCase ); // avinash


        System.out.println(firstName == lowerCase); //

    }
}
