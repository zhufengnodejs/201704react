function Person(name) {
  this.name = name;
}
Person.prototype.getName = function () {
  console.log(this.name);
}
//继续私有属性和公有属性
function Student(name,age){
  //构造函数中，this指向自己的实例 {}
  Person.call(this,name);
}
Student.prototype = new Person();
class Person {
  constructor(name) {
    this.name = name;
  }
  getName(){
    console.log(this.name);
  }
}
class Student extends Person{
  constructor(name,age){
    super(name);
    //构造函数中，this指向自己的实例 {}
    //Person.call(this,name);
}
}