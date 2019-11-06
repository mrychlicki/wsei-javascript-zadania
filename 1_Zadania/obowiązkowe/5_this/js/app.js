//zad 0 i zad 1
const car = {
    brand: "Mercedes",
    color: "Czarny",
    numberOfKilometers: 0,
    printCarInfo() {
        console.log(car);
    },
    drive(km) {
        this.numberOfKilometers += km;
    }
}
car.printCarInfo();
car.drive(20);
car.printCarInfo();


car.carReview= [];
car.carReviewAdd= function(date){
    this.carReview.push(date);
}
car.carReviewAll=function(){
    for(let i=0; i<car.carReview.length; i++){
        console.log(this.carReview[i]);
    }
}
car.carReviewAdd(112233);
car.carReviewAdd(234);
car.carReviewAdd(121212);
car.printCarInfo();
car.carReviewAll();
//zad 2
var calculator = {
    save: function (newA, newB) {
        this.a = newA;
        this.b = newB;
    },
    sum: function(){
        return this.a+this.b;
    },
    multiply: function(){
        return this.a*this.b;
    }

};

calculator.save(2, 3);
console.log(calculator.sum());
console.log(calculator.multiply());

//zad 3 
const stairs={
    step: 0,
    up: function(){
        this.step+=1;
    },
    down: function(){
        this.step-=1;
    },
    printStep: function(){
        console.log("stopień to: "+this.step);
    }
}

stairs.up();
stairs.up();
stairs.up();
stairs.down(); 
stairs.printStep();


