// 🏆 Snack 1
// Crea una funzione che somma due numeri.
// Crea una funzione dichiarativa chiamata somma che accetta due numeri e restituisce la loro somma.
// Poi, definisci la stessa funzione somma ma come funzione anonima assegnata a una variabile
// Quindi, riscrivi la funzione somma con la sintassi delle arrow functions.

function somma(num1, num2) {
  return num1 + num2;
}

const somma = function (num1, num2) {
  return num1 + num2;
};

const somma = (num1, num2) => num1 + num2;

// 🏆 Snack 2
// Crea una arrow function che calcola il quadrato di un numero.
// Definisci una funzione chiamata quadrato che accetta un numero e restituisce il suo quadrato in una sola riga.

const quadrato = (num) => num * num;

// 🏆 Snack 3
// Crea una funzione eseguiOperazione
// Definisci una funzione eseguiOperazione che accetta tre parametri: due numeri e una funzione operatore (callback).
// La funzione deve eseguire l'operazione fornita sui due numeri.

function eseguiOperazione(num1, num2, callback) {
  return callback(num1, num2);
}

function somma(a, b) {
  return a + b;
}

eseguiOperazione(3, 5, somma);

// 🏆 Snack 4
// Crea un generatore di funzioni creaTimer
// Scrivi una funzione creaTimer che accetta un tempo (in ms) e restituisce una nuova funzione che avvia un setTimeout
// per stampare "Tempo scaduto!".

function creaTimer(ms) {
  return setTimeout(() => {
    console.log("Tempo scaduto");
  }, ms);
}

// 🏆 Snack 5
// Crea una funzione stampaOgniSecondo con setInterval.
// Definisci una funzione che accetta un messaggio e lo stampa ogni secondo.
// Nota: Questa funzione creerà un loop infinito. Interrompilo manualmente o usa clearInterval() in un altro script.

function stampaOgniSecondo(mess) {
  return setInterval(() => {
    console.log(mess);
  }, 1000);
}
