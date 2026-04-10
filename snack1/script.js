'use strict';

// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.

// catalogo.js

const catalogoBiciclette = [
    {
        nome: "Specialized S-Works Tarmac SL8",
        peso: 6.6
    },
    {
        nome: "Trek Emonda SLR 9",
        peso: 6.6
    },
    {
        nome: "Cannondale SuperSix EVO Lab71",
        peso: 6.8
    },
    {
        nome: "Canyon Ultimate CFR",
        peso: 6.3
    },
    {
        nome: "Pinarello Dogma F",
        peso: 6.9
    },
    {
        nome: "Giant TCR Advanced SL 0",
        peso: 6.4
    },
    {
        nome: "Wilier Filante SLR",
        peso: 6.8
    },
    {
        nome: "Bianchi Specialissima RC",
        peso: 6.6
    },
    {
        nome: "Colnago V4Rs",
        peso: 6.9
    },
    {
        nome: "Scott Addict RC Ultimate",
        peso: 6.7
    }
];

// --- VALIDAZIONE DATI LISTA ---

const risultatoValidazione = validaListaBiciclette(catalogoBiciclette); //Richiamo la funzione per la validazione

if (risultatoValidazione === -1) {                                      //Se mi restituisce -1 il catalogo non esiste
    console.error('Il catalogo non esiste');
} else if (risultatoValidazione === 0) {                                //Se mi restituisce 0 il catalogo è vuoto
    console.error('Il catalogo è vuoto');
} else if (risultatoValidazione === 1) {                                //Se mi restituisce 1 i dati sono errati
    console.error('Dati non validi');
} else {

    console.log('Dati validati');

    // Trovo la prima bici leggera
    const risultatoBiciLeggera = controlloPesoMinore(risultatoValidazione);

    // Passo la lista e la bici trovata per estrarre tutti i pareggi
    const piuBiciLeggere = estraiTutteLeLeggere(risultatoValidazione, risultatoBiciLeggera);

    //  Stampo il peso record una volta sola
    console.log(`Il peso minore trovato è di ${risultatoBiciLeggera.peso}kg.`);

    //  Ciclo l'array per stampare tutte le bici che hanno quel peso
    for (let i = 0; i < piuBiciLeggere.length; i++) {
        const biciCorrente = piuBiciLeggere[i];

        console.log(`La bicicletta più leggera è:                                   
             NOME: ${biciCorrente.nome} 
             PESO: ${biciCorrente.peso}kg`);
    }
}