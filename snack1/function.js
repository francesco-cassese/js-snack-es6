'use strict';

const validaListaBiciclette = listaBiciclette => {

    if (!listaBiciclette) {                     // Controllo se l'argomento passato esiste (non è nullo o undefined)
        return -1                               // Se la lista non è stata definita, restituisco il codice di errore -1
    }

    if (listaBiciclette.length === 0) {         // Controllo se l'array è vuoto verificando la sua lunghezza
        return 0                                // Se non ci sono elementi all'interno, restituisco il codice 0
    }

    for (let i = 0; i < listaBiciclette.length; i++) {  // Avvio un ciclo for per esaminare ogni elemento della lista

        const biciCorrente = listaBiciclette[i]         // Salvo l'elemento corrente in una costante per rendere il codice più leggibile

        if (biciCorrente.nome.trim() === '' || biciCorrente.peso <= 0) {    // Eseguo la validazione delle proprietà dell'oggetto corrente
            return 1                                                        // Se anche una sola bicicletta non è valida, restituisco il codice di errore 1
        }
    }
    return listaBiciclette;                     // Se il ciclo termina senza aver trovato errori, la lista è considerata valida restituisco l'intera lista di biciclette
}