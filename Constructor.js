// It is a special method in the class 
// Initialize the propertise of the class

// while calling constructor we use classname as the constructtor name

class student {
    name  ;
    age ;
    city ;

// while defining the constructor we use constructor as a constructor name
    constructor(name,age,city){
        this.name = name;
        this.age = age;
        this.city = city;

    }

    display(){
        console.log(this.name, this.age,this.city)
    }
    // changename(name){
    //     this.name = name;
    // }
    // changeage(age){
    //     this.age = age; 
    // }
}
// while calling constructor we use clasname as costructor name //
let std = new student("sai", 22, "hyd")
std.display() 
// We have to use parameterized constructor by passing parameters as (name,age,city)
let std2 = new student("Rahul",25,"Mumbai")
// std2.name ="raj" 
// std2.age =23 
// std2.city ="mumbai" 
std2.display()


