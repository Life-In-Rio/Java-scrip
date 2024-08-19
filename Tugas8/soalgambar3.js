class Person {
  constructor(name) {
    this.name = name;
  }
  introduce() {
    return `Hi My name is ${this.name}`;
  }
}

class Employee extends Person {
  constructor(name, position) {
    super(name);
    this.position = position;
  }
  introduce() {
    return `Hi My name is ${this.name} and Im a ${this.position}`;
  }
}

class Manager extends Employee {
  constructor(name, position) {
    super(name, position);
  }
  introduce() {
    return `Hi My name is ${this.name} and Im a ${this.position} and i manage a team`;
  }
}

let leader = new Manager ("Abyan", "Manager");
console.log(leader.introduce())
let employe = new Employee ("Abyan", "Employee");
console.log(employe.introduce())
let person = new Person ("Abyan");
console.log(person.introduce())x


