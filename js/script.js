/*
Il programma dovrà chiedere all'utente il numero di chilometri 
che vuole percorrere e l'età del passeggero.

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, 
secondo queste regole: il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni va applicato 
uno sconto del 40% per gli over 65.

L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, 
per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.


variabile km da percorrere (prompt)
variabile età passeggero (prompt)
var prezzo totale
var prezzoalKm (0.21)
var sconto minorenni (0.20)
var sconto senior
(0.40)
*/



// km da percorrerre 
const numeroKm = prompt('Inserisci il numero dei chilometri (km) che voi percorrere');
console.log(numeroKm);

// età del passeggero
const etaUtente = prompt('Inserisci la tua età');
console.log(etaUtente);

// costo del biglietto 
const costoBiglietto = (numeroKm * 0,21);
console.log(costoBiglietto);

// sconto per minnorenni
const discountForMinors = (0,2);

// sconto per over 65
const discountForOver65 = (0,2);

// messaggio base
let messaggio = "Il costo del biglietto è: ";
console.log(messaggio);

if ((numeroKm && !isNaN(numeroKm)) && (etaUtente && !isNaN(numeroKm))){
    if (etaUtente < 18) {
        messaggio += (costoBiglietto * discountForMinors).toFixed();
        console.log(costoBiglietto);

    
    } else if (etaUtente >= 18){
        const costoBiglietto = (numeroKm * 0,21);
        messaggio += costoBiglietto;
        console.log(costoBiglietto);
    
    } else (etaUtente < 18)  
    {
        messaggio += (costoBiglietto * discountForOver65).toFixed();
        console.log(costoBiglietto);
    }

} else{
    messaggio = 'Inserisci i dati correttamente per favore'
}

document.getElementById('biglietto').innerHTML += `<p>${messaggio}</p>`;







