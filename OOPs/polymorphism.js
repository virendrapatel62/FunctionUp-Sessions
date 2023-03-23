class Person {
  name = "";
  age;
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  constructor(name, age) {
    super(name, age);
  }
  learn() {
    console.log("LEarn");
  }
}

class JsStudent extends Student {
  constructor(name, age) {
    super(name, age);
  }
  learnJs() {
    console.log("Learning JS");
  }
}
class NextJsStudent extends JsStudent {
  constructor(name, age) {
    super(name, age);
  }

  isGoodAtJavascript() {
    return false;
  }

  learn() {
    console.log("Done Js ,Done Reacrt , Learning next");
  }
}
class ReactJSStudent extends JsStudent {
  static sylabus = ["Intro to react", "JSX", "Event"];

  constructor(name, age) {
    super(name, age);
  }
  learn() {
    console.log("Done Js , Learning React");
  }
  isGoodAtJavascript() {
    return false;
  }
}

class FunctionUpBatch {
  students = [];

  constructor(name) {
    this.name = "FU-100/" + name;
  }
  enrol(student) {
    if (student instanceof JsStudent) {
      console.log(`${student.name} Enrolled`);
      this.students.push(student);
    } else {
      console.log("Can't Enroll");
    }
  }
  start() {
    this.students.forEach((student) => student.learn(ReactJSStudent.sylabus));
  }
}

class FunctionUpBatchForReactJs {
  students = [];

  constructor(name) {
    this.name = "FU-100/" + name;
  }
  enrol(student) {
    if (student instanceof ReactJSStudent) {
      console.log(`${student.name} Enrolled`);
      this.students.push(student);
    } else {
      console.log("Can't Enroll");
    }
  }
  start() {
    this.students.forEach((student) => student.learn(ReactJSStudent.sylabus));
  }
}

const javaScriptBatch = new FunctionUpBatch("lithium-js");

const s1 = new NextJsStudent("Virendra");
const s2 = new ReactJSStudent("HArsh");
const s3 = new JsStudent("Sandeep");
const p1 = new Person("py std");

javaScriptBatch.enrol(s1);
javaScriptBatch.enrol(s2);
javaScriptBatch.enrol(s3);
javaScriptBatch.enrol(p1);

javaScriptBatch.start();

/**
 *
 * fucntion Overloading => single name function => multiple
 * function overriding => run time
 */
