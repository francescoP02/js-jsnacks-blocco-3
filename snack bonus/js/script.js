// **BONUS
// Crea due tag div con due id diversi. Un div avrà il testo colorato di rosso mentre l’altro di verde. Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.

const number = [1,2,3,4,5,6,7,8,9,10,11];
const odd = [];
const even = [];

number.forEach(number => {
    if (number % 2 == 0) {
        even.push(number);
    } else {
        odd.push(number);
    }
});

document.getElementById("green").innerHTML = `<h1 style="color: green;">I numeri pari sono: ${even}</h1>`;

document.getElementById("red").innerHTML = `<h1 style="color: red;">I numeri dispari sono: ${odd}</h1>`;