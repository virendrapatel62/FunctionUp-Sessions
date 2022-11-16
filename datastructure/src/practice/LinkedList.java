package practice;

import java.util.ArrayList;

public class LinkedList<T> {

    private Node head;
    private Node tail;

    private int size = 0 ;

    private class Node{
        private T data;
        private Node next;

        Node(T data){
            this.data = data;
        }

        @Override
        public String toString() {
            return "Node{" +
                    "data=" + data +
                    '}';
        }
    }

    public ArrayList<T> toArrayList(){
        ArrayList<T> list = new ArrayList<>();

        Node temp = this.head;
        while(temp != null){
            list.add(temp.data);
                temp = temp.next;
        }
        return list;
    }

    public void addToFirst(T data){
        Node node = new Node(data);
        if(this.head == null){
            this.head = node;
            this.tail = node;
            this.size++;
            return ;
        }
        node.next = this.head;
        this.head = node;
        this.size++;
    }

    public Node get(int index){
        if(this.size <= index){
            return null;
        }
        if(this.size-1 == index){
            return this.tail;
        }
        if(index == 0){
            return this.head;
        }
        Node node = this.head;
        for (int i = 0; i < index; i++) {
            node = node.next;
        }
        return node;
    }

    public void insert(int index , T data ){
//[0, 7, 8, 9, 10, 11, 12, 13, 14]

        if(index == 0 ){
            addToFirst(data);
            return ;
        }

        Node newNode = new Node(data);
        Node node = get(index -  1);

        System.out.println(node);

        newNode.next = node.next;
        node.next  = newNode;






    }

    public void addToLast(T data){

        if(this.head == null){
           this.addToFirst(data);
           return;
        }

        Node node = new Node(data);
        Node temp = this.head;

        while(temp.next != null){
            temp = temp.next;
        }

        temp.next = node;
        this.tail = node;
        this.size++;
    }

    public void removeFirst(){

    }

    public void removeLast(){

    }
}
