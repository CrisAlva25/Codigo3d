%{
        var temp = 0
        var tag = 0
        //NUEVO
        var display = {}
        var display_pointer = 0

        var funcs = {
                regresarTemp: function(){temp++; return "T"+temp;},

                regresarTag: function(){tag++; return "L"+tag;},
                //nuevo
                retDisplay: function(){return display_pointer;},

                addDisplay: function(inicioTag, salidaTag,cicloCond){
                                display_pointer++; 
                                display[display_pointer] = {inicio:inicioTag, salida:salidaTag, contador:0, ciclo:cicloCond};
                                //console.log("mi display");
                                //console.log(display)
                        },

                getBreak: function(){
                        if(display_pointer>0){
                                display[display_pointer].contador++;
                                return display[display_pointer].salida;
                        }
                        else{
                                console.log("error: no existe un ciclo asociado, break");
                        }
                },
                
                getContinue: function(){
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
                },
                downDisplay: function() {display_pointer--;}
        }
%}
%lex
%options case-insensitive
entero [0-9]+
singleQuote             ("'")
doubleQuote             ("\"")
character               ({singleQuote}((?:\\("n"|"t"|"r"|"\\"|"\""|"\'")|(?:(?!{singleQuote}).))?){singleQuote})
stringLiteral           ({doubleQuote}((?:\\{doubleQuote}|(?:(?!{doubleQuote}).))*){doubleQuote})
%%

[ \r\t]+            {}
\n                  {}

{character}           { yytext = yytext.substr(1,yyleng-2); return 'CHAR'; }
{stringLiteral}       { yytext = yytext.substr(1,yyleng-2); return 'STRING'; }
"if"                  return 'IF_PR'
"while"               return 'WHILE_PR'
"for"                 return 'FOR_PR'
"switch"              return 'SWITCH_PR'
"case"                return 'CASE_PR'
"print"               return 'PRINT_PR'
"to"                  return 'TO'
"var"                 return 'PR_VAR'
"break"               return 'BREAK_PR'
"continue"            return 'CONTINUE_PR'
([a-zA-Z])[a-zA-Z0-9_]*       return 'ID'
{entero}              return 'ENTERO'
"*"                   return 'POR'
"/"                   return 'DIV'
"-"                   return 'MENOS'
"+"                   return 'MAS'
"<"                   return 'MENORQUE'
">"                   return 'MAYORQUE'
"="                   return 'IGUAL'
"!="                  return 'DIFERENTE'
"&&"                  return 'AND'
"||"                  return 'OR'
"!"                   return 'NOT'
"("                   return 'PARA'
")"                   return 'PARC'
"["                   return 'BRACKET_A'
"]"                   return 'BRACKET_C'
"{"                   return 'LLAVEA'
"}"                   return 'LLAVEC'  
":"                   return 'DOSPUNTOS'  
";"                   return 'PUNTOCOMA'  
","                   return 'COMA'  
<<EOF>>		      return 'EOF'
.                       { console.error('Este es un error léxico: ' + yytext + ', en la linea: ' + yylloc.first_line + ', en la columna: ' + yylloc.first_column); }

/lex

%left OR
%left AND
%left MENORQUE MAYORQUE DIFERENTE
%left MAS MENOS
%left POR DIV
%right NOT

%start INICIO

%%

//recuerden que se inicia con una logica
INICIO  : SENTENCIAS EOF    {return $1;}
        ;

SENTENCIAS      : SENTENCIAS SENTENCIA  {$$ = $1 + "\n" + $2;}
                | SENTENCIA             {$$=$1;}
                ;


SENTENCIA       : WHILE  {$$=$1}
                | FOR    {$$=$1}
                | IF     {$$=$1}
                | SWITCH {$$=$1}
                | PRINT  {$$=$1}
                | BREAK  {$$=$1}
                | CONTINUE {$$=$1}
                ;

//nuevo
BREAK   : BREAK_PR PUNTOCOMA { $$="goto " + funcs['getBreak']();}
        ;

CONTINUE        : CONTINUE_PR PUNTOCOMA { $$="goto " + funcs['getContinue']();}
                ;

WHILE   : WHILE_PR PARA LOGICA PARC ACCION_WHILE LLAVEA SENTENCIAS LLAVEC {
                                                        funcs['downDisplay']();
                                                        cadena = $5.inicio + ": \n " + $3.cadena +  "\n " + $3.verdadera + ": \n";
                                                        cadena += $7 + "\ngoto " + $5.inicio + " \n " + $3.falsa + "," + $5.final + ": \n";
                                                        $$ = cadena;
                                                   }
        ;

