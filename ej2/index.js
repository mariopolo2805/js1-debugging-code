// 🤯 Usa lo aprendido para depurar y debuggear para descifrar el array objetivo 🤯

const sumTwo = (param) => param + 2;
const multiplyByFive = (param) => param * 5;
const generateMultiplier = (multi) => (num) => multi * sumTwo(num);
const multiplyBySeven = generateMultiplier(7);

const iterateList = (list) => {
  const reverse = list.reverse();
  return reverse.map(item => multiplyBySeven(item));
}

const getEvenOnly = (list) => {
  return list.filter(item => multiplyByFive(item) % 2 === 0);
}

// ¿Qué array debo declarar aquí para obtener como resultado final --> [ 168, 630, 238, 392 ]?
let list = [0, null, undefined, -1];

const result = getEvenOnly(iterateList(list));
console.log(result);