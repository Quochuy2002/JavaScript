let array = [2,3,4,5];
array.sort(function(a, b) {
  return b - a;
});
console.log("max= ",array[0]);
console.log("min= ",array[array.length-1]);
