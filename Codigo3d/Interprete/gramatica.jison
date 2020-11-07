%{
        var linea = 0
        var funcs = {
                regresarLinea: function(){linea++; return linea;},
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
"if"                  return "IF_INST"
"goto"                return "GOTO_INST"
"write"               return "WRITE"
{entero}              return 'ENTERO'
([a-zA-Z])[a-zA-Z0-9_]*       return 'ID'
"*"                   return 'POR'
"/"                   return 'DIV'
"-"                   return 'MENOS'
"+"                   return 'MAS'
","                   return 'COMA'
":"                   return 'DOSP'
"="                   return 'IGUAL'
"<"                   return 'MENORQUE'
">"                   return 'MAYORQUE'
"=="                  return 'IGUALIGUAL'
"!="                  return 'DIFERENTE'
"("                   return 'PARA'
")"                   return 'PARC'  
<<EOF>>		            return 'EOF'
.         { console.error('Este es un error léxico: ' + yytext + ', en la linea: ' + yylloc.first_line + ', en la columna: ' + yylloc.first_column); }

/lex

%left MENORQUE MAYORQUE IGUAL DIFERENTE 
%left MAS MENOS
%left POR DIV

%start INICIO

%%

INICIO  : INSTRUCCIONES EOF {$$ = {aux:"hola", insts:$1}; return $$;};

INSTRUCCIONES   :   INSTRUCCIONES INSTRUCCION   {
                                                    $1.push({linea:funcs['regresarLinea'](), inst:$2});
                                                    $$ = [...$1];
                                                }
                |   INSTRUCCION {$$= [{linea:funcs['regresarLinea'](), inst:$1}]; }
                ;

/**
    1 -> asignacion
    2 -> if
    3 -> etiqueta
    4 -> write
*/

INSTRUCCION :   ASIGNACION  {$$ = {nodo:$1, inst:1}}
            |   IF          {$$ = {nodo:$1, inst:2}}
            |   ETIQUETA    {$$ = {nodo:$1, inst:3}}
            |   WRITE_I     {$$ = {nodo:$1, inst:4}}
            |   GOTO        {$$ = {nodo:$1, inst:5}}
            ;

ASIGNACION  : ID IGUAL BINARIO {$$={id:$1, valor:$3}};

IF      :   IF_INST BINARIO GOTO {$$ = {evaluacion:$2, etqV: $3}};

GOTO    :   GOTO_INST L_ID    {$$ = $2};

ETIQUETA : L_ID DOSP {$$ = $1};

WRITE_I   : WRITE PARA STRING PARC {$$ = $3};

BINARIO     :       ELEMENTO MENORQUE ELEMENTO          {$$={tipo:"bool", izq:$1 , der:$3, opera:"<"}}
            |       ELEMENTO MAYORQUE ELEMENTO          {$$={tipo:"bool", izq:$1 , der:$3, opera:">"}}
            |       ELEMENTO MENORQUE IGUAL ELEMENTO    {$$={tipo:"bool", izq:$1 , der:$4, opera:"<="}}
            |       ELEMENTO MAYORQUE IGUAL ELEMENTO    {$$={tipo:"bool", izq:$1 , der:$4, opera:">="}}
            |       ELEMENTO IGUAL IGUAL ELEMENTO       {$$={tipo:"bool", izq:$1 , der:$4, opera:"=="}}
            |       ELEMENTO DIFERENTE ELEMENTO         {$$={tipo:"bool", izq:$1 , der:$3, opera:"!="}}
            |       ELEMENTO MAS ELEMENTO               {$$={tipo:"int", izq:$1 , der:$3, opera:"+"}}
            |       ELEMENTO MENOS ELEMENTO             {$$={tipo:"int", izq:$1 , der:$3, opera:"-"}}
            |       ELEMENTO DIV ELEMENTO               {$$={tipo:"int", izq:$1 , der:$3, opera:"/"}}
            |       ELEMENTO POR ELEMENTO               {$$={tipo:"int", izq:$1 , der:$3, opera:"*"}}
            ;

// tipo = 1 -> identificador, tipo=2 -> entero
ELEMENTO    :   L_ID {$$={valor:$1, tipo:1}}
            |   ENTERO {$$={valor:parseInt($1), tipo:2}}
            ;
L_ID : L_ID COMA ID  {
                    let temp = [...$1];
                    temp.push($3);
                    $$ = [...temp]
                }
     | ID       {$$ = [$1];}
     ;