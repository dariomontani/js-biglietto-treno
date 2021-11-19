// Descrizione
// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km(0.21 € al km)
// va applicato uno sconto del 20 % per i minorenni
// va applicato uno sconto del 40 % per gli over 65.
// L’output del prezzo finale va messo fuori in forma umana(con massimo due decimali, per indicare centesimi sul prezzo).Questo richiederà un minimo di ricerca.

// chiedo all'utente quanti chilometri dovrà percorrere
let km = parseInt(prompt('inserisci qui i chilometri che vuoi percorrere'));
console.log('chilometri', km);

// chiedo all'utente la sua età
let eta = parseInt(prompt('inserisci qui la tua età'));
console.log('età', eta);

// definisco il prezzo del biglietto in base ai chilometri
let prezzoBigliettoKm = 0.21 * km;
console.log('prezzo biglietto in base ai chilometri', prezzoBigliettoKm);

// prezzo finale tenendo conto dello sconto in base all'età
if (eta < 18) {
    console.log('prezzo scontato del 20%', prezzoBigliettoKm - (prezzoBigliettoKm / 100 * 20));
} else if (eta > 65) {
    console.log('prezzo scontato 40%', prezzoBigliettoKm - (prezzoBigliettoKm / 100 * 40));
} else {
    console.log('prezzo pieno', prezzoBigliettoKm);
}