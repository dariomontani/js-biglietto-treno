// Descrizione
// Il programma dovrà chiedere all’utente la città che vuole visitare e l’età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km(0.21 € al km)
// va applicato uno sconto del 20 % per i minorenni
// va applicato uno sconto del 40 % per gli over 65.
// L’output del prezzo finale va messo fuori in forma umana(con massimo due decimali, per indicare centesimi sul prezzo).Questo richiederà un minimo di ricerca.

const milano = "milano";
const roma = "roma";
const palermo = "palermo";

let prezzoMilano = 10 * 0.21;
let prezzoRoma = 20 * 0.21;
let prezzoPalermo = 30 * 0.21;

// chiedo all'utente quanti chilometri dovrà percorrere
let citta = prompt('scegli la tua destinazione tra: milano - roma - palermo');
console.log('chilometri', citta);

// chiedo all'utente la sua età
let eta = parseInt(prompt('inserisci qui la tua età'));
console.log('età', eta);

// definisco il prezzo del biglietto in base alla destinazione
if (citta === milano) {
    console.log('tariffa Milano', prezzoMilano);
} else if (citta === roma) {
    console.log('tariffa Roma', prezzoRoma);
} else {
    console.log('tariffa Palermo', prezzoPalermo);
}

// prezzo finale tenendo conto dell'età
if (eta < 18, citta === milano) {
    console.log('prezzo milano scontato 20%', prezzoMilano - (prezzoMilano / 100 * 20));
} if (eta < 18, citta === roma) {
    console.log('prezzo roma scontato 20%', prezzoRoma - (prezzoRoma / 100 * 20));
} if (eta < 18, citta === palermo) {
    console.log('prezzo palermo scontato 20%', prezzoPalermo - (prezzoPalermo / 100 * 20));
} if (eta > 65, citta === milano) {
    console.log('prezzo milano scontato 20%', prezzoMilano - (prezzoMilano / 100 * 20));
} if (eta > 65, citta === roma) {
    console.log('prezzo roma scontato 20%', prezzoRoma - (prezzoRoma / 100 * 20));
} if (eta > 65, citta === palermo) {
    console.log('prezzo palermo scontato 20%', prezzoPalermo - (prezzoPalermo / 100 * 20));
// } if (eta > = 18 && < = 65, citta === milano) {
//     console.log('prezzo milano scontato 20%', prezzoMilano - (prezzoMilano / 100 * 20));
// } if (eta > = 18 && < = 65, citta === roma) {
//     console.log('prezzo roma scontato 20%', prezzoRoma - (prezzoRoma / 100 * 20));
// } if (eta > = 18 && < = 65, citta === palermo) {
//     console.log('prezzo palermo scontato 20%', prezzoPalermo - (prezzoPalermo / 100 * 20));
// }