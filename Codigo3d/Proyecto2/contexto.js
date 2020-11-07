class simbolo{
    constructor(nombre, valor, tipo){
        this.nombre = nombre;
        this.valor = valor;
        this.tipo = tipo;
        this.pos = 0;
    }

    set_pos(pos){
        this.pos = pos;
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
        this.pos = -1;
        this.size = 0;
    }

    //put
    put(nombre, simbolo){
        try {
            if(nombre in this.tabla){
                console.log("la variable con el nombre " + nombre + " ya existe");//manejo de errores
                return false;
            }
            simbolo.set_pos(this.get_pos());
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

    get_pos(){
        pos++;
        return this.pos;
    }
}

module.exports = {
    Simbolo: simbolo,
    Contexto: contexto
}