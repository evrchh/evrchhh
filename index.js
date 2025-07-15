// Задание 6.6.1
let word = prompt("Введите слово:");
let reversedWord = word.split("").reverse().join("");
if (word === reversedWord) {
    alert("Слово является палиндромом");
} else {
    alert("Слово не является палиндромом");
}

// Задание 6.6.2
const arr = [1, 2, 3, 1, 5, 4, 2, 3, 5, 'they', 'don\'t', 'know', 'that', 'we', 'know', 'that', 'they', 'know' ];
const uniqueArr = [...new Set(arr)];
console.log(uniqueArr);

// Задание 6.6.3
let num = +prompt("Введите число:");
const arr2 = [];
for (let i = 0; i <= num; i += 1) {
  arr2.push(i);
}
console.log(arr2);

// Задание 6.6.4
for (let i = 0; i < 3; i++) {
  let row = "";
  for (let j = 0; j < 3; j++) {
    row += ((i + j) % 2 === 0 ? "X" : "O") + " ";
  }
  console.log(row.trim());
}

// Задание 6.6.5
const obj = {
    some: 'some',
    dom: 'text',
    arr: [1, 2, 3, 4, 5],
    tom: 'there'
};
const arrValues = [];
for (let key in obj) {
    if (Array.isArray(obj[key])) {
        for (const item of obj[key]) {
            arrValues.push(item);
        }
    } else {
        arrValues.push(obj[key]);
    }
}
console.log(arrValues);
