//Llamo el resultado
const res = require("../resultado")
let resultado = res.Resultado;

class aritmetica{
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
        let temporal = structs.regresarTemp();

        //va una validacion de tipos

        let cad = izq_res.cadena + "\n" + der_res.cadena + "\n";
        switch(this.simbolo){
            case "+": cad += temporal + " = " + izq_res.valor + " + " + der_res.valor;break;
            case "-": cad += temporal + " = " + izq_res.valor + " - " + der_res.valor;break;
            case "*": cad += temporal + " = " + izq_res.valor + " * " + der_res.valor;break;
            case "/": cad += temporal + " = " + izq_res.valor + " / " + der_res.valor;break;
        }
        return new resultado(temporal, "numero", cad);
    }
}

//exporto el modulo
exports.N_Aritmetica = aritmetica;