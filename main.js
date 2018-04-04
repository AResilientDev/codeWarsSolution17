function divisors(integer) {
//defines an empty array to store our numbers
  var arr = [];
  //gives us a way to count and increment 
  //if the intger is divisible by a value of i we will push that value to the array
  //if the length of the array is 0 return integer is prime
  //else return the array
  for (var i = 2; i < integer; i++) { if (integer%i === 0) arr.push(i); }
  return (arr.length === 0) ? integer + ' is prime' : arr;
};
