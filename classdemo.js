class Mobile{
    name ;
    price ;
    qty ;

    display(){
        console.log(this.name, this.price,this.qty)
    }
    p1(){
        this.display()
    }
}

let m1 = new Mobile()
m1.name = "apple"
m1.price = 50000
m1.qty = 2

m1.display()
m1.p1()  

let m2 = new Mobile()
m2.name = "One plus"
m2.price = 50000
m2.qty = 3

m2.display()
m2.p1()  

// If we want to access any properties outside the class we have to use reference
// If we want to access within the class we have to use this keyword