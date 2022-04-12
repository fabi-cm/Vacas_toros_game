function ocultar_codigo(codigo) {
    let caracteres_codigo = codigo.split("");
    let oculto = "";
    for (let i = 0; i < caracteres_codigo.length; i++) {
        oculto += "+";
    }
    return oculto;
}


// console.log(ocultar_codigo("2435exisde"))
export default ocultar_codigo;