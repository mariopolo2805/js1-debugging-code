var arr1 = [1, 2, 3, 4, 5];
delete arr1[0];

console.log(arr1.length); // -> 5


var arr2 = [1, 2, 3, 4, 5];
arr2.splice(0, 1);

console.log(arr2.length); // -> 4

// ¿Por qué las longitudes de estos 2 listados son diferentes?