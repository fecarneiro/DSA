/*
Loop externo roda N vezes (N = tamanho do array)
Loop interno roda N vezes em cada passada
Total: N × N = N² operações
Pior caso -> O(n²)
*/
let bubbleSort = (arr) => {
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
  return arr;
};
let arr = [7, 3, 9, 2];
console.log(bubbleSort(arr));
