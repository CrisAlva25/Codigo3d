//Llamo el resultado
const res = require("../resultado")
let resultado = res.Resultado;

const ctxs = require("../contexto");
let ctxxx = ctxs.Contexto;

class if_n{
    //constructor
    constructor(condicion, cuerpo){
        this.condicion = condicion;
        this.cuerpo = cuerpo;
    }

    ejecutar(ctx, struct){
        let cadena = "";
        let resCondicion = this.condicion.ejecutar(ctx,struct);
        let contexto_nuevo = new ctxxx(ctx);
        let resSentencias = this.cuerpo.ejecutar(contexto_nuevo,struct);

        cadena += resCondicion.cadena + "\n";
        cadena += resCondicion.valor.verdadera + ":\n"
        cadena += resSentencias.cadena + "\n";
        cadena += resCondicion.valor.falsa +":\n";
        return new resultado("ok", "ok",cadena);
    }
}

exports.if_n = if_n;