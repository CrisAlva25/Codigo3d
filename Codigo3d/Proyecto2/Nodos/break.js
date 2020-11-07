//Llamo el resultado
const res = require("../resultado")
let resultado = res.Resultado;

class break_n{
    constructor(){}
    
    ejecutar(ctx, struct){
        let cadena = "goto " + struct.getBreak() + "\n";
        return new resultado("ok", "ok",cadena);
    }
}

exports.break_n = break_n;