package dsa;


import java.util.Arrays;

class ArrayListWithArray{
    int[] data = new int[5];
    int size = 0;
    public void add(int item){
        if(size == this.data.length){
            int[] newArray = Arrays.copyOf(this.data , this.data.length * 2); //[20]
            this.data= newArray;
        }

        this.data[size] = item;
        size++;
    }

    public void remove(int index){
//        [ 1, 2, 3, 4, 5]
//        [ 1, 2, 4, 5

//        [1 , 2, 4, 5]

        for(int i = index ; i < size ; i++){
            this.data[i]  = this.data[i + 1];
        }


        size--;
    }

    @Override
    public String toString() {
        return Arrays.toString(Arrays.copyOfRange(this.data , 0 , size));
    }
}

public class MyArrayList {
    public static void main(String[] args) {
        System.out.println("My Array List");
        ArrayListWithArray list = new ArrayListWithArray();
        list.add(12);
        list.add(13);
        list.add(14);
        list.add(15);
        list.add(16);
        System.out.println(list);
        list.add(17);
        list.add(18);
        list.add(18);
        System.out.println(list);
        list.add(18);
        list.add(21);
        list.add(22);
        System.out.println(list);
        list.add(23);
        list.add(24);

        System.out.println(list);


        list.remove(2);

        System.out.println(list);
        list.remove(11);

        System.out.println(list);
        System.out.println(list.size);
    }
}
