//aqui tengo lo que necesito
const structs = require("./estructuras");
const ctxs = require("./contexto");
const nodos = require("./index");
//esto es para leer la entrada y la gramatica
var fs = require('fs'); 
var parser = require('./gramatica');
const resultados = require("./resultado")
let ctx = ctxs.Contexto;
//crearemos nuestras variables globales
var contexto_global = new ctx(null);
//leemos el archivos de entrada
fs.readFile('./entrada.txt', (err, data) => {
    if (err) throw err;
    let arbol = parser.parse(data.toString());
    //console.log(arbol);
    let res = arbol.ejecutar(contexto_global,structs);
    console.log(res.cadena);
});