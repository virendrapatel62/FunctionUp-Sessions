interface Countable {
    public void increment();

    public void show();
}

class Task {
    public void doIt(Countable counter) {
        counter.increment();
        counter.show();
        counter.increment();
        counter.show();
        counter.increment();
        counter.show();
        counter.increment();
        counter.show();
    }
}

public class Main {
    static int count = 0;

    public static void main(String[] args) {

        new Task().doIt(
                new Countable() {
                    public void increment() {
                        count++;
                    };

                    @Override
                    public void show() {
                        System.out.println(count);
                    }
                });
    }

}