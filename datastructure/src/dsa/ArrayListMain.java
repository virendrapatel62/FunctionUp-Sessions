package dsa;
import java.util.ArrayList;

public class ArrayListMain {
    public static void main(String[] args) {
            ArrayList list = new ArrayList();
            list.add(12);
        list.add(13); // same as push
        list.add(14);
        list.add(16);
        list.add(15);
        list.add(17);
        list.add(18);
        list.add(19);
        list.add(160);
        list.remove(1);
        System.out.println(list.contains(16));
        System.out.println(list.isEmpty());
        System.out.println(new ArrayList<>().isEmpty());
        System.out.println(list.get(3));
        System.out.println(list);
        list.add(5 , 10);
        System.out.println(list);
        list.remove(8);
        System.out.println(list);
        list.set(5 , 11);
        System.out.println(list);


    }
}
