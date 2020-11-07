/* parser generated by jison 0.4.18 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var gramatica = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,16],$V1=[1,17],$V2=[1,11],$V3=[1,12],$V4=[1,13],$V5=[1,14],$V6=[1,15],$V7=[5,14,16,17,23,24,30,31,35,37],$V8=[1,28],$V9=[1,31],$Va=[1,37],$Vb=[1,38],$Vc=[20,39,40],$Vd=[1,44],$Ve=[1,45],$Vf=[1,46],$Vg=[1,47],$Vh=[20,22,26,28,36,39,40,43,44,45,46,47,48,49],$Vi=[20,22,26,28,36,39,40,43,44,45,46,47],$Vj=[1,81],$Vk=[23,35];
var parser = {trace: function trace () { },
yy: {},
symbols_: {"error":2,"INICIO":3,"SENTENCIAS":4,"EOF":5,"SENTENCIA":6,"WHILE":7,"FOR":8,"IF":9,"SWITCH":10,"PRINT":11,"BREAK":12,"CONTINUE":13,"BREAK_PR":14,"PUNTOCOMA":15,"CONTINUE_PR":16,"WHILE_PR":17,"PARA":18,"LOGICA":19,"PARC":20,"ACCION_WHILE":21,"LLAVEA":22,"LLAVEC":23,"FOR_PR":24,"PR_VAR":25,"IGUAL":26,"EXP":27,"TO":28,"ACCION_FOR":29,"IF_PR":30,"SWITCH_PR":31,"ACCION_SWITCH":32,"LISTA_CASES":33,"CASE":34,"CASE_PR":35,"DOSPUNTOS":36,"PRINT_PR":37,"STRING":38,"AND":39,"OR":40,"NOT":41,"REL":42,"MENORQUE":43,"MAYORQUE":44,"DIFERENTE":45,"MAS":46,"MENOS":47,"DIV":48,"POR":49,"ENTERO":50,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",14:"BREAK_PR",15:"PUNTOCOMA",16:"CONTINUE_PR",17:"WHILE_PR",18:"PARA",20:"PARC",22:"LLAVEA",23:"LLAVEC",24:"FOR_PR",25:"PR_VAR",26:"IGUAL",28:"TO",30:"IF_PR",31:"SWITCH_PR",35:"CASE_PR",36:"DOSPUNTOS",37:"PRINT_PR",38:"STRING",39:"AND",40:"OR",41:"NOT",43:"MENORQUE",44:"MAYORQUE",45:"DIFERENTE",46:"MAS",47:"MENOS",48:"DIV",49:"POR",50:"ENTERO"},
productions_: [0,[3,2],[4,2],[4,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,1],[12,2],[13,2],[7,8],[21,0],[8,10],[29,0],[9,7],[10,8],[32,0],[33,2],[33,1],[34,4],[11,5],[19,3],[19,3],[19,2],[19,1],[42,3],[42,3],[42,4],[42,4],[42,4],[42,3],[42,1],[27,3],[27,3],[27,3],[27,3],[27,1]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
return $$[$0-1];
break;
case 2:
this.$ = $$[$0-1] + "\n" + $$[$0];
break;
case 3:
this.$=$$[$0];
break;
case 4: case 5: case 6: case 7: case 8: case 9: case 10:
this.$=$$[$0]
break;
case 11:
 this.$="goto " + funcs['getBreak']();
break;
case 12:
 this.$="goto " + funcs['getContinue']();
break;
case 13:

                                                        funcs['downDisplay']();
                                                        cadena = $$[$0-3].inicio + ": \n " + $$[$0-5].cadena +  "\n " + $$[$0-5].verdadera + ": \n";
                                                        cadena += $$[$0-1] + "\ngoto " + $$[$0-3].inicio + " \n " + $$[$0-5].falsa + "," + $$[$0-3].final + ": \n";
                                                        this.$ = cadena;
                                                   
break;
case 14: case 16:

                  var inicio = funcs['regresarTag']();
                  var final = funcs['regresarTag']();
                  funcs['addDisplay'](inicio, final,true);
                  this.$ = {inicio:inicio, final:final};
                
break;
case 15:

                                                                        funcs['downDisplay']();
                                                                        cadena = $$[$0-6].cadena + $$[$0-4].cadena;
                                                                        cadena += "\nvar = 0 + " + $$[$0-6].valor + "\n";
                                                                        cadena += $$[$0-3].inicio + ":\n" + $$[$0-1] + "\nvar = var + 1 \n";
                                                                        cadena += "if var <= " + $$[$0-4].valor + " goto " + $$[$0-3].inicio + "\n"
                                                                        //nuevo
                                                                        cadena += $$[$0-3].final + ":\n"
                                                                        this.$ = cadena;
                                                                  
break;
case 17:
this.$ = $$[$0-4].cadena + "\n " + $$[$0-4].verdadera + ": " + $$[$0-1] + "\n " + $$[$0-4].falsa + ": \n";
break;
case 18:

                                                                   var l_switch = funcs['regresarTag']();
                                                                   var ltemp = l_switch;
                                                                   comparaciones = "";
                                                                   codigo_sentencias = "";
                                                                   cadena = $$[$0-5].cadena;
                                                                   $$[$0-1].forEach(element =>{
                                                                        cadena+=element.cadena;
                                                                        comparaciones += l_switch + ": " + "if " + $$[$0-5].valor  + "==" + element.valor + " goto " + element.etq_s + "\n"
                                                                        l_switch = funcs['regresarTag']();
                                                                        codigo_sentencias += element.etq_s + ": \n " + element.sentencias + "\ngoto " + l_switch + "\n";
                                                                   });
                                                                  cadena += "\ngoto " + ltemp + "\n" + codigo_sentencias + comparaciones + l_switch + "," + $$[$0-3].final + ": \n" ;
                                                                  funcs['downDisplay']();
                                                                  this.$ = cadena;
                                                                
break;
case 19:

                  var final = funcs['regresarTag']();
                  funcs['addDisplay'](inicio, final, false);
                  this.$ = {inicio:"", final:final};
                
break;
case 20:
$$[$0-1].push($$[$0]); this.$ = [...$$[$0-1]];
break;
case 21:
this.$ = [$$[$0]]
break;
case 22:

                                                var l_cond = funcs['regresarTag']();
                                                this.$ = {valor:$$[$0-2].valor, etq_s:l_cond, sentencias:$$[$0], cadena:$$[$0-2].cadena}
                                            
break;
case 23:
this.$ = "write(\"" + $$[$0-2]  + "\")"
break;
case 24:

                                                nuevaFalsa = $$[$0-2].falsa + "," + $$[$0].falsa
                                                cadenaTmp = $$[$0-2].cadena + "\n" + $$[$0-2].verdadera + ": \n" + $$[$0].cadena
                                                this.$ = {verdadera: $$[$0].verdadera, falsa: nuevaFalsa, cadena:cadenaTmp}
                                        
break;
case 25:

                                                nuevaVerdadera = $$[$0-2].verdadera + "," + $$[$0].verdadera
                                                cadenaTmp = $$[$0-2].cadena + "\n"  + $$[$0-2].falsa + ": \n" + $$[$0].cadena
                                                this.$ = {verdadera: nuevaVerdadera, falsa: $$[$0].falsa, cadena:cadenaTmp}
                                        
break;
case 26:
this.$ = {verdadera: $$[$0].falsa, falsa:$$[$0].verdadera, cadena: $$[$0].cadena}
break;
case 27:
this.$ = {valor:$$[$0].valor, cadena: $$[$0].cadena, verdadera: $$[$0].verdadera, falsa:$$[$0].falsa}
break;
case 28:

                                                var verdaderaTag = funcs['regresarTag']()
                                                var falsaTag = funcs['regresarTag']()
                                                var cadenaTmp = "if " + $$[$0-2].valor + "<" + $$[$0].valor + " goto " + verdaderaTag + "\ngoto " + falsaTag
                                                this.$={verdadera:verdaderaTag, falsa: falsaTag, cadena: $$[$0-2].cadena + "\n" + $$[$0].cadena + "\n" + cadenaTmp}
                                        
break;
case 29:

                                                var verdaderaTag = funcs['regresarTag']()
                                                var falsaTag = funcs['regresarTag']()
                                                var cadenaTmp = "if " + $$[$0-2].valor + ">" + $$[$0].valor + " goto " + verdaderaTag + "\n goto " + falsaTag
                                                this.$={verdadera:verdaderaTag, falsa: falsaTag, cadena: $$[$0-2].cadena + "\n" + $$[$0].cadena + "\n" + cadenaTmp}
                                        
break;
case 30:

                                                //para crear tags
                                                var verdaderaTag = funcs['regresarTag']()
                                                var falsaTag = funcs['regresarTag']()
                                                //creo la cadena
                                                var cadenaTmp = "if " + $$[$0-3].valor + "<=" + $$[$0].valor + " goto " + verdaderaTag + "\n goto " + falsaTag
                                                this.$={verdadera:verdaderaTag, falsa: falsaTag, cadena: $$[$0-3].cadena + "\n" + $$[$0].cadena + "\n" + cadenaTmp}
                                        
break;
case 31:

                                                var verdaderaTag = funcs['regresarTag']()
                                                var falsaTag = funcs['regresarTag']()
                                                var cadenaTmp = "if " + $$[$0-3].valor + "<=" + $$[$0].valor + " goto " + verdaderaTag + "\n goto " + falsaTag
                                                this.$={verdadera:verdaderaTag, falsa: falsaTag, cadena: $$[$0-3].cadena + "\n" + $$[$0].cadena + "\n" + cadenaTmp}
                                        
break;
case 32:

                                                var verdaderaTag = funcs['regresarTag']()
                                                var falsaTag = funcs['regresarTag']()
                                                var cadenaTmp = "if " + $$[$0-3].valor + "==" + $$[$0].valor + " goto " + verdaderaTag + "\n goto " + falsaTag
                                                this.$={verdadera:verdaderaTag, falsa: falsaTag, cadena: $$[$0-3].cadena + "\n" + $$[$0].cadena + "\n" + cadenaTmp}
                                        
break;
case 33:

                                                var verdaderaTag = funcs['regresarTag']()
                                                var falsaTag = funcs['regresarTag']()
                                                var cadenaTmp = "if " + $$[$0-2].valor + "!=" + $$[$0].valor + " goto " + verdaderaTag + "\n goto " + falsaTag
                                                this.$={verdadera:verdaderaTag, falsa: falsaTag, cadena: $$[$0-2].cadena + "\n" + $$[$0].cadena + "\n" + cadenaTmp}
                                        
break;
case 34:
this.$ = {valor:$$[$0].valor, cadena: $$[$0].cadena, verdadera:"", falsa: ""}
break;
case 35:

                                        temporal = funcs['regresarTemp']()
                                        cadenaTmp = temporal + " = " + $$[$0-2].valor + "+" + $$[$0].valor
                                        this.$ = {valor:temporal, cadena:$$[$0-2].cadena + "\n" + $$[$0].cadena + "\n" + cadenaTmp}
                                
break;
case 36:

                                        temporal = funcs['regresarTemp']()
                                        cadenaTmp = temporal + " = " + $$[$0-2].valor + "-" + $$[$0].valor
                                        this.$ = {valor:temporal, cadena:$$[$0-2].cadena + "\n" + $$[$0].cadena + "\n" + cadenaTmp}
                                
break;
case 37:

                                        temporal = funcs['regresarTemp']()
                                        cadenaTmp = temporal + " = " + $$[$0-2].valor + "/" + $$[$0].valor
                                        this.$ = {valor:temporal, cadena:$$[$0-2].cadena + "\n" + $$[$0].cadena + "\n" + cadenaTmp}
                                
break;
case 38:

                                        temporal = funcs['regresarTemp']()
                                        cadenaTmp = temporal + " = " + $$[$0-2].valor + "*" + $$[$0].valor
                                        this.$ = {valor:temporal, cadena: $$[$0-2].cadena + "\n" + $$[$0].cadena + "\n" + cadenaTmp}
                                
break;
case 39:
this.$ = {valor:$$[$0], cadena:""}
break;
}
},
table: [{3:1,4:2,6:3,7:4,8:5,9:6,10:7,11:8,12:9,13:10,14:$V0,16:$V1,17:$V2,24:$V3,30:$V4,31:$V5,37:$V6},{1:[3]},{5:[1,18],6:19,7:4,8:5,9:6,10:7,11:8,12:9,13:10,14:$V0,16:$V1,17:$V2,24:$V3,30:$V4,31:$V5,37:$V6},o($V7,[2,3]),o($V7,[2,4]),o($V7,[2,5]),o($V7,[2,6]),o($V7,[2,7]),o($V7,[2,8]),o($V7,[2,9]),o($V7,[2,10]),{18:[1,20]},{25:[1,21]},{18:[1,22]},{18:[1,23]},{18:[1,24]},{15:[1,25]},{15:[1,26]},{1:[2,1]},o($V7,[2,2]),{19:27,27:30,41:$V8,42:29,50:$V9},{26:[1,32]},{19:33,27:30,41:$V8,42:29,50:$V9},{27:34,50:$V9},{38:[1,35]},o($V7,[2,11]),o($V7,[2,12]),{20:[1,36],39:$Va,40:$Vb},{19:39,27:30,41:$V8,42:29,50:$V9},o($Vc,[2,27]),o($Vc,[2,34],{26:[1,42],43:[1,40],44:[1,41],45:[1,43],46:$Vd,47:$Ve,48:$Vf,49:$Vg}),o($Vh,[2,39]),{27:48,50:$V9},{20:[1,49],39:$Va,40:$Vb},{20:[1,50],46:$Vd,47:$Ve,48:$Vf,49:$Vg},{20:[1,51]},{21:52,22:[2,14]},{19:53,27:30,41:$V8,42:29,50:$V9},{19:54,27:30,41:$V8,42:29,50:$V9},o($Vc,[2,26]),{26:[1,56],27:55,50:$V9},{26:[1,58],27:57,50:$V9},{26:[1,59]},{27:60,50:$V9},{27:61,50:$V9},{27:62,50:$V9},{27:63,50:$V9},{27:64,50:$V9},{28:[1,65],46:$Vd,47:$Ve,48:$Vf,49:$Vg},{22:[1,66]},{22:[2,19],32:67},{15:[1,68]},{22:[1,69]},o($Vc,[2,24]),o([20,40],[2,25],{39:$Va}),o($Vc,[2,28],{46:$Vd,47:$Ve,48:$Vf,49:$Vg}),{27:70,50:$V9},o($Vc,[2,29],{46:$Vd,47:$Ve,48:$Vf,49:$Vg}),{27:71,50:$V9},{27:72,50:$V9},o($Vc,[2,33],{46:$Vd,47:$Ve,48:$Vf,49:$Vg}),o($Vi,[2,35],{48:$Vf,49:$Vg}),o($Vi,[2,36],{48:$Vf,49:$Vg}),o($Vh,[2,37]),o($Vh,[2,38]),{27:73,50:$V9},{4:74,6:3,7:4,8:5,9:6,10:7,11:8,12:9,13:10,14:$V0,16:$V1,17:$V2,24:$V3,30:$V4,31:$V5,37:$V6},{22:[1,75]},o($V7,[2,23]),{4:76,6:3,7:4,8:5,9:6,10:7,11:8,12:9,13:10,14:$V0,16:$V1,17:$V2,24:$V3,30:$V4,31:$V5,37:$V6},o($Vc,[2,30],{46:$Vd,47:$Ve,48:$Vf,49:$Vg}),o($Vc,[2,31],{46:$Vd,47:$Ve,48:$Vf,49:$Vg}),o($Vc,[2,32],{46:$Vd,47:$Ve,48:$Vf,49:$Vg}),{22:[2,16],29:77,46:$Vd,47:$Ve,48:$Vf,49:$Vg},{6:19,7:4,8:5,9:6,10:7,11:8,12:9,13:10,14:$V0,16:$V1,17:$V2,23:[1,78],24:$V3,30:$V4,31:$V5,37:$V6},{33:79,34:80,35:$Vj},{6:19,7:4,8:5,9:6,10:7,11:8,12:9,13:10,14:$V0,16:$V1,17:$V2,23:[1,82],24:$V3,30:$V4,31:$V5,37:$V6},{22:[1,83]},o($V7,[2,17]),{23:[1,84],34:85,35:$Vj},o($Vk,[2,21]),{27:86,50:$V9},o($V7,[2,13]),{4:87,6:3,7:4,8:5,9:6,10:7,11:8,12:9,13:10,14:$V0,16:$V1,17:$V2,24:$V3,30:$V4,31:$V5,37:$V6},o($V7,[2,18]),o($Vk,[2,20]),{36:[1,88],46:$Vd,47:$Ve,48:$Vf,49:$Vg},{6:19,7:4,8:5,9:6,10:7,11:8,12:9,13:10,14:$V0,16:$V1,17:$V2,23:[1,89],24:$V3,30:$V4,31:$V5,37:$V6},{4:90,6:3,7:4,8:5,9:6,10:7,11:8,12:9,13:10,14:$V0,16:$V1,17:$V2,24:$V3,30:$V4,31:$V5,37:$V6},o($V7,[2,15]),o($Vk,[2,22],{7:4,8:5,9:6,10:7,11:8,12:9,13:10,6:19,14:$V0,16:$V1,17:$V2,24:$V3,30:$V4,31:$V5,37:$V6})],
defaultActions: {18:[2,1]},
parseError: function parseError (str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        var error = new Error(str);
        error.hash = hash;
        throw error;
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        var lex = function () {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        };
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};

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
                                                return display[display_pointer].inicio;
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
/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function(match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex () {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin (condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState () {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules () {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState (n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState (condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {"case-insensitive":true},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:
break;
case 1:
break;
case 2: yy_.yytext = yy_.yytext.substr(1,yy_.yyleng-2); return 'CHAR'; 
break;
case 3: yy_.yytext = yy_.yytext.substr(1,yy_.yyleng-2); return 38; 
break;
case 4:return 30
break;
case 5:return 17
break;
case 6:return 24
break;
case 7:return 31
break;
case 8:return 35
break;
case 9:return 37
break;
case 10:return 28
break;
case 11:return 25
break;
case 12:return 14
break;
case 13:return 16
break;
case 14:return 50
break;
case 15:return 49
break;
case 16:return 48
break;
case 17:return 47
break;
case 18:return 46
break;
case 19:return 43
break;
case 20:return 44
break;
case 21:return 26
break;
case 22:return 45
break;
case 23:return 39
break;
case 24:return 40
break;
case 25:return 41
break;
case 26:return 18
break;
case 27:return 20
break;
case 28:return 22
break;
case 29:return 23  
break;
case 30:return 36  
break;
case 31:return 15  
break;
case 32:return 5
break;
case 33: console.error('Este es un error léxico: ' + yy_.yytext + ', en la linea: ' + yy_.yylloc.first_line + ', en la columna: ' + yy_.yylloc.first_column); 
break;
}
},
rules: [/^(?:[ \r\t]+)/i,/^(?:\n)/i,/^(?:(((('))((?:\\(n|t|r|\\|"|\\')|(?:(?!(('))).))?)((')))))/i,/^(?:(((("))((?:\\(("))|(?:(?!(("))).))*)((")))))/i,/^(?:if\b)/i,/^(?:while\b)/i,/^(?:for\b)/i,/^(?:switch\b)/i,/^(?:case\b)/i,/^(?:print\b)/i,/^(?:to\b)/i,/^(?:var\b)/i,/^(?:break\b)/i,/^(?:continue\b)/i,/^(?:([0-9]+))/i,/^(?:\*)/i,/^(?:\/)/i,/^(?:-)/i,/^(?:\+)/i,/^(?:<)/i,/^(?:>)/i,/^(?:=)/i,/^(?:!=)/i,/^(?:&&)/i,/^(?:\|\|)/i,/^(?:!)/i,/^(?:\()/i,/^(?:\))/i,/^(?:\{)/i,/^(?:\})/i,/^(?::)/i,/^(?:;)/i,/^(?:$)/i,/^(?:.)/i],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = gramatica;
exports.Parser = gramatica.Parser;
exports.parse = function () { return gramatica.parse.apply(gramatica, arguments); };
exports.main = function commonjsMain (args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}