//nuevo
ACCION_WHILE :  {
                  var inicio = funcs['regresarTag']();
                  var final = funcs['regresarTag']();
                  funcs['addDisplay'](inicio, final,true);
                  $$ = {inicio:inicio, final:final};
                }
        ;

FOR     : FOR_PR PR_VAR IGUAL EXP TO EXP ACCION_FOR LLAVEA SENTENCIAS LLAVEC {
                                                                        funcs['downDisplay']();
                                                                        cadena = $4.cadena + $6.cadena;
                                                                        cadena += "\nvar = 0 + " + $4.valor + "\n";
                                                                        cadena += $7.inicio + ":\n" + $9 + "\nvar = var + 1 \n";
                                                                        cadena += "if var <= " + $6.valor + " goto " + $7.inicio + "\n"
                                                                        //nuevo
                                                                        cadena += $7.final + ":\n"
                                                                        $$ = cadena;
                                                                  }
        ;

//nuevo
ACCION_FOR :  {
                  var inicio = funcs['regresarTag']();
                  var final = funcs['regresarTag']();
                  funcs['addDisplay'](inicio, final,true);
                  $$ = {inicio:inicio, final:final};
                }
        ;

IF      : IF_PR PARA LOGICA PARC LLAVEA SENTENCIAS LLAVEC {$$ = $3.cadena + "\n " + $3.verdadera + ": " + $6 + "\n " + $3.falsa + ": \n";}
        ;

SWITCH  : SWITCH_PR PARA EXP PARC ACCION_SWITCH LLAVEA LISTA_CASES LLAVEC     {
                                                                   var l_switch = funcs['regresarTag']();
                                                                   var ltemp = l_switch;
                                                                   comparaciones = "";
                                                                   codigo_sentencias = "";
                                                                   cadena = $3.cadena;
                                                                   $7.forEach(element =>{
                                                                        cadena+=element.cadena;
                                                                        comparaciones += l_switch + ": " + "if " + $3.valor  + "==" + element.valor + " goto " + element.etq_s + "\n"
                                                                        l_switch = funcs['regresarTag']();
                                                                        codigo_sentencias += element.etq_s + ": \n " + element.sentencias + "\ngoto " + l_switch + "\n";
                                                                   });
                                                                  cadena += "\ngoto " + ltemp + "\n" + codigo_sentencias + comparaciones + l_switch + "," + $5.final + ": \n" ;
                                                                  funcs['downDisplay']();
                                                                  $$ = cadena;
                                                                }
        ;

//nuevo
ACCION_SWITCH :  {
                  var final = funcs['regresarTag']();
                  funcs['addDisplay'](inicio, final, false);
                  $$ = {inicio:"", final:final};
                }
        ;

LISTA_CASES     : LISTA_CASES CASE {$1.push($2); $$ = [...$1];}
                | CASE {$$ = [$1]}
                ;

CASE    :  CASE_PR EXP DOSPUNTOS SENTENCIAS {
                                                var l_cond = funcs['regresarTag']();
                                                $$ = {valor:$2.valor, etq_s:l_cond, sentencias:$4, cadena:$2.cadena}
                                            };


PRINT   : PRINT_PR PARA STRING PARC PUNTOCOMA {$$ = "write(\"" + $3  + "\")"}
        ;


//ademas tengo las logicas y recurden que si una es falsa entonces todo es falso, por eso todas las falsas van al mismo lugar
LOGICA  :       LOGICA AND LOGICA       {
                                                nuevaFalsa = $1.falsa + "," + $3.falsa
                                                cadenaTmp = $1.cadena + "\n" + $1.verdadera + ": \n" + $3.cadena
                                                $$ = {verdadera: $3.verdadera, falsa: nuevaFalsa, cadena:cadenaTmp}
                                        }
        
        //recuerden con el or si una ses verdadera se ejecuta el codigo
        |       LOGICA OR LOGICA        {
                                                nuevaVerdadera = $1.verdadera + "," + $3.verdadera
                                                cadenaTmp = $1.cadena + "\n"  + $1.falsa + ": \n" + $3.cadena
                                                $$ = {verdadera: nuevaVerdadera, falsa: $3.falsa, cadena:cadenaTmp}
                                        }
        |       NOT LOGICA              {$$ = {verdadera: $2.falsa, falsa:$2.verdadera, cadena: $2.cadena}}
        |       REL                     {$$ = {valor:$1.valor, cadena: $1.cadena, verdadera: $1.verdadera, falsa:$1.falsa}}
        ;

