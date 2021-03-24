class Person {
    constructor(name, email, age) {
      this.name = name;
      this.email = email;
      this.age = age;
    }
  
     getPerson() {
      var personInfo = `Name: ${this.name}, email: ${this.email}, age: ${this.age}`;
  return personInfo;  
  }
  
  }
  
  let Edin = new Person("Edin", "edinhassagic@gmail.com", 23);
  console.log(Edin.getPerson());
  module.exports = Person;
  