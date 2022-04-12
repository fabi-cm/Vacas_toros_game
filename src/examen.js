function ternera_codigo(codigo, intento){
    let numeros_codigo = codigo.split("");
    let numeros_intento = intento.split("");

    let toro = "";
    let vaca = "";
    let ternera = "";
    let resp = "";

    for (let i = 0; i < numeros_codigo.length; i++) {
        if (Number(numeros_codigo[i]) == Number(numeros_intento[i])) {
            toro += "!";
        }
        for (let j = 0; j < numeros_intento.length; j++){

            if (Number(numeros_codigo[i]) == Number(numeros_intento[j]) && Number(numeros_codigo[i]) != Number(numeros_intento[i])) {
                vaca += "*";
            }  
            if ((Number(numeros_codigo[i]) + 1) ==  Number(numeros_intento[j]) || (Number(numeros_codigo[i]) - 1) ==  Number(numeros_intento[j])){
                ternera += "#";
            }
        }
    }
    resp = toro + vaca + ternera;
    return resp;
}