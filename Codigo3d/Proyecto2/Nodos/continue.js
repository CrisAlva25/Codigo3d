//Llamo el resultado
const res = require("../resultado")
let resultado = res.Resultado;

class continue_n{
    constructor(){}
    
    ejecutar(ctx, struct){
        let cadena = "goto " + struct.getContinue() + "\n";
        return new resultado("ok", "ok",cadena);
    }
}

exports.continue_n = continue_n;