//el formato es el mismo para todas, solo recuerden que las primeras 2 lineas son para generar las etiquetas
REL     :       EXP MENORQUE EXP        {
                                                var verdaderaTag = funcs['regresarTag']()
                                                var falsaTag = funcs['regresarTag']()
                                                var cadenaTmp = "if " + $1.valor + "<" + $3.valor + " goto " + verdaderaTag + "\ngoto " + falsaTag
                                                $$={verdadera:verdaderaTag, falsa: falsaTag, cadena: $1.cadena + "\n" + $3.cadena + "\n" + cadenaTmp}
                                        }

        |       EXP MAYORQUE EXP        {
                                                var verdaderaTag = funcs['regresarTag']()
                                                var falsaTag = funcs['regresarTag']()
                                                var cadenaTmp = "if " + $1.valor + ">" + $3.valor + " goto " + verdaderaTag + "\n goto " + falsaTag
                                                $$={verdadera:verdaderaTag, falsa: falsaTag, cadena: $1.cadena + "\n" + $3.cadena + "\n" + cadenaTmp}
                                        }

        |       EXP MENORQUE IGUAL EXP      {
                                                //para crear tags
                                                var verdaderaTag = funcs['regresarTag']()
                                                var falsaTag = funcs['regresarTag']()
                                                //creo la cadena
                                                var cadenaTmp = "if " + $1.valor + "<=" + $4.valor + " goto " + verdaderaTag + "\n goto " + falsaTag
                                                $$={verdadera:verdaderaTag, falsa: falsaTag, cadena: $1.cadena + "\n" + $4.cadena + "\n" + cadenaTmp}
                                        }

        |       EXP MAYORQUE IGUAL EXP      {
                                                var verdaderaTag = funcs['regresarTag']()
                                                var falsaTag = funcs['regresarTag']()
                                                var cadenaTmp = "if " + $1.valor + "<=" + $4.valor + " goto " + verdaderaTag + "\n goto " + falsaTag
                                                $$={verdadera:verdaderaTag, falsa: falsaTag, cadena: $1.cadena + "\n" + $4.cadena + "\n" + cadenaTmp}
                                        }

        |       EXP IGUAL IGUAL EXP      {
                                                var verdaderaTag = funcs['regresarTag']()
                                                var falsaTag = funcs['regresarTag']()
                                                var cadenaTmp = "if " + $1.valor + "==" + $4.valor + " goto " + verdaderaTag + "\n goto " + falsaTag
                                                $$={verdadera:verdaderaTag, falsa: falsaTag, cadena: $1.cadena + "\n" + $4.cadena + "\n" + cadenaTmp}
                                        }

        |       EXP DIFERENTE EXP       {
                                                var verdaderaTag = funcs['regresarTag']()
                                                var falsaTag = funcs['regresarTag']()
                                                var cadenaTmp = "if " + $1.valor + "!=" + $3.valor + " goto " + verdaderaTag + "\n goto " + falsaTag
                                                $$={verdadera:verdaderaTag, falsa: falsaTag, cadena: $1.cadena + "\n" + $3.cadena + "\n" + cadenaTmp}
                                        }
        |       EXP                     {$$ = {valor:$1.valor, cadena: $1.cadena, verdadera:"", falsa: ""}}
        ;

//espero que todos sepan como funciona esto
EXP     :       EXP MAS EXP     {
                                        temporal = funcs['regresarTemp']()
                                        cadenaTmp = temporal + " = " + $1.valor + "+" + $3.valor
                                        $$ = {valor:temporal, cadena:$1.cadena + "\n" + $3.cadena + "\n" + cadenaTmp}
                                }
                                
        |       EXP MENOS EXP   {
                                        temporal = funcs['regresarTemp']()
                                        cadenaTmp = temporal + " = " + $1.valor + "-" + $3.valor
                                        $$ = {valor:temporal, cadena:$1.cadena + "\n" + $3.cadena + "\n" + cadenaTmp}
                                }
                                 
        |       EXP DIV EXP     {
                                        temporal = funcs['regresarTemp']()
                                        cadenaTmp = temporal + " = " + $1.valor + "/" + $3.valor
                                        $$ = {valor:temporal, cadena:$1.cadena + "\n" + $3.cadena + "\n" + cadenaTmp}
                                }
                                
        |       EXP POR EXP     {
                                        temporal = funcs['regresarTemp']()
                                        cadenaTmp = temporal + " = " + $1.valor + "*" + $3.valor
                                        $$ = {valor:temporal, cadena: $1.cadena + "\n" + $3.cadena + "\n" + cadenaTmp}
                                }

        |       ENTERO          {$$ = {valor:$1, cadena:""}}
        ;   


ARREGLO_DECLARACION : ID LISTA_DIM IGUAL LOGICA PUNTOCOMA {} ;

ACCESO_ARREGLO : ID LISTA_DIM {} ;

LISTA_DIM       : LISTA_DIM DIM {}
                | DIM {}
                ;

DIM : BRACKET_A LOGICA BRACKET_C { $$ = $2; } ;