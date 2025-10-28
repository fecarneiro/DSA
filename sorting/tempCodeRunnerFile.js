    console.log(`i=${i}, j=${j}`);
  }
}

arr = [5, 2, 8, 1];
let count = 0;
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] != arr[i]) {
      console.log(`i=${i} vs j=${j}: ${arr[i]} vs ${arr[j]}`);
      count++;
    }
  }
}
console.log(count);