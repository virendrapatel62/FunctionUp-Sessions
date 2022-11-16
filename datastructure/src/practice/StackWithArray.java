package practice;

import java.util.Arrays;

public class StackWithArray {
    private int[] data = new int[5];
    private int size = 0;

    public void push(int item) {
        if (this.size == this.data.length) {
            this.data = Arrays.copyOf(this.data, this.data.length * 2);
        }
        this.data[size] = item;
        size++;
    }

    public int pop() {
        return 0;
    }

    public int size() {
        return this.size;
    }

    @Override
    public String toString() {
        return Arrays.toString(Arrays.copyOfRange(this.data, 0, this.size));
    }
}
