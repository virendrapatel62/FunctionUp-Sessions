package dsa.map;

class Student {
    String name ;
    int id ;

    Student(String name , int id){
        this.name = name ;
        this.id = id;
    }

    @Override
    public String toString() {
       return this.name + "";
    }

    @Override
    public boolean equals(Object obj) {
        Student another = (Student) obj;
        System.out.println("Equal");

        return (another.id == this.id);
    }

    @Override
    public int hashCode() {
        System.out.println("Hashcode");
        return this.name.hashCode();
    }
}

