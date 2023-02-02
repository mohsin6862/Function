function secondLargest ( numbers ) {

    var largest = numbers[0];
   for ( var i = 1; i < numbers.length; i++){

    if(largest < numbers[i]){
        largest = numbers[i];
    }
   }
   var larger = numbers[0];
   for(var j = 1; j < numbers.length; j++){

    if(larger < numbers[j] && larger < largest){

        larger = numbers[j];

    }


}
console.log(larger);
}

    secondLargest([12, 23, 44, 76, 99, 47,78]);