// Types of Properties and methods
    //Static
    //Static methods or properties is created to share the data and actions b/w diff obj

    
    // Non static ( Instance(obj) )

//Encapsulation 
// It is a process of wrapping the data and action inside a single unit by ising class method
// expalin with example with one class methos with some properties

class studentdemo {
    name  ;
    age ;
    static city = "hyd" ;

// while defining the constructor we use constructor as a constructor name
    //Non-static Block
    // Inside a Non-static block we can access static and Non-static members
    constructor(name,age,city){
        this.name = name;
        this.age = age;
        // studentdemo.city = city;

    }

    display(){
        console.log(this.name, this.age,studentdemo.city)
    }
    changename(name){
        this.name = name;
    }
    changeage(age){
        this.age = age; 
    }
// All static propertise and methods can be accessed using classname inside or outside the class

    //static Block
    // Inside a static block we can access only static members
    static changecity(city){
        studentdemo.city = city;  
    }
}

let s1 = new studentdemo("raj",26)
let s2 = new studentdemo("sai",30)

s1.display()
s2.display()

console.log("--------------------------");

s1.changename("Rohit")
studentdemo.changecity("Goa")
s1.display()
s2.display()

//NOTE:
// Inside a static block we can access only static members
// Inside a Non-static block we can access static and Non-static members