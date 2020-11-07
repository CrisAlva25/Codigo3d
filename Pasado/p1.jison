%{
    var funcs = {
        decidir: function(a, b) { if(a>=b){return a;} else {return b;} }
    }
    var memoria = 1;
    var arboles = [];
    var rank = [];
    var alturas = [];
    var res = [];
%}

%lex
%options case-insensitive
entero [0-9]+
%%

[ \r\t]+            {}
\n                     return 'SALTO'

{entero}               return 'ENTERO'
"*"                   return 'POR'
"."                   return 'PUNTO'

<<EOF>>		            return 'EOF'
.                       { console.error('Este es un error léxico: ' + yytext + ', en la linea: ' + yylloc.first_line + ', en la columna: ' + yylloc.first_column); }
/lex

%start INICIO

%%

INICIO : ENTERO SALTO L EOF   {
                            if(Number($1) == $3.cont){

                                console.log("La cantidad de arboles es la correcta ")
                            }
                            else{
                                console.log("La cantidad de arboles es la incorrecta ")
                            }
                            for (i = 0; i<arboles.length; i++){
                                str = "digraph G { nodesep=0.4; ranksep=0.5; {node[style=invis,label=\"\"]; cx_30;} {node[style=invis, label=\"\", width=.1];} "
                                str += rank[i]
                                str += arboles[i]
                                str += "}"
                                console.log(str)
                                console.log("Altura: " + alturas[i]/2)
                            }

                        }
       ;

L :  L SALTO E {
            rank.push($3.rank);
            arboles.push($3.cadena);
            alturas.push($3.altura);
            $$={cont:$1.cont + 1}
         }
  |  E  {
            rank.push($1.rank);
            arboles.push($1.cadena);
            alturas.push($1.altura);
            $$={cont:1}
        }
  ;

E : POR E E {
                mem = ++memoria;
                rankTmp = "";
                cadTmp = ""
                if($2.nodo != 0 && $3.nodo != 0){
                    rankTmp = "{rank=same; " + $2.nodo + "; " + $3.nodo+";} \n "
                    cadTmp = mem + "->" + $2.nodo + "\n" + mem + "->" + $3.nodo + "\n"
                }
                
                $$ = {
                        nodo: mem, 
                        altura: funcs["decidir"](Number($2.nodo),Number($3.nodo))+1 ,
                        rank: $2.rank + $3.rank + rankTmp,
                        cadena:$2.cadena + $3.cadena + cadTmp
                    }
            }
 |   PUNTO { 
                $$ = {
                        altura:0, 
                        nodo:0,
                        rank: "",
                        cadena: ""
                    } 
            }
 ;