package dsa;

import javax.management.ObjectName;
import java.util.Arrays;

public class ArrayMain {
    public static void main(String[] args) {
        Object [] array = new Object[100];
//        System.out.println(array[9]);
        array[0] = 90;
        array[1] = 91;
        array[2] = 92;
        array[3] = 93;
        array[4] = 94;
        array[5] = 95;
        array[6] = 96;
        array[7] = 97;
        array[8] = 98;
        array[9] = 909;
        array[10] = 909; // issues

        System.out.println(Arrays.toString(array));
    }
}
