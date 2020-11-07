const res = require("../resultado")
let resultado = res.Resultado;
class entero {
    constructor(valor){
        this.valor = valor;
    }
    //todos los nodos tienen un metodo ejecutar que retornan un objeto tipo "resultado"
    ejecutar(ctx){
        return new resultado(this.valor, "entero", "");
    }
}

exports.n_entero = entero;

