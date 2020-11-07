%{
        const nodos = require("./index");
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
INICIO  : SENTENCIAS EOF    {return new nodos.NODO_CUERPO.cuerpo($1);};

SENTENCIAS      : SENTENCIAS SENTENCIA  {let nuevo1 = $1; nuevo1.push($2); $$ = nuevo1;}
                | SENTENCIA             {let nuevo = [$1]; $$ = nuevo;}
                ;


SENTENCIA       : WHILE  {$$=$1}
                | IF     {$$=$1}
                | PRINT  {$$=$1}
                | BREAK  {$$=$1}
                | CONTINUE {$$=$1}
                ;

WHILE   : WHILE_PR PARA LOGICA PARC LLAVEA SENTENCIAS LLAVEC {$$ = new nodos.NODO_WHILE.while_n($3,new nodos.NODO_CUERPO.cuerpo($6));};
IF      : IF_PR PARA LOGICA PARC LLAVEA SENTENCIAS LLAVEC {$$ = new nodos.NODO_IF.if_n($3,new nodos.NODO_CUERPO.cuerpo($6));}
PRINT   : PRINT_PR PARA STRING PARC PUNTOCOMA {$$ = new nodos.NODO_PRINT.print_n($3);};
BREAK   : BREAK_PR PUNTOCOMA { $$= new nodos.NODO_BR.break_n();};
CONTINUE        : CONTINUE_PR PUNTOCOMA {$$= new nodos.NODO_CON.continue_n();};



//ademas tengo las logicas y recurden que si una es falsa entonces todo es falso, por eso todas las falsas van al mismo lugar
LOGICA  :       LOGICA AND LOGICA       {$$ = new nodos.NODO_LOGIC.N_Logica($1,"&&", $3);}
        |       LOGICA OR LOGICA        {$$ = new nodos.NODO_LOGIC.N_Logica($1,"||", $3);}
        |       NOT LOGICA              {$$ = new nodos.NODO_LOGIC.N_Logica($1,"!", null);}
        |       REL                     {$$ = $1}
        ;

//el formato es el mismo para todas, solo recuerden que las primeras 2 lineas son para generar las etiquetas
REL     :       EXP MENORQUE EXP                {$$ = new nodos.NODO_REL.N_Relacional($1, "<", $3);}
        |       EXP MAYORQUE EXP                {$$ = new nodos.NODO_REL.N_Relacional($1, ">", $3);}
        |       EXP MENORQUE IGUAL EXP          {$$ = new nodos.NODO_REL.N_Relacional($1, "<=", $4);}
        |       EXP MAYORQUE IGUAL EXP          {$$ = new nodos.NODO_REL.N_Relacional($1, ">=", $4);}
        |       EXP IGUAL IGUAL EXP             {$$ = new nodos.NODO_REL.N_Relacional($1, "==", $4);}
        |       EXP DIFERENTE EXP               {$$ = new nodos.NODO_REL.N_Relacional($1, "!=", $3);}
        |       EXP                             {$$ = $1}
        ;

//espero que todos sepan como funciona esto
EXP     :       EXP MAS EXP     {$$ = new nodos.NODO_ARIT.N_Aritmetica($1, "+", $3);}
        |       EXP MENOS EXP   {$$ = new nodos.NODO_ARIT.N_Aritmetica($1, "-", $3);}
        |       EXP DIV EXP     {$$ = new nodos.NODO_ARIT.N_Aritmetica($1, "/", $3);}                                
        |       EXP POR EXP     {$$ = new nodos.NODO_ARIT.N_Aritmetica($1, "*", $3);}
        |       ENTERO          {$$ = new nodos.NODO_E.n_entero($1);}
        ;