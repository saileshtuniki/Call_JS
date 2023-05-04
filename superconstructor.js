class product {
    pname;
    category;
    
    constructor(){
        this.name = "dummy"
        this.category = "dummy"
    }
    display1(){
        console.log(this.pname,this.category);
    }
}

class mobileprd extends product {
    price
    qty
    totalamount
    // 1. if we define constructor in child class we have to call constructor of parent class
    // 2. if we want to call the constructor of your parent class we have to call using super() in the child class

    // calling super() should be in the 1st  line 
    constructor(){
        super()
        this.price = 0
        this.qty = 0
        this.totalamount = 0
    }

    totalamt(){
        this.totalamount = this.price * this.qty
        this.display1()
        console.log(this.totalamount);
    }
}

    // class jewellery extends product{

    // }

    let mobile1 = new mobileprd()
    mobile1.pname = "iphone 14"
    mobile1.category = "electronic"
    mobile1.price = 50000
    mobile1.qty = 2
    mobile1.totalamt()