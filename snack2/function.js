'use strict';

//===================================================
// VALIDAZIONE LISTA SQUADRE
//===================================================

const validaListaSquadre = lista => {

    if (!lista) {                     // Controllo se l'argomento passato esiste (non è nullo o undefined)
        return -1;                               // Se la lista non è stata definita, restituisco il codice di errore -1
    }

    if (lista.length === 0) {         // Controllo se l'array è vuoto verificando la sua lunghezza
        return 0;                                // Se non ci sono elementi all'interno, restituisco il codice 0
    }

    for (let i = 0; i < lista.length; i++) {  // Avvio un ciclo for per esaminare ogni elemento della lista

        const elemCorrente = lista[i];         // Salvo l'elemento corrente in una costante per rendere il codice più leggibile

        const punti = Number(elemCorrente.puntiFatti); //Converto i numeri
        const falli = Number(elemCorrente.falliSubiti);

        if (elemCorrente.nome.trim() === "" || isNaN(punti) || punti < 0 || isNaN(falli) || falli < 0) {
            return 1; // Se una squadra non è valida, esco subito con errore
        }
    }

    return lista;         // Se il ciclo termina senza aver trovato errori, la lista è considerata valida restituisco l'intera lista di biciclette
}

//===================================================
// FUNZIONE GENERA DATI SQUADRE
//===================================================

const popolaDatiSquadre = lista => {

    for (let i = 0; i < lista.length; i++) {                               // Avvio un ciclo for per scorrere ogni squadra presente nella lista

        let elemCorrente = lista[i];                                       // Salvo l'elemento corrente in una variabile per modificarne le proprietà

        elemCorrente.falliSubiti = Math.floor(Math.random() * 20) + 1;     // Genero un numero casuale tra 1 e 20 e lo assegno ai falli subiti

        elemCorrente.puntiFatti = Math.floor(Math.random() * 20) + 1;      // Genero un numero casuale tra 1 e 20 e lo assegno ai punti fatti
    }
    return lista;                                                          // Restituisco la lista aggiornata con i valori casuali inseriti
}

//===================================================
// FUNZIONE ESTRAI DATI
//===================================================

const estraiFalliSubiti = lista => {

    let risulato = [];

    for (let i = 0; i < lista.length; i++) {

        const elemEstratto = {
            nome: lista[i].nome,
            falliSubiti: lista[i].falliSubiti
        };

        risulato.push(elemEstratto);
    }
    return risulato;
}

