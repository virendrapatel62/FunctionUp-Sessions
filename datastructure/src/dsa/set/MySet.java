package dsa.set;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

class Set{
    final int BUCKET_SIZE = 10;
    List<ArrayList> buckets = new ArrayList();
    Set(){
        for (int i = 0; i <  BUCKET_SIZE; i++) {
            buckets.add(new ArrayList());
        }
    }

    public void add(Integer value){
        int hashCode = value.hashCode(); // 12 => 2 , 22 => 2
        int bucketIndex = hashCode % BUCKET_SIZE; // 2
//        this.buckets = [[], [], [12, 12, 22], [], [14], [], [], [], [], []]
        List bucket = this.buckets.get(bucketIndex);  // [12, 12, 22]

        boolean exists = bucket.contains(value);
            if(!exists){
                bucket.add(value);
            }
    }

    public boolean isEmpty (){
        for (int i = 0; i < this.buckets.size(); i++) {
            ArrayList<Integer> bucket = this.buckets.get(i);  //[12, 12, 22]
            if(!bucket.isEmpty()){
                return false;
            }
        }
        return true;
    }

    public List toList(){
        ArrayList<Integer> list = new ArrayList<>();

        for (int i = 0; i < this.buckets.size(); i++) {
            ArrayList<Integer> bucket = this.buckets.get(i);  //[12, 12, 22]
            for (int j = 0; j < bucket.size(); j++) {
                Integer elem = bucket.get(j);
                list.add(elem);
            }
        }
        return list;
    }

    @Override
    public String toString() {
        return "Set{" +
                "BUCKET_SIZE=" + BUCKET_SIZE +
                ", buckets=" + buckets +
                '}';
    }
}


public class MySet {
    public static void main(String[] args) {
        Set set = new Set();

        System.out.println(set.isEmpty());

        set.add(12);
        set.add(12);
        set.add(14);
        set.add(22);
        System.out.println(set);

        System.out.println(set.toList());

        System.out.println(set.isEmpty());



    }
}
