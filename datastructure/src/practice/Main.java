package practice;

import java.util.List;

public class Main {
    public static void main(String[] args) {


        LinkedList<Integer> list = new LinkedList<>();

        list.addToLast(10);
        list.addToLast(11);
        list.addToLast(12);
        list.addToLast(13);
        list.addToLast(14);

        list.addToFirst(9);
        list.addToFirst(8);
        list.addToFirst(7);

        list.insert(0 , 0 );
        list.insert(5 , 5 );

        List arrayList  = list.toArrayList();

        System.out.println(arrayList);

        System.out.println(list.get(0));
        System.out.println(list.get(4));
        System.out.println(list.get(5));


//        Stack stack = new Stack();
//        StackWithArray stack = new StackWithArray();
//        for (int i = 0 ; i <= 20 ; i ++){
//            stack.push(i);
//        }
//        System.out.println(stack.size());
//        System.out.println(stack);



    }
}
