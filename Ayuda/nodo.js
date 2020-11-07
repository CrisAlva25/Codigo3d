const res = require("./resultado")
let resultado = res.Resultado;

const ctxs = require("./contexto")
let simbolo = ctxs.Simbolo;

// 1 -> ope arit de 3 (2+2, 5+5, 8*9)
// 12 -> unarias (-1 , -52)
// 2 -> ope rel 
// 3 -> ope logica 
class nodo_operacion{
    //constructor
    constructor(tipo, izq, simbolo, der){
        this.tipo = tipo;
        this.izq = izq;
        this.simbolo = simbolo;
        this.der = der;
    }

    //metodos
    aritmetica(ctx){
        let izq_res = this.izq.ejecutar(ctx); //objeto resultado
        let der_res = this.der.ejecutar(ctx); //objeto resultado

        //va una validacion de tipos

        let valor = 0;
        switch(this.simbolo){
            case "+": valor = parseInt(izq_res.valor) + parseInt(der_res.valor); break;
            case "-": valor = parseInt(izq_res.valor) - parseInt(der_res.valor); break;
            case "*": valor = parseInt(izq_res.valor) * parseInt(der_res.valor); break;
            case "/": valor = parseInt(izq_res.valor) / parseInt(der_res.valor); break;
            case "**": valor = parseInt(izq_res.valor) ** parseInt(der_res.valor); break;
        }
        return new resultado(valor, "numero");
    }

    relacional(ctx){
        return new resultado("exito","exito");
    }

    logica(ctx){
        return new resultado("exito","exito");
    }

    ejecutar(ctx){
        switch(this.tipo){
            case 1: return this.aritmetica(ctx);
            case 2: return this.relacional(ctx);
            case 3: return this.logica(ctx);
            default: console.log("error de algo"); return null; //manejo de errores
        }
    }

}

class nodo_entero{
    constructor(valor){
        this.valor = valor;
    }
    //todos los nodos tienen un metodo ejecutar que retornan un objeto tipo "resultado"
    ejecutar(ctx){
        return new resultado(this.valor, "entero");
    }
}

class nodo_variable_llamada{
    constructor(nombre){
        this.nombre = nombre
    }

    ejecutar(ctx){
        let simb = ctx.get(this.nombre); //ctx es un contexto
        if(simb != null){
            //validar que el simbolo sea una variable
            return new resultado(simb.valor, simb.tipo)
        }
        return new resultado("error: el simbolo con el nombre " + this.nombre + "no existe","error");
    }
}

class nodo_variable_declaracion{
    constructor(nombre, valor){
        this.nombre = nombre;
        this.valor = valor;
    }

    ejecutar(ctx){
        let res = this.valor.ejecutar(ctx); //esto es un resultado
        //console.log(res);
        //tengo que verificar que res no sea un error

        let retorno = ctx.put(this.nombre, new simbolo(this.nombre, res.valor, res.tipo));
        if(retorno){
            return new resultado("exito", "exito");
        }
        return new resultado("error", "error");
    }
}

class nodo_instrucciones{
    constructor(){
        this.instrucciones = []
    }

    agregarInstruccion(instruccion){
        this.instrucciones.append(instruccion);
    }

    ejecutar(ctx){
        for (inst in this.instrucciones){
            let res = inst.ejecutar(ctx);
            //validacion de que el resultado es correto
        }
    }
}

class if_inst{
    constructor(condcion, inst_v, inst_f){
        this.condcion = condicion;
        this.inst_v = inst_v;
        this.inst_f = inst_f
    }

    ejecutar(ctx){
        //va como se ejecuta, recorda esto tiene que retornar un resultado
    }
}

class while_inst{
    constructor(condicion, cuerpo){
        //bla bla bla
    }
    ejecutar(ctx){
        //bla bla bla
    }
}

class metodo{
    constructor(nombre, params, cuerpo){
        //aqui van los this
    }
    ejecutar(ctx){

    }
}
module.exports = {
    operacion: nodo_operacion,
    Var_llamada : nodo_variable_llamada,
    Var_declaracion : nodo_variable_declaracion,
    entero : nodo_entero
}

const entero = 0;
const cadena = 1;
const error = 2;

                    // Entero Cadena Error
let matriz_suma =   [
                        [entero, cadena, error],//entero
                        [cadena, cadena, error],//cadena
                        [error,  error,  error]//error
                    ]