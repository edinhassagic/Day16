class Person {
    static display() {
   var message = "Static method is invoked from Person class";
   
   return message;

}

    show() {
        Person.display();
    }


}

var message = new Person();
message.show();
module.exports = Person;
console.log(Person.display());