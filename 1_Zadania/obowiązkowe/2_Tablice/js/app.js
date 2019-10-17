function fruits(){	multiply([1,1,1,1]);

    multiply([2,8,3,7]);
        fruit=['banan','malina','truskawka','mango'];	//zadanie 5
        console.log(fruit[1]);	function getEvenAvarage(array){
         var z=fruit.length;	    var score = 0;
        var last = fruit[z-1] ;   	    var counter = 0;
        console.log(last);	    for(var i=0; i<array.length; i++){
        for(var i=0;i<fruit.length; i++){	        if(array[i]%2==0){
            console.log(fruit[i])
//Zadanie 2 
function createArray(number) {
    var newArray = [];

    for (var counter = 1;  counter <= number; counter++) {
        newArray.push(counter);
    }

    return newArray;
}

console.log("tablica z liczbami do 6 = " + createArray(6));
console.log("tablica z liczbami do 1 = " + createArray(1));
console.log("Test dla liczby ujemnej (powinna być pusta tablica) " + createArray(-6));
console.log("Test dla zera (powinna być pusta tablica) " + createArray(0));
//zadanie 3
function printTable(array){
    for(var i=0; i<array.length ; i++){
        console.log(array[i]);
    }
}

printTable([1,2,3,4,5]);

//zadanie 4
function multiply(array){
    var score = 1;
    for(var i=0; i<array.length; i++){
        score = score*array[i];
    }
    console.log(score);
}

multiply([1,2,3,4,5,6,7]);
multiply([1,1,1,1]);
multiply([2,8,3,7]);
//zadanie 5
function getEvenAvarage(array){
    var score = 0;
    var counter = 0;
    for(var i=0; i<array.length; i++){
        if(array[i]%2==0){
            score = score + array[i];
            counter = counter+1;
        }
    }
    if(score!=0 && counter!=0){
        console.log(score/counter);
    }
    else{
        console.log(null);
    }
}
getEvenAvarage([1,2,3,4,5,6,7]);
getEvenAvarage([1,1,1,1]);
getEvenAvarage([2,8,3,7,4]);
// Zadanie 6
function sortArray(array){
    console.log(array.sort(function(a, b){return a - b}));
}
sortArray([145,11,3,64,4,6,10]);
//Zadanie 7
function addArrays(array1,array2){
    var array3 = [];
    if(array1.length == array2.length){
        for(var i=0; i<array1.length; i++){
            array3.push(array1[i]+array2[i]);
        }
    }
    else if(array1.length<array2.length){
        for(var i=0; i<array1.length; i++){
            array3.push(array1[i]+array2[i]);
        }
        for(var j=array1.length; j<array2.length; j++){
            array3.push(array2[j])
        }
    }
    else if(array1.length>array2.length){
        for(var i=0; i<array2.length; i++){
            array3.push(array1[i]+array2[i]);
        }
        for(var j=array2.length; j<array1.length; j++){
            array3.push(array1[j])
        }
    }
    console.log(array3)

}
addArrays([4,0,1,3,4], [1,9,6,7,8,17]);
addArrays([8,3,22], [1,3,2]);
addArrays([2,3,1,5,3,5], [3,1,76,1]);
