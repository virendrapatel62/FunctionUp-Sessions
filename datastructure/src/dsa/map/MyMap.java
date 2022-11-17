package dsa.map;

import java.util.*;

class Entity{
    String key;
    Object value;

    @Override
    public boolean equals(Object o) {
        System.out.println("Entiry EQ check.");
        Entity entity = (Entity) o;
        return entity.key.equals(this.key);
    }

    @Override
    public int hashCode() {
        return Objects.hash(key, value);
    }

    @Override
    public String toString() {
        return this.key +" => "+ this.value;
    }
}

//[ [{key , value} , {key , value}, {key , value}] , [{key , value}] , [{key , value}] ]

class Map{
    final int BUCKET_SIZE = 10;
    List<ArrayList<Entity>> buckets = new ArrayList();
    Map(){
        for (int i = 0; i <  BUCKET_SIZE; i++) {
            buckets.add(new ArrayList());
        }
    }

    public Set keySet (){
        Set keys = new HashSet();
        for (List<Entity> entityList:  this.buckets
             ) {
            for (Entity entity: entityList
                 ) {
                keys.add(entity.key);
            }
        }

        return keys;
    }

    public List values (){

        List values = new ArrayList();
        for (List<Entity> entityList:  this.buckets
        ) {
            for (Entity entity: entityList
            ) {
                values.add(entity.value);
            }
        }

        return values;

    }

    public void put(String key , Object value){
        int hashCode = key.hashCode(); // 12 => 2 , 22 => 2
        int bucketIndex = hashCode % BUCKET_SIZE; // 2
//        this.buckets = [[], [], [12, 12, 22], [], [14], [], [], [], [], []]
        List bucket = this.buckets.get(bucketIndex);  // [E , E , E]
        Entity entity = new Entity();
        entity.key = key ;
        entity.value = value;


        boolean exists = bucket.contains(entity);
        if(!exists){
            bucket.add(entity);
        }


    }

    @Override
    public String toString() {
        return "Map{" +
                "BUCKET_SIZE=" + BUCKET_SIZE +
                ", buckets=" + buckets +
                '}';
    }
}

public class MyMap {
    public static void main(String[] args) {
        Map map = new Map();
        map.put("virendra" , 2334543);
        map.put("harsh" , 32343);
        map.put("sandeep" , 45);
        map.put("harsh" , 543);  //1
        map.put("harsh" , 45); // 1
        map.put("harsh" , 34); // 1
        map.put("harsh" , 142); //1
        map.put("sandpee" , 45); // 1
        System.out.println(map);

        System.out.println(map.keySet());
        System.out.println(map.values());

    }
}
