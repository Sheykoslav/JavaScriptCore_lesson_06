function min(){
  var m = Number.POSITIVE_INFINITY;
  for(var i=0; i<arguments.length; i++){
    if(arguments[i]<m)m = arguments[i];
  }
  return m;
}
console.log(min(50,4,9,24,190,3,90));
