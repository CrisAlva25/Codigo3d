const NODO_E = require("./Nodos/Numero");
const NODO_ARIT = require("./Nodos/Aritmetica");
const NODO_REL = require("./Nodos/Relacional");
const NODO_LOGIC = require("./Nodos/Logica");

const NODO_IF = require("./Nodos/If");
const NODO_WHILE = require("./Nodos/While");
const NODO_PRINT = require("./Nodos/print");
const NODO_BR = require("./Nodos/break")
const NODO_CON = require("./Nodos/continue")

const NODO_CUERPO = require("./Nodos/Cuerpo")

module.exports = {
    NODO_E: NODO_E,
    NODO_ARIT: NODO_ARIT,
    NODO_REL: NODO_REL,
    NODO_LOGIC: NODO_LOGIC,
    NODO_IF: NODO_IF,
    NODO_WHILE: NODO_WHILE,
    NODO_PRINT: NODO_PRINT,
    NODO_CUERPO: NODO_CUERPO,
    NODO_BR: NODO_BR,
    NODO_CON: NODO_CON
}