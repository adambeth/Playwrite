"use strict";
(function () {
  function Person(fistName, lastName, age) {
    this.firstName = fistName;
    this.lastName = lastName;
    this.age = age;
    Object.defineProperty(this, "getFullName", {
      get: function () {
        return this.firstName + " " + this.lastName;
      },
      enumerable: true,
    });
  }
  function Student(firstName, lastName, age) {
    Person.call(this, firstName, lastName, age);
    this.enrolledCourse = [];
    this.enroll = function (courseID) {
      this.enrolledCourse.push(courseID);
    };
    this.getCourses = function () {
      console.log(this.getFullName);
    };
  }
  console.log(Student.prototype.constructor);
  Student.prototype = Object.create(Person.prototype);
  console.log(Student.prototype.constructor);
  //   Student.prototype.constructor = Student;
  Object.prototype.constructor = Student;

  //   let Adam = new Student("Adam", "Beth", 35);
  //   Adam.getCourses();
})();
