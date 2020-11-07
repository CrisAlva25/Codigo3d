%{
       const nodos = require("./nodo");
       let operacion = nodos.operacion;
       let llamada = nodos.Var_llamada;
       let declaracion = nodos.Var_declaracion;
       let enteros = nodos.entero;

       metodos = {};
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

//Regex
{character}           { yytext = yytext.substr(1,yyleng-2); return 'CHAR'; }
{stringLiteral}       { yytext = yytext.substr(1,yyleng-2); return 'STRING'; }
{entero}              return 'ENTERO'
{decimal}             return 'DECIMAL'

//Palabras reservadas
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
"true"                return 'TRUE_PR'
"false"               return 'FALSE_PR'

([a-zA-Z])[a-zA-Z0-9_]*       return 'ID'

//Simbolos
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
"{"                   return 'LLAVEA'
"}"                   return 'LLAVEC'  
":"                   return 'DOSPUNTOS'  
";"                   return 'PUNTOCOMA'  
<<EOF>>		      return 'EOF'
.                       { console.error('Este es un error léxico: ' + yytext + ', en la linea: ' + yylloc.first_line + ', en la columna: ' + yylloc.first_column); }

/lex

%left OR
%left AND
%left MENORQUE MAYORQUE DIFERENTE
%left MAS MENOS
%left POR DIV
%right NOT

%start DECLARACION

%%

DECLARACION     : PR_VAR ID IGUAL EXP PUNTOCOMA EOF { $$ = new declaracion($2,$4); return $$;}
                ;

EXP     :       EXP MAS EXP     {$$ = new operacion(1,$1,"+",$3)}
        |       EXP MENOS EXP   {$$ = new operacion(1,$1,"-",$3)}
        |       EXP DIV EXP     {$$ = new operacion(1,$1,"/",$3)}
        |       EXP POR EXP     {$$ = new operacion(1,$1,"*",$3)}
        |       EXP POR POR EXP {$$ = new operacion(1,$1,"**",$4)}
        |       PRIMITIVO       {$$ = $1}
        ;

PRIMITIVO   : ENTERO  {$$ = new enteros($1);}
            ;