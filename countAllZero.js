function countZeros ( binary_num ) {
    var newNum = " ";
    var sum = 0;
   for ( var i = 0; i < binary_num.length; i++){

    if (binary_num[i] == 0){

        
        newNum = binary_num[i] +newNum;
        newNum ++;
        

    }
    

   }
 
   sum = sum+newNum;
   return newNum;
  
    
    }
    countZeros("10111000000101");