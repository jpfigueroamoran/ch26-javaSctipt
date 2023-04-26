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

// --------------- Parámetros rest ------------------------------
// Rest Parameters   Sintaxis:  ...nombreParametro
// Nos permite representar una serie de valores indefinidos en los argumentos
// Estos se presentan como un array.
// Debe estar al final de la lista de parámetros

function sumatoriaVariosNumeros(a, b, ...restoDatos) {
    let suma;
    suma = a + b;
  
    for (let index = 0; index < restoDatos.length; index++) {
      suma += restoDatos[index]; // suma = suma + restoDatos[index]
    }
  
    return suma;
  }
  
  console.log("Sumatoria de varios números: " + sumatoriaVariosNumeros(5, 6));
  console.log(
    "Sumatoria de varios números: " + sumatoriaVariosNumeros(5, 6, 9, 10)
  );
  console.log("Sumatoria: " + sumatoriaVariosNumeros(5, 6, 9, 10, 20, 50)); //100
  
  // --------------- Funciones de Callback --------------------
  // Función que se pasa a otra función como argumento, para luego invocarse
  // para completar algún tipo de rutina o acción.
  
  // 3 funciones, una que imprima en consola, alert, DOM h1.
  // 1 parámetro de entrada.
  // no tiene return.
  
  // Función que imprime un mensaje en la consola
  function printToConsole(mensaje) {
    console.log(mensaje);
  }
  
  // Función que muestra una alerta en la pantalla
  function showAlert(mensaje) {
    alert(mensaje);
  }
  
  // Función que agrega un encabezado h1 al DOM
  function addH1ToDOM(mensaje) {
    const h1 = document.createElement("h1");
    h1.innerText = mensaje;
    document.body.appendChild(h1);
  }
  
  const addH1 = (mensaje) =>{
      document.querySelector("#div").innerHTML = `<h1>${mensaje}</h1>`
  };
  
  function getNamePrintToConsole(   ){
      const name = prompt("Dime tu nombre");
      const text = `Hola ${name}, espero tengas un gran día`;
      printToConsole(text);
  }
  function getNamePrintToDOM(   ){
      const name = prompt("Dime tu nombre");
      const text = `Hola ${name}, espero tengas un gran día`;
      addH1(text);
  }
  function getNameAndPrint( funcionImprimir   ){ // Esta es la buena
      const name = prompt("Dime tu nombre");
      const text = `Hola ${name}, espero tengas un gran día`;
      funcionImprimir(text);
  }
  //getNameAndPrint( printToConsole   );  
  //getNameAndPrint( showAlert );
  //getNameAndPrint( addH1 );
  /*getNameAndPrint( function imp(txt){ 
      console.log(txt) 
  }  );
  */
  
  // -------------------------------------------------------------------
  /*
      Ejercicio 2
      Escribe una función que tome un arreglo de números,
      duplique el valor de cada número del arreglo,
      e imprima el nuevo arreglo actualizado.
      [5, 10, 15, 20, 25] -> [10, 20, 30, 40, 50]
  */
  
  function double(arr) {
      const doubleNumbers = [];
      for (let i = 0; i < arr.length; i++) {
        const duplicate = arr[i] * 2;
        doubleNumbers.push(duplicate);
      }
     return doubleNumbers;
  }
  
  // Función que nos sirve de callback
  // const duplicate = (number) => number * 2;
  /*
  function doubleWithMap( array ){
      const duplicateNumber = array.map( function(number){
          return number * 2;
      }  );
      return duplicateNumber;
  }*/
  
  function doubleWithMap( array ){
     return array.map( number=> number * 2 );    
  }
  
  
  const numbers = [5, 10, 15, 20, 25]; 
  //console.log(double(numbers));
  console.log(doubleWithMap(numbers));
  console.log(numbers.map(number => number * 2));
  console.log(numbers);

/* Ejercicio  4
Crear un programa que itere sobre dos arreglos;
si hay cursos en común, imprimirlos en la consola
salida: */

const arr1 = ["math", "English", "Programming","Biology","Physics", "Music" ];
const arr2 = ["Geography", "Spanish", "Programming","Music" ];

/*  function commonCourses(arr1, arr2){
    const courses = [];
    for(let i=0; i<arr1.length; i++){
        for(let j=0; j<arr2.length; j++){
            if(arr1[i]===arr2[j])
                courses.push( arr2[j]);
        }
    }
    return `Cursos en comun ${courses}`;
}; 

console.log(commonCourses(arr1, arr2));  */

/* Usando el método filter e includes */

 function getCommonCoursesWithFilter(arr1,arr2) {
    return arr1.filter(course => arr2.includes(course) );
}

const commonCourses = getCommonCoursesWithFilter(arr1, arr2);
console.log("Common Courses: ", commonCourses.join(", ")); 

/* Contar la cantidad de carácteres de una frase
pepe pecas pica papas con un pico
la cantidad de letras "p":8
resolverlo usando un arrow function
*/

const contarLetras = (frase) => {
    let totalCaracteres = frase.length;
    let letrasP = frase.toLowerCase().split('p').length - 1;
    console.log(`La cantidad de letras "p" en la frase es: ${letrasP}`);
    console.log(`La cantidad total de caracteres en la frase es: ${totalCaracteres}`);
  }
  
  contarLetras('pepe pecas pica papas con un pico');
  
  //-------------Funciones recursivas-------------
  // Esta es una técnica de programacion en donde la funcion se llama así misma.
  // Se debe tener precausión de no entrar en un bucle infinito

 /*  function funcionRecursiva(valor){
    if (condicionDeParo){

    }
    else{
        // llamada recursiva
    }
  }; */

  const saludar = ( numero ) => {
    if( numero === 1){
        console.log("Saludo " + numero);
    }else{
        saludar(numero - 1)
        console.log("Saludo " + numero);
    };
};

saludar(10);
