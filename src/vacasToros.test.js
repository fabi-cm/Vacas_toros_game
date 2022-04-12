import validar_codigo from "./validarCodigo.js"
import ocultar_codigo from "./ocultarCodigo.js"
import ternera_codigo from "./examen.js"

describe("Juego Toros y Vacas", () => {
    it("Introducir un codigo de jugador1 y ocultarlo", () => {
        expect(ocultar_codigo("2435")).toEqual("++++");      
    });

    it("Validar respuesta de jugador 2", () => {
        expect(validar_codigo("2435","1234")).toEqual("!**");      
    });

    it("Validar respuesta de jugador 2 con letras", () => {
        expect(validar_codigo("2435au","ea34ou")).toEqual("!!**");      
    });

    it("Ternera #", () => {
        expect(ternera_codigo("2134","2403")).toEqual("!**#"); 
    });

    it("Primo %", () => {
        expect(validar_codigo("2134","2403")).toEqual("%%*#");
    });
});