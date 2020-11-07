//Llamo el resultado
const res = require("../resultado")
let resultado = res.Resultado;

class relacional{
    //constructor
    constructor(izq, simbolo, der){
        this.izq = izq;
        this.simbolo = simbolo;
        this.der = der;
    }

    //metodos
    ejecutar(ctx,structs){
        let izq_res = this.izq.ejecutar(ctx,structs); //objeto resultado
        let der_res = this.der.ejecutar(ctx,structs); //objeto resultado

        //obtengo mi temporal
        let verdadera =  structs.regresarTag();
        let falsa = structs.regresarTag();
        let cad = izq_res.cadena + "\n" + der_res.cadena + "\n";
        cad += "if " + izq_res.valor + " " + this.simbolo + " " + der_res.valor + " goto " + verdadera + "\n";
        cad += "goto " + falsa;
        return new resultado({verdadera:verdadera, falsa:falsa, cad}, "bool", cad);
    }
}

//exporto el modulo
exports.N_Relacional = relacional;