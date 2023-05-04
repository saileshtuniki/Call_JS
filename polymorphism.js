// It is a technique of havving the same method name and signature in parent & child class but with diff implimentation
// 2. signatere indicates:- 
//     TYPES OF PARAMETERS, ORDER OF PARAMETERS, NO.OF PARAMETERS
 class parent{
    pname = "raj"
    pcity = "hyd"

    dispaly(){
        console.log("Parent class:", this.pname, this.pcity);
    }
 }

 class child extends parent {
    chname = "rohan"
    chcity = "mumbai"

    dispaly(){
        //super keyword (super.<methodnameof parent class>) is used to call the method of parent class//
        super.dispaly()
        this.chname = "Aryan"
        console.log("Child class:",this.chname,this.chcity);
    }
    p1(){
        super.dispaly()
        this.dispaly()
    }
 }

 let c1 = new child()
 c1.p1()  //we can use this type
//  c1.dispaly() // and also this type