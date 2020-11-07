//Llamo el resultado
const { Resultado } = require("../resultado");
const res = require("../resultado")
let resultado = res.Resultado;

const ctxs = require("../contexto");
let ctxxx = ctxs.Contexto;

class cuerpo{
    //constructor
    constructor(instrucciones){
        this.instrucciones = instrucciones;
    }

    ejecutar(ctx, struct){
        let cadena = "";
        let resultado1 = null;
        this.instrucciones.forEach(instruccion =>{
                resultado1 = instruccion.ejecutar(ctx,struct)
                cadena += resultado1.cadena
            } 
        );
        return new resultado("ok","ok",cadena);
    }
}

exports.cuerpo = cuerpo;