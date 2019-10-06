function distFromAverage(array){
    let sum = 0;

    array.forEach(element => {
        sum += element;
    })

    let average = sum / array.length;

    return array.map(element => {
        return element - average;
    })
}





function fruits(){
    
    fruit=['banan','malina','truskawka','mango'];
    console.log(fruit[1]);
     var z=fruit.length;
    var last = fruit[z-1] ;   
    console.log(last);
    for(var i=0;i<fruit.length; i++){
        console.log(fruit[i])
    }

}
fruits();
