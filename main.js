/*

Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.


*/

//creazione di un array vuoto

const users= [""]
console.log(users);

// chiedo di inserire un numero
const user_one = prompt("inserisci un numero da 1 a 6")
console.log(user_one)

let somma
let numero_utente

for(let i = 1; i < 6 ; i++){
    numero_utente = parseInt(prompt("inserisci un numero 10 volte"));
    somma = parseInt(numero_utente + somma)
    somma =  somma + numero_utente
    Math.floor(Math.random() * 10) + 2)
}

