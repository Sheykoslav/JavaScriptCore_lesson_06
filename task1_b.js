function checkAge(age){
  return age>18 || confirm('Do You have permission?');
}

console.log(checkAge(8));
