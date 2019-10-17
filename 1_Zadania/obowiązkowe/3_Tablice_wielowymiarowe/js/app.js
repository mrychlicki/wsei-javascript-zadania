//Zadanie 0
/*function checkArray(){
     
    var arr = [
        [11, 12],
        [42, 2],
        [-4, -120],
        [0, 0],
        [1, 34],
        ];
    var score = 0;
    for(var i=0;i<arr.length;i++){
        for(var j=0; j<arr[i].length; j++){
            if(arr[i][j]%2==0&&arr[i][j+1]%2==0){
                console.log("true");
            }
            else{
                 console.log("false")
            }
        }
    }
}
checkArray()*/

//zadanie 1
var task1Array = [
    [2, 3],
    ["Ala", "Ola"],
    [true, false],
    [5, 6, 7, 8],
    [12, 15, 67]
];
console.log(task1Array[3][2]);
console.log(task1Array[1].length);
console.log(task1Array[4][2]);

//zadanie 2
var task2Array = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];
for(var i=0; i<task2Array.length; i++){
    console.log(task2Array[i]);
}
for(var j=0; j<task2Array.length; j++){
    console.log(task2Array[j].length);
}

for(var z=0; z<task2Array.length; z++){
    for(var y=0; y<task2Array[z].length; y++){
        console.log(task2Array[z][y]);
    }
}


//zadanie 3
function print2Darray(array){
    for(var i=0; i<array.length; i++){
        for(var j=0; j<array[i].length; j++){
            console.log(array[i][j]);
        }
    }
}

//zadanie 4
print2Darray([  [9,8,7],
                [6,5,4],
                [3,2,1]
            ])

//zadanie 5
function create2DArray(rows, columns){
     arr = new Array(columns);
     var number = 0;
    for (var i = 0; i < columns; i++) {
        arr[i] = new Array(rows);
    }
    for(var j=0; j<columns; j++){
        for(var z=0; z<rows; z++){
            arr[j][z]= number + 1;
            number = number+1;
        }
    }
    console.log(arr);
    return arr;
    
}
create2DArray(4, 5);