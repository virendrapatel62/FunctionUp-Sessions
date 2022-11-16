package practice;

import java.util.ArrayList;

public class Stack<T> {
    private int size;
    private ArrayList<T> data = new ArrayList<>();
    public Stack(){

    }

    public void push(T item){
    this.data.add(item);
    }

    public T pop(){
        return this.data.remove(0);
    }


    public int size(){
        return this.size;
    }


    @Override
    public String toString() {
        return this.data.toString();
    }
}
