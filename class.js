class student {
  constructor(name, id) {
    this.name = name;
    this.id = id;
  }
  name() {
    return this.name;
  }
  id() {
    return this.id;
  }
}

class dep extends student {
  constructor(name, id, course_name, instructor) {
    super(name, id);
    this.course_name = course_name;
    this.instructor = instructor;
  }
  getcourse() {
    return this.course_name + "  " + this.instructor;
  }
  getinstructor() {
    return " instructor name "+this.instructor + " and" +" student name " + this.name;
  }
}

// var y = new student("yousuf", 087);
// console.log(y.name);
// console.log(y.id);

var z = new dep("yousuf", 087, "blockchain", "sir mustafa");

console.log(z.name);
console.log(z.id);
console.log(z.course_name);
console.log(z.instructor);

// asd = z.course()
// console.log(asd);
console.log(z.getcourse());
console.log(z.getinstructor());
