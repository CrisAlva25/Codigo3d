//Llamo el resultado
const res = require("../resultado")
let resultado = res.Resultado;

const ctxs = require("../contexto");
let ctxxx = ctxs.Contexto;

class print_n{
    //constructor
    constructor(ext){
        this.ext = ext;
    }

    ejecutar(ctx, struct){
        //let resExt = this.ext.ejecutar(ctx,struct);
        let cadena = "write(" + this.ext + ");\n";
        return new resultado("ok", "ok",  cadena);
    }
}

exports.print_n = print_n;