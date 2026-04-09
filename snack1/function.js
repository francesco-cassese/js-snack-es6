'use strict';

//===================================================
// VALIDAZIONE LISTA BICICLETTE
//===================================================

const validaListaBiciclette = lista => {

    if (!lista) {                     // Controllo se l'argomento passato esiste (non è nullo o undefined)
        return -1                               // Se la lista non è stata definita, restituisco il codice di errore -1
    }

    if (lista.length === 0) {         // Controllo se l'array è vuoto verificando la sua lunghezza
        return 0                                // Se non ci sono elementi all'interno, restituisco il codice 0
    }

    for (let i = 0; i < lista.length; i++) {  // Avvio un ciclo for per esaminare ogni elemento della lista

        const elemCorrente = lista[i]         // Salvo l'elemento corrente in una costante per rendere il codice più leggibile

        const numConvertito = Number(elemCorrente.peso);   // Converto il peso in numero

        if (elemCorrente.nome.trim() === '' || isNaN(numConvertito) || numConvertito <= 0) {      // Eseguo la validazione delle proprietà dell'oggetto corrente
            return 1                                                                                // Se anche una sola bicicletta non è valida, restituisco il codice di errore 1
        }
    }
    return lista;                     // Se il ciclo termina senza aver trovato errori, la lista è considerata valida restituisco l'intera lista di biciclette
}

//===================================================
// CONTROLLO PESO MINORE
//===================================================

const controlloPesoMinore = listaBiciclette => {

    let biciLeggera = listaBiciclette[0];      // Considero il primo elemento della lista quello più leggero

    for (let i = 1; i < listaBiciclette.length; i++) {     //Faccio partire il ciclo che controlla tutti gli altri

        const biciCorrente = listaBiciclette[i];           //Salvo l'elemento corrente in una costante per rendere il codice più leggibile

        if (biciLeggera > biciCorrente.peso) {             //Se ad ogni giro la bici considerata leggera ne trova una con un peso minore 
            biciLeggera = biciCorrente;                    //Allora quella diventa la biciLeggera
        }
    }
    return biciLeggera;                                    //Alla fine di tutto mi faccio restituire la bici più leggera
}