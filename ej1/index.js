var dividend = 18;
var numbers = [2, 3, 4, 5, 6, 7, 8, 9];
var idx;

for (idx = 0; idx < numbers.length; idx++) {
  var factor;
  var divisor = numbers[idx];

  if (dividend % divisor === 0) {
    factor = true;
  }

  if (factor) {
    console.log(divisor + ' is a factor of ' + dividend + '!');
  }
}

// ¿Por qué este script nos muestra que todos los números son divisores de 18?

// Los divisores de 18 deberían ser 2, 3, 6 y 9