'use strict';

// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

const squadreDiCalcio = [
    {
        nome: "Inter",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Juventus",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Milan",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Napoli",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Roma",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Atalanta",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Lazio",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Fiorentina",
        puntiFatti: 0,
        falliSubiti: 0
    }
];

// --- VALIDAZIONE ---

const risultatoValidazione = validaListaSquadre(squadreDiCalcio); //Richiamo la funzione per la validazione

if (risultatoValidazione === -1) {                                      //Se mi restituisce -1 la lista non esiste
    console.error('La lista non esiste');
} else if (risultatoValidazione === 0) {                                //Se mi restituisce 0 la lista è vuoto
    console.error('La lista è vuota');
} else if (risultatoValidazione === 1) {                                //Se mi restituisce 1 i dati sono errati
    console.error('Dati non validi');
} else {
    console.log('Dati validati');                                       //Se restituisce la lista completa, i dati sono validati
}

const listaPopolata = popolaDatiSquadre(squadreDiCalcio);               //Richiamo la funzione per modificare gli oggetti

const listaFalliSubiti = estraiFalliSubiti(listaPopolata);              //Estraggo gli oggetti da quella lista solo con nome e falli subiti

console.log(listaFalliSubiti);                                          //Stampo la lista solo con il nome e i falli