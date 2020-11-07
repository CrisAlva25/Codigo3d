//Llamo el resultado
const res = require("../resultado")
let resultado = res.Resultado;

const ctxs = require("../contexto");
let ctxxx = ctxs.Contexto;

class while_n{
    //constructor
    constructor(condicion, cuerpo){
        this.condicion = condicion;
        this.cuerpo = cuerpo;
    }

    ejecutar(ctx, struct){
        let resCondicion = this.condicion.ejecutar(ctx,struct);

        let etqLoop = struct.regresarTag();
        let etqSalida = struct.regresarTag();
        structs.addDisplay(etqLoop,etqSalida,true);

        let contexto_nuevo = new ctxxx(ctx);
        let resSentencias = this.cuerpo.ejecutar(contexto_nuevo,structs);
        struct.downDisplay();

        let cadena = etqLoop + ":\n" ;
        cadena += resCondicion.cadena + "\n";
        cadena += resCondicion.valor.verdadera + ":\n"
        caddena += resSentencias.cadena + "\n";
        cadena += resCondicion.valor.falsa + "," + etqSalida + ":\n";
        return new resultado("ok", "ok",cadena);
    }
}

exports.while_n = while_n;