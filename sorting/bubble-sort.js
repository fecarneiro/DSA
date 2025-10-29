let arr = [7, 3, 9, 2];
let n = arr.length;
let swapped;

do {
  swapped = false;
  for (let i = 0; i < n - 1; i++) {
    let temp = arr[i];

    if (arr[i] > arr[i + 1]) {
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
      swapped = true;
      console.log(arr);
    }
  }
} while (swapped);

// [ 3, 7, 2, 9 ] e counter = 2

// Pega seu código do exercício 4.2/4.3 e coloca ele
// DENTRO de outro loop (loop externo).

// O loop externo deve rodar enquanto houver trocas
// (ou seja, enquanto counter > 0).

// Dica: Você vai precisar resetar o counter em cada passada!

// Array para testar: [7, 3, 9, 2]
// Resultado esperado: [2, 3, 7, 9]
