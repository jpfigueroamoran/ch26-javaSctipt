console.log("Sesion JS02");
/* Funcion declarada
 
function declaration, function statemanr
Una característica es que las funciones declaradas tiene hoinsting*/



/* sintaxis
function nombreFuncionCamelCase(parametros){
   Instrucciones;
}
 */
multiplica(5, 10); // invocando la funcion sin retorno
multiplica(8, 8);
multiplica(-4, 2);

/* este es un bloque de código */
/*  {const operandoA = 8
 const operandoB = 8
 const resultado = operandoA * operandoB
 console.log(resultado);} */

function multiplica(operandoA, operandoB) {
    const resultado = operandoA * operandoB
    console.log(resultado);
};

function divide(dividendo, divisor) {
    return dividendo / divisor
};
console.log(divide(5, 2));
console.log(divide(5, "2"));
console.log(divide("5", "2"));
console.log(divide("5 0", "2"));

//-------------Funciones Expresadas---------------
// function expressions
// Son declaradas dentro de la asignacion de una variable
// estas funciones pueden ser anonimas (no tienen nombre);
// Las funciones expresadas no tiene hoinsting, por que no
// se carga en memoria hasta que se utilice.

/*  Sintaxis
 
const nombreVariable = function nombreFuncion(parametros) {
   instrucciones;
};

 */
const sum = function sumatoria(a, b) {
    return a + b;
};
const resta = function (a, b) {
    return a - b;
};

const potencia = function (a, b) {
    return a ** b;
};

console.log(sum(9, 9));
console.log(resta(90, 20));

/* --------------funciones autoinvocadas--------- */
//self-invoking function
//se autoinvocan, se pueden definir con funciones anónimas

(function () {
    console.log("Me autoinvoco en la función");
})();

/* -----funciones flecha----- 
Arrow function
Son Funciones similares a las declaradas pero:
no requiere la palabra function
si tiene una sola instruccion no requiere {}
si las instrucciones es el mismo retorno no requiere la palabra return*/

const areaRectangulo = (altura, base) => altura * base
console.log(areaRectangulo(3, 5));

/* ------Parámetros default------*/
/**
 * Este comentario es la documentación de la función
 * @param {number} base esto es la descripticion de base
 * @param {number} altura esto es la descripticion de altura
 * @returns área del rectángulo
 */

const areaTringulo = (base, altura) => base * altura / 2;

console.log("Área de triangulo b:5 a:10 = " + areaTringulo(5, 10));
console.log("Área de triangulo b:8 = " + areaTringulo(8));
