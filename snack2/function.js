'use strict';

//===================================================
// VALIDAZIONE LISTA BICICLETTE
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