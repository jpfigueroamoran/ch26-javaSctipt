console.log("Sesion JS02");
 /* Funcion declarada
 
 function declaration, function statemanr
 Una característica es que las funciones declaradas tiene hoinsting*/



 /* sintaxis
 function nombreFuncionCamelCase(parametros){
    Instrucciones;
 }
  */
 multiplica(5,10); // invocando la funcion sin retorno
 multiplica(8,8);
 multiplica(-4,2);

 /* este es un bloque de código */
/*  {const operandoA = 8
 const operandoB = 8
 const resultado = operandoA * operandoB
 console.log(resultado);} */

 function multiplica(operandoA, operandoB){
    const resultado = operandoA * operandoB
 console.log(resultado);
 }

 function divide (dividendo, divisor){
    return dividendo / divisor
 }
 console.log(divide(5,2));
 console.log(divide(5,"2"));
 console.log(divide("5","2"));
 console.log(divide("5 0","2"));