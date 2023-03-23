"use strict";

class Person {
  name = "";
  age;
  constructor(name, age) {
    // console.log("Person Construtor Called.");
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  constructor(name, age) {
    super(name, age);
    // console.log("Student Construtor Called.");
  }
  learn() {
    console.log("LEarn");
  }
}
class JsStudent extends Student {
  constructor(name, age) {
    super(name, age);
    // console.log("JSStudent Construtor Called.");
  }
  learnJs() {
    console.log("Learning JS");
  }
}
class ReactJSStudent extends JsStudent {
  static sylabus = ["Intro to react", "JSX", "Event"];

  constructor(name, age) {
    super(name, age);
  }
  learnReact() {
    console.log("-------------------");
    if (this.isGoodAtJavascript()) {
      console.log("Learning React");
    } else {
      this.learnJs();
      console.log("Learning React", ReactJSStudent.sylabus);
    }
    console.log("-------------------");
  }
  isGoodAtJavascript() {
    return false;
  }
}

const rStudent = new ReactJSStudent("Virendra", 24);

const s1 = new ReactJSStudent("Harsh", 24);
const s2 = new ReactJSStudent("Sandeep", 24);

false.true = ""; // TypeError
(14).sailing = "home"; // TypeError
"with".you = "far away"; // TypeError
