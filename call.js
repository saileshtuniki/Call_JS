//Call() Function//
// var obj1 ={
//     c : 10,
// }

// var obj2 ={
//     p : 15,
// }

// var obj3 ={
//     q : 20,
// }

// function add(x,y){
//     var a = x
//     var b = y
//     var res = a + b + this.c
//     var res1 = a + b + this.p
//     var res2 = a + b + this.q
//     console.log(res)
//     console.log(res1)
//     console.log(res2)
// }
// add.call(obj1,2,3)  
// add.call(obj2,5,5)
// add.call(obj3,4,10)

//apply() method//

var person = {
    firstName: "John",
    lastName: "Doe",
    fullName: function  (){
      return this.firstName + " " + this.lastName;
} 
  }
  
  var greeting = function(message) {
    console.log(message + " " + this.fullName());
  }
  
  greeting.apply(person, ["Hello"]);

  //The apply() method is used to call a function with a given this value and an array of arguments.

  //bind() method, an object can borrow a method from another object

  var person = {
    firstName: "John",
    lastName: "Doe",
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  
  var greeting = function(message) {
    console.log(message + " " + this.fullName());
  }
  
  var boundGreeting = greeting.bind(person, "Hello");
  
  boundGreeting();
