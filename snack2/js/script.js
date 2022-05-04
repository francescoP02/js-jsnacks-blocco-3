// 2. Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando a somma degli elementi è minore di 50.

const numArray = [];
let sum = 0;

while (sum < 50) {
    const userNum = parseInt(prompt("Inserisci un numero"));
    sum += userNum;
    if (sum < 50) {
        numArray.push(userNum);
    };
}

console.log(numArray);
console.log(sum);
