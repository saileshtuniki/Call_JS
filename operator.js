// Polymorphism Concept Example

class operations {
    result;
    operate(num1, num2){            // 1 form
        console.log(num1,num2);
    }
}

class Add extends operations{
    operate(num1,num2){
        this.result = num1 + num2;    // Multiple behavior
        console.log(this.result);
    }
}

class sub extends operations{
    operate(num1, num2){
        this.result = num1 - num2      // Mul behaviors
        console.log(this.result);
    }
}

let add1 = new Add()
add1.operate(100,50)

let sub1 = new sub()
sub1.operate(100,50)
