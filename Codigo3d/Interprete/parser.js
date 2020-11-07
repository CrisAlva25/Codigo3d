var fs = require('fs'); 
var parser = require('./gramatica');
var instrucciones = {}
var directorio_etiquetas = {}
var tablita = {}

fs.readFile('./entrada.txt', (err, data) => {
    if (err) throw err;
    let arbol = parser.parse(data.toString());
    ejecutar(arbol.insts)
});

function ejecutar(inst){
    //agrego a mi diccionario de instrucciones cada linea
    inst.forEach(element => {
        instrucciones[element.linea] = element.inst;
    });

    //ahora solo quiero hacer un directorio de etiquetas (recuerden que la etiqueta es la instruccion con identificador 3)
    for(var key in instrucciones){
        if(instrucciones[key].inst == 3 ){
            //como las etiquetas pueden ser varias tengo que agregar cada una a la misma linea
            instrucciones[key].nodo.forEach(element => {
                //como la key es la linea donde esta la etiqueta entonces la guardo
                directorio_etiquetas[element] = key;
                //ahora ya deberia tener las etiquetas
            });
        }
    }

    const lineas_total = Object.keys(instrucciones).length;
    let IP = 1;
    console.log("-------    EJECUCION INICIADA     ----------")
    while(true){

        //realiza la instruccion a la cual apunta el ip
        //console.log("IP -> ", IP);
        var sentencia = instrucciones[IP];
        switch(sentencia.inst){
            case 1: ejecutarAsignacion(sentencia.nodo); break;
            case 2: IP = ejecutarIF(sentencia.nodo, IP); break;
            case 3: break;
            case 4: console.log(sentencia.nodo); break;
            case 5: IP = directorio_etiquetas[sentencia.nodo[0]]; break;
        }

        //aumento mi instruccionn
        IP++;
        //aqui dentengo mi ejecucion
        if(IP > lineas_total){
            break;
        }
    }
    console.log("-------    EJECUCION TERMINADA    ----------")
    console.log("tablita: ", tablita);
    console.log("etiquetas: ", directorio_etiquetas);
    //ahora ya con las etiquetas puedo hacer las instrucciones
    //while(True){

    //}
}

function ejecutarAsignacion(nodo){
    var izq = getValor(nodo.valor.izq);
    var der = getValor(nodo.valor.der);

    valor = 0;
    switch(nodo.valor.opera){
        case "+": valor = izq + der; break;
        case "-": valor = izq - der; break;
        case "*": valor = izq * der; break;
        case "/": valor = izq / der; break;
    }
    tablita[nodo.id] = valor;
}

function ejecutarIF(nodo, IP_ACTUAL){
    var izq = getValor(nodo.evaluacion.izq);
    var der = getValor(nodo.evaluacion.der);

    valor = false;
    switch(nodo.evaluacion.opera){
        case "<": valor = izq < der; break;
        case ">": valor = izq > der; break;
        case "<=": valor = izq <= der; break;
        case ">=": valor = izq >= der; break;
        case "==": valor = izq == der; break;
        case "!=": valor = izq != der; break;
    }
    return valor ? directorio_etiquetas[nodo.etqV[0]] - 1 : IP_ACTUAL;
}

function getValor(nodo){
    return nodo.tipo == 2 ? nodo.valor : tablita[nodo.valor[0]];
}