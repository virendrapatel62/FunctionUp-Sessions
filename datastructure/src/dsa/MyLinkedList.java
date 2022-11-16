package dsa;

import java.util.ArrayList;
import java.util.Arrays;

class LinkedList{

    private Node head;
    private Node tail;
    private int size = 0 ;


    public Node getHead() {
        return head;
    }

    public void addToLast(int data) {

        if(this.head == null){
            addToFirst(data);
            return ;
        }

        Node temp = this.head;

        while(temp.next != null){
                temp = temp.next;
        }


        Node node = new Node(data);
        temp.next = node;
        this.tail = node;
        size++;

    }

    public ArrayList toArrayList() {
        ArrayList list = new ArrayList();
        Node temp = this.head;
        while(temp != null){
            list.add(temp.data);
            temp = temp.next;
        }
        return list;
    }

    public void add(int index, int data) {
        if(index == 0 ){
            addToFirst(data);
            return ;
        }

        if(index == size){
            addToLast(data);
            return ;
        }

        Node newNode = new Node(data);
        Node node = this.get(index -1);
        newNode.next=node.next;
        node.next=newNode;

        this.size++;


    }

    public void removeLast() {
//        [0, 12, 13, 3, 14, 15, 90, 91]

        if(this.head == null) return ;

        if(this.size == 1) {
            removeFirst();
            return ;
        }

        Node node = get(size - 2);
        node.next = null ;
                this.tail = null;
                size--;
    }


    private class Node{
        int data ;
        Node next;
        public Node(int data){
            this.data = data;
        }

        @Override
        public String toString() {
            return "data=" + data ;

        }
    }

    public void addToFirst(int data ){
        Node node = new Node(data);
        if(this.head == null){
            this.head = node;
            this.tail = node;
                this.size ++;
            return;
        }

        node.next = this.head;
        this.head = node;
        this.size++;

    }

    public int getSize() {
        return size;
    }

    public Node get(int index){
        if(index == 0 ){
            return this.head;
        }

        if(index == size - 1){
            return this.tail;
        }

        if(index > size) return null;
        Node temp =this.head;

        for(int i =  0 ; i<index; i++){
            temp = temp.next;
        }

        return temp;
    }


    public void removeFirst(){
        if(size == 0 ) return ;

        if(size == 1){
            this.head = null;
            this.tail = null;
            this.size--;
            return ;
        }

        this.head=this.head.next;
        this.size--;
//        [12, 13, 3, 14, 15, 90, 91]
    }

}

public class MyLinkedList {
    public static void main(String[] args) {
        LinkedList list = new LinkedList();
        list.addToFirst(15);
        list.addToFirst(14);
        list.addToFirst(13);
        list.addToFirst(12);

        list.addToLast(90);
        list.addToLast(91);


        list.add(0 , 0);
        list.add(3 , 3);


        System.out.println(list.toArrayList());

        list.removeFirst();
        list.removeFirst();
        list.removeFirst();

        list.removeLast();
        System.out.println(list.toArrayList());
        System.out.println(list.getSize());


        System.out.println(list.get(0));
        System.out.println(list.get(3));
        System.out.println(list.get(5));
    }
}
