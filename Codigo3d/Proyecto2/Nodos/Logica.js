//Llamo el resultado
const res = require("../resultado")
let resultado = res.Resultado;

class logica{
    //constructor
    constructor(izq, simbolo, der){
        this.izq = izq;
        this.simbolo = simbolo;
        this.der = der;
    }

    //metodos
    ejecutar(ctx,structs){
        let izq_res = this.izq.ejecutar(ctx,structs); //objeto resultado
        let der_res = null;

        if(this.der != null){
            der_res = this.der.ejecutar(ctx,structs); //objeto resultado   
        }


        //obtengo mi temporal
        let verdadera =  "";
        let falsa = "";
        let cad = "";

        switch(this.simbolo){
            case "&&":  cad = izq_res.cadena + "\n";
                        cad += izq_res.valor.verdadera + ":\n";
                        cad += der_res.cadena + "\n";
                        verdadera = structs.regresarTag();
                        falsa += izq_res.valor.falsa + "," + der_res.valor.falsa;
                        break;

            case "||":  cad = izq_res.cadena + "\n";
                        cad += izq_res.valor.falsa + ":\n";
                        cad += der_res.cadena + "\n";
                        falsa = structs.regresarTag();
                        verdadera = izq_res.valor.verdadera + "," + der_res.valor.verdadera;
                        break;

            case "!":   cad = izq_res.cadena + "\n";
                        verdadera = izq_res.valor.falsa; 
                        falsa = izq_res.valor.verdadera;  
                        break;
        }

        return new resultado({verdadera:verdadera, falsa:falsa}, "bool", cad);
    }
}

//exporto el modulo
exports.N_Logica = logica;