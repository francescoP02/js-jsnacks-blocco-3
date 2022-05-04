// 1. Crea due array che hanno un numero di elementi diversi. Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.

const firstArray = [1,2,3,4];
const secondArray = [1,2,3,4,5,6,7,8,9];

const minArray = firstArray > secondArray ? secondArray : firstArray;

while (firstArray.length !== secondArray.length) {
    minArray.push(getRndInteger(1,99));
}

console.log(firstArray.length, firstArray);
console.log(secondArray.length, secondArray);

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}