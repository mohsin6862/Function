function toCheckVowel (letter){

    letter = letter.toLowerCase();

    if (letter == "a"  || letter == "e" || letter == "i" || letter == "o" || letter == "u" ){
        console.log("This is vowel");
    }
    else{
       console.log("This is consonent");
    }
   
}

 toCheckVowel("I");