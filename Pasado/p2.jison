%{let s = null;%}
%lex
%options case-insensitive
entero [0-9]+
decimal {entero}"."{entero}
%%

[ \r\t]+            {}
\n                  {}

{entero}              return 'ENTERO'
"*"                   return 'POR'
"+"                   return 'MAS'
"("                   return 'PARA'
")"                   return 'PARC'  
<<EOF>>		            return 'EOF'
.                       { console.error('Este es un error léxico: ' + yytext + ', en la linea: ' + yylloc.first_line + ', en la columna: ' + yylloc.first_column); }
/lex

%start INICIO

%%

INICIO : E EOF    {console.log($1.cadena)}
       ;

E : E MAS T   {
              aux = $1.auxiliar + "," + $3.cadena
              $$ = {
                      auxiliar:aux,
                      cadena: "Sum(" + aux + ")"
                   }
            }
  | T       {$$ = {cadena:$1.cadena, auxiliar:$1.auxiliar}}
  ;

T : T POR F   {
              aux = $1.auxiliar + "," + $3.cadena
              $$ = {
                      auxiliar:aux,
                      cadena: "Mul(" + aux + ")"
                   }
            }
  | F       {$$ = {cadena:$1.cadena, auxiliar:$1.cadena}}
  ;

F : ENTERO      {$$ = {cadena:$1, auxiliar:$1}}
  | PARA E PARC  {$$ = {cadena:$2.cadena, auxiliar:$2.cadena}}
  ;