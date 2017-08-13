function plus(input){ 
  var div = 3;
  var count = 0; 
  for(var i=0; i<input.length; i++){
    for(var j=input.length-1; j>i; j--){
      var sum = input[i] + input[j];
      document.write(sum+" ");
      if(sum % div == 0){
        count++;
      }
    }
    document.write("<br>");
  }
  return count;
}
document.write(plus([1,3,2,6,1,2]));