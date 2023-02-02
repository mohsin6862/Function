function average (arrOfMarks){
    let sum =0;
for ( var i = 0; i < arrOfMarks.length ; i++){

    
    sum = sum + arrOfMarks[i];
    
}
var yourAverage = sum / arrOfMarks.length;

console.log(parseFloat(yourAverage.toFixed(2)));
}
average([75.25, 65, 80, 35.45, 99.50]);