package dsa.map;

import java.util.Collection;
import java.util.Collections;
import java.util.HashMap;
import java.util.Set;

public class Main {
    public static void main(String[] args) {
        HashMap<Student , Integer> map = new HashMap();

//         key can not be duplicate
//         values can be
        map.put(new Student("viren" , 1) , 12);
        map.put(new Student("harsh" , 2) , 45);
        map.put(new Student("viren" , 1), 34);
        map.put(new Student("harsh" , 2) , 56);
//        {
//            "virendra" : 12
//        }
        Set keySet = map.keySet();

        Collection<Integer> list = map.values();
        System.out.println(keySet);
        System.out.println(list);

        System.out.println(map.get(new Student("viren" , 1)));

        map.remove(new Student("viren" , 1));

        System.out.println(map);


    }
}
