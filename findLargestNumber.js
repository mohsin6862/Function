function largestNumber (Jim, Any, Kim){

   if(Jim > Any && Jim > Kim){
      return "jim is the highest scorer";
  }
  else if ( Any > Jim && Any > Kim){
      console.log("Any is the highest scorer");
  }
  else {
      console.log("Kim is the highest scorer");
  }
  return (Jim,Kim,Any);

}

largestNumber(88,929,101);


