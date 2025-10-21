function manipulateArr() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  arr.unshift(2);
  arr;
  arr.shift();
  arr;
  arr.splice(0, 5, 33, 33);
  arr;

  const num = 9999;
  const arr1 = [1, 2, 3, 4, 5];
  const arr2 = [11, 22, 33, 44, 55];

  let numbs = arr1.concat(num, arr2);
  numbs;
}
manipulateArr();

function verification() {
  const isEven = (x) => x % 2 === 0;
  let items = [2, 4, 6, 8, 10];
  const verifyEvery = items.every(isEven); // para quando for false
  const verifySome = items.every(isEven); // para quando for true
  verifyEvery;
  verifySome;
}
verification();

function iteration() {
  let lista = [2, 4, 6, 8, 10];
  const mult = (x) => {
    x * 2;
    return i;
  };
  for (let i = 0; i < lista.length; i++) {
    console.log(lista[i]);
  }
  for (i in lista) {
    console.log(lista[i]);
  }

  lista.forEach((element) => console.log(element * 3.333));
}
iteration();

function mapping() {
  let choices = [222, 444, 666, 555];
  const isEven = (x) => x % 2 === 0;
  const myChoices = choices.map(isEven);
  console.log(myChoices);

  const evenChoices = choices.filter(isEven);
  console.log(evenChoices);

  let id = [1, 2, 3, 4, 5];
  let name = ['Felipe', 'Gabi', 'Oliver', 'Olavo', 'Angela'];
  const users = id.map((id, index) => {
    return {
      id: id,
      name: name[index],
    };
  });
  console.log(users);
}
mapping();

let name = ['Felipe', 'Gabi', 'Oliver', 'Olavo', 'Angela'];
console.log(name.includes('Felipe'));
