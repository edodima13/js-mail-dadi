/*Mail

Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.*/



//chiedere la mail all'utente
let email = prompt("inserisci la tua email");

//fare una lista di email da accettare
let emailRight = ["tizio@gmail.com","caio@hotmail.it","sempronio@libero.it"];

let emailTrovata = false

for ( let i=0; i < emailRight.length; i++){
    if ( email === emailRight [i] ) {
        emailTrovata = true
    }    
};

if ( emailTrovata === true){
    console.log("l'email inserita è corretta")
}

else {
    console.log("dati non validi")
}


//stampare un messaggio che informa che i dati inseriti sono corretti




/*Gioco dei dadi

Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi ha il numero più alto.  (e se pari?)*/

//generare un numero random per l'utente
let userNumber = Math.floor(Math.random() * 5) +1;

//generare un numero random per il computer
let computerNumber = Math.floor(Math.random() * 5) +1;

console.log(userNumber, computerNumber);

if (userNumber < computerNumber){
    console.log("hai perso, mi dispiace...")
} else if (userNumber > computerNumber){
    console.log("hai vinto, complimenti!")
} else{
    console.log("pareggio")
};
