function validar_codigo(codigo, intento) {
    let caracteres_codigo = codigo.split("");
    let caracteres_intento = intento.split("");
    
    let toros = "";
    let vacas = "";
    let resp = "";

    for (let i = 0; i < caracteres_codigo.length; i++) {
        // Busca las coincidencias en el codigo y el intento
        if (caracteres_codigo[i] == caracteres_intento[i]) {
            toros = toros + caracteres_intento[i];
        }
        for (let j = 0; j < caracteres_intento.length; j++) {
            // Busca todas las caracteristicas que aparecen en el codigo;
            if (caracteres_codigo[i] == caracteres_intento[j] && caracteres_codigo[i] != caracteres_intento[i]) {
                vacas = vacas + caracteres_intento[j];
            }
        }
    }

    resp = imprimir_toros(toros) + imprimir_vacas(vacas);
    return resp;
}

function imprimir_toros(toros) {
    let caracteres_toros = toros.split("");
    let resp_toro = "";
    for (let i = 0; i < caracteres_toros.length; i++) {
        resp_toro = resp_toro + "!";
    }
    return resp_toro;
}

function imprimir_vacas(vacas) {
    let caracteres_vacas = vacas.split("");
    let resp_vacas = "";
    for (let i = 0; i < caracteres_vacas.length; i++) {
        resp_vacas = resp_vacas + "*";
    }
    return resp_vacas;
}

export default validar_codigo;

// console.log(validar_codigo("24io","e2io"));
