class Student {
  name = "virendra";
  valueOf() {
    console.log("Calling Valued of");
    return this.name;
  }
}

// when you compare object with string
//  or premitinv value it call value
//  of and compares with returned value
//   of valueOf method
const student = new Student();
console.log(student == student);
console.log(student == 2);
console.log(student == "");
console.log(student == {});
console.log(student == true);
console.log(student == "virendra");
