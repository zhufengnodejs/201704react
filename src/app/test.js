class Person {
  constructor(name){
    console.log('父类的constructor');
    this.name = name;
  }
  getName(){console.log(this.name)}
}
class Student extends Person{
  constructor(name,age){
    super(name);
    //如果想使用this,必须把使用this的代码放在super下面
    console.log('this.name',this.name);
    this.age = age
    console.log('子类的constructor');
  }
}
let s = new Student('zfpx',8);
console.log(s.getName());
/*function Person(name){
  this.name = name;
}*/
