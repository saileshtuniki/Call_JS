class A{
    name = "John";
    city ="new york"

    display(){
        console.log(this.name, this.city);
    }

}

class B extends A {
    email = "abc@.com"
    ph = 1234444

    print(){
        this.display()
        console.log(this.email,this.ph);
    }
}



let a1 = new B()
a1.print()