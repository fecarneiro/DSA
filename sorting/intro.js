/*
 * https://claude.ai/chat/2ea26cf0-68a6-442f-87b2-93e3afa093ba
 */
let arr = [3, 7, 2];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    // console.log(`i=${i}, j=${j}`);
  }
}

arr = [5, 2, 8, 1];
let count = 0;
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] != arr[i]) {
      // console.log(`i=${i} vs j=${j}: ${arr[i]} vs ${arr[j]}`);
      count++;
    }
  }
}
// console.log(count);

// Passo 1: Use um loop para encontrar qual é o MAIOR número
// Passo 2: Descubra em qual POSIÇÃO ele está
// Passo 3: Troque ele com o primeiro elemento (posição 0)

arr = [5, 2, 8, 1];
let higher = arr[0];
let current = '';
let position = '';
for (let i = 0; i < arr.length; i++) {
  current = arr[i];
  if (current > higher) {
    higher = current;
    position = `index ${i} (posição ${i + 1})`;
  }
}

if () {

}

console.log(higher);
console.log(current);
console.log(position);
