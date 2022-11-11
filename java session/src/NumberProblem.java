import java.util.Arrays;

public class NumberProblem {
    public static void main(String[] args) {
         int number = 1001;
         int sum = 0 ;
//
//         while(number != 0 ){
//             int rem= number  % 10; // 4, 2 , 8, 4, 3, 0 , 9
//             sum+= rem;
//             number = number / 10 ; //903484 , 90348 , 9034 , 903 , 90 , 9 , 0
//         }

       String numberToString = number + "";

       char[] numberToArray = numberToString.toCharArray(); // ['9' , '0' , '3']
        for (char numberInChar: numberToArray) {
            // 9 // 0 // 3
            int num  = Integer.parseInt(numberInChar + "");
            sum += num;

        }


        System.out.println(sum);

    }
}
