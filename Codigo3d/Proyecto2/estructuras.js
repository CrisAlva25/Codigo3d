//variables
var temp = 0
var tag = 0

//estructuras
var display = {}
var display_pointer = 0

var pila = {}
var stac_pointer = 0

var heap = {}
var heap_pointer = 0


function regresarTemp() {temp++; return "T"+temp;}
exports.regresarTemp = regresarTemp;

function regresarTag(){tag++; return "L"+tag;}
exports.regresarTag = regresarTag;

function retDisplay(){return display_pointer;}
exports.retDisplay = retDisplay;

function addDisplay(inicioTag, salidaTag,cicloCond){
    display_pointer++; 
    display[display_pointer] = {inicio:inicioTag, salida:salidaTag, contador:0, ciclo:cicloCond};
    //console.log("mi display");
    //console.log(display)
}
exports.addDisplay = addDisplay;

function getBreak(){
    if(display_pointer>0){
            display[display_pointer].contador++;
            return display[display_pointer].salida;
    }
    else{
            console.log("error: no existe un ciclo asociado, break");
    }
}
exports.getBreak = getBreak;
    
function getContinue(){
    if(display_pointer>0){
            for (var i = display_pointer; i > 0; i--) { 
                    if(display[display_pointer].ciclo){
                            return display[display_pointer ].inicio;
                    }
            }
            console.log("error: no existe un ciclo asociado con continue");
            return "tag_error";
    }
    else{
            console.log("error: no existe un ciclo asociado, contador 0, continue");
            return "tag_error";
    }
}
exports.getContinue = getContinue;

function downDisplay() {display_pointer--;}
exports.downDisplay = downDisplay;