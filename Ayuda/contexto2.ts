class contexto{
    dic = new Map();
    viejo:contexto;

    constructor(viejo:any){
        this.viejo = viejo;
    }

    public put(nombre:string, simb:simbolo){
        this.dic.set(nombre, simb);
    }

    public get(nombre:string):any{
        if(this.dic.has(nombre)){
            return this.dic.get(nombre);
        }
        if(this.viejo == null){
            return null;
        }
        return this.viejo.get(nombre);
    }
}

class simbolo {
    nombre:string;
    valor:number;

    constructor(nombre:any, valor:any){
        this.nombre = nombre;
        this.valor = valor;
    }
}

var global_ctx = new contexto(null);
var a:simbolo = new simbolo("a", 123);
global_ctx.put("a",a);

var loca_ctx = new contexto(global_ctx);
var a2:simbolo = new simbolo("a", 456);
loca_ctx.put("b",a2);

console.log("cambiando");
console.log(loca_ctx.get("a").valor);