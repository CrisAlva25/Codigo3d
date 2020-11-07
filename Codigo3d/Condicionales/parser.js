var fs = require('fs'); 
var parser = require('./gramatica');

fs.readFile('./entrada.txt', (err, data) => {
    if (err) throw err;
    valor = parser.parse(data.toString());
    escribir(valor);
});

function escribir(valor){
    fs.writeFile('../Interprete/entrada.txt', valor, function (err) {
        if (err) throw err;
        console.log("Archivo guardado");
      });
}