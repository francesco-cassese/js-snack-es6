'use strict';

function validaListaBiciclette(listaBiciclette) {

    if (listaBiciclette === null) {
        return -1
    }

    if (listaBiciclette.length === 0) {
        return 0
    }

    for (let i = 0; i < listaBiciclette.length; i++) {

        const biciCorrente = listaBiciclette[i]

        if (biciCorrente.nome.trim() === '' || biciCorrente.peso <= 0) {
            return 1
        }
    }
    return listaBiciclette;
}