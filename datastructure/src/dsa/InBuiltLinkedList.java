package dsa;

import java.util.LinkedList;

public class InBuiltLinkedList {
    public static void main(String[] args) {
        LinkedList list = new LinkedList();


        list.add(1);
        list.add(2);

        list.remove(1);

        list.add(1 , 10);
        list.add(2 , 13);
        list.add(3 , 12);


        System.out.println(list);
    }
}
