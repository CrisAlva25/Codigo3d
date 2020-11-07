class simbolo{
    constructor(nombre, valor, tipo){
        this.nombre = nombre;
        this.valor = valor;
        this.tipo = tipo;
    }

    //es_variable(){return this.tipo == "variable";}
    obtener_hijos(pos){
        if (pos < this.arr_tama - 1){
            hijo = this.obtener_hijos.get(pos);
          return new resuñtado (hijo.tipo,hijo.valor);
        }
        return new resultado()
    }
}


class contexto{
    //constructor
    constructor(anterior){
        this.tabla = {};
        this.anterior = anterior;
    }

    //put
    put(nombre, simbolo){
        try {
            if(nombre in this.tabla){
                console.log("la variable con el nombre " + nombre + " ya existe");//manejo de errores
                return false;
            }
            this.tabla[nombre] = simbolo;
            return true;
          }
          catch(err) {
            //manejo de errores
            return false;
          }
    }

    //get
    get(nombre){
        if (nombre in this.tabla){
            return this.tabla[nombre];
        }
        if(this.anterior == null){
            return null; //manejo de errores
        }
        return this.anterior.get(nombre);
    }

    imprimir(){
        console.log(this.tabla);
    }
}


var global_ctx = new contexto(null);
var a = new simbolo("a", 123);
global_ctx.put("b",a);

var loca_ctx = new contexto(global_ctx);
var a2 =  new simbolo("a2", 456);
loca_ctx.put("a",a2);


console.log(loca_ctx.get("b").valor);

module.exports = {
    Simbolo: simbolo,
    Contexto: contexto
}