import java.util.Arrays;

public class ArraysExamples {

    static ArraysExamples exmaple ;

    public static void main(String[] args) {
        int[] array = {1 , 2, 3, 4, 6, 7};
        Object array2[] = { 2, 3, 5, 7 , 'a' , true , 32.3 , null };



        final int b ;
        b = 90;
        int array3[] = new int[]{ 2, 3, 4, 5, 7};
        int[] array4 = new int[10];
        System.out.println(array4[1]);

        array4[4] = 90;
        System.out.println(Arrays.toString(array4));
        for (int number :  array4) {
            System.out.println(number);
        }

    }
}
