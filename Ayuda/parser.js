//esto es para leer la entrada y la gramatica
var fs = require('fs'); 
var parser = require('./gramatica');

const ctxs = require("./contexto")
let ctx = ctxs.Contexto;

const resultados = require("./resultado")

const nodos = require("./nodo")

//crearemos nuestras variables globales
var contexto_global = new ctx(null);

//leemos el archivos de entrada
fs.readFile('./entrada.txt', (err, data) => {
    if (err) throw err;
    let arbol = parser.parse(data.toString());
    //console.log(arbol);
    arbol.ejecutar(contexto_global);
    contexto_global.imprimir();
});