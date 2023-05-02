console.log("Starting");

/* -----------Operadores aritméticos--------------- */
// Adición +, Multiplicacion *, Substracción -, Division /, Exponencial **, Resto %,

//ejemplo
let dinero = 20 + 10;
console.log(dinero)

//------------Operadores de Asignacion --------------------------------
/* Asigna un valor a su operando izq basándose en el valor de su
operando derecho
asignacion =
Asignacón de adición += */
dinero += 15;
/* Multiplicación *=
Substracción -=
División /=
Exponencial **=
Resto %=
 */
12 + 7 + 12 + 4 + 1;
2 ** 3 ** 2;

/* ----------Operadores Unarios-------------- */
// Un operador unario realiza una operación en un solo operando
//Negación -
dinero = - 3;
console.log(dinero);

//Conversion a numérico +
dinero = +dinero;// Sigue siendo -3 
dinero = + "200"// 200 numérico;
console.log(dinero);

// typeof
//Operador lógico not !
let valorBooleano = true;
console.log(!!valorBooleano);

//Operadores de incremento y decremento en una unidad
/* operador de pre-inremento y pre decremento
pre-incremento ++valor
pre-decremento --valor

Operdador de posr-incremento y post-decremento
post-incremento valor++
post-decremento valor--*/

let numero = 10;
numero++;
++numero;
console.log(numero);

let nuevoValor = numero++;
/* 
let nuevoValor = numero;
numero = numero + 1;
*/
console.log("nuevo valor " + nuevoValor);
console.log("Numero " + numero);

let nuevoDato = ++numero;
console.log("Nuevo dato " + nuevoDato);
console.log("Numero " + numero);

let x = 3;
let y = ++x;
console.log(`x ${x++} y ${y++}`)
console.log(`x ${x} y ${y}`)

/* Operadores lógicos AND &&  y OR || */

const a = true;
const b = false;
const c = true;
console.log(a || b && c);
/* Operadores de corto circuito 
Cuando los operadores lógicos AND y OR actuan sobre operandos diferentes a booleanos */

/* OP1 && OP2 si OP1 es verdadero, se realiza el resultado de OP2 */
console.log(a && "Que Onda");
console.log(b && "Que Onda");
console.log(NaN && "Que Onda");
console.log("false" && "El valor es False");

/* si OP1 || OP2 si  OP1 es verdadero, se realiza el resultado de OP1 */
console.log(a || "Que Onda");
console.log(b || "Que Onda");
console.log(NaN || "Que Onda");
console.log("false" || "El valor es False");
console.log("" || "El valor es False");

const noDefinido = true;
console.log ( noDefinido ||  theBigBang  );

// Quiero imprimir "Estás Autorizado" si la variable isOnline y isActive son true.
const isOnline = true;
const isActive = true;
if ( isOnline )
  if( isActive )
    console.log("Estás Autorizado");

if (isOnline && isActive)
  console.log('Estas autorizado')

console.log(isOnline && isActive ? "Estas autorizado": "No estas autorizado");

console.log( isOnline && isActive && "Estas autorizado" );

// --------------------- Operadores relacionales ---------------------------
/*
Un operador de comparación compara sus operandos y devuelve un valor lógico en función de si la comparación es verdadera (true) o falsa (false). Los operandos pueden ser valores numéricos, de cadena, lógicos u objetos. Las cadenas se comparan según el orden lexicográfico estándar, utilizando valores Unicode. En la mayoría de los casos, si los dos operandos no son del mismo tipo, JavaScript intenta convertirlos a un tipo apropiado para la comparación. Este comportamiento generalmente resulta en comparar los operandos numéricamente.
< menor que
> mayor que
<= menor o igual que
>= mayor o igual que
== igual que
*/

console.log( true == "true"  ); // false
console.log(  23 < "40" ); // true

console.log(  "b" < "A" ); // false ( 98  < 65 )

console.log(  "Hola" < "HOLA"); // false
          
console.log(  "Hola" < "123"); // false 
          //  H: 72     1: 49

console.log(  "Hola" < "KeHace" + 1000 ); // true 
           // "Hola" < "KeHace1000"  

console.log(  "23" == 23  ); // true

// ------------------- Comparación estricta ------------------

/*
 === estrictamente igual, debe ser igual en el valor y tipo
/ !== estrictamente diferente, debe ser difente en valor y tipo
*/
      
console.log( "23" === 23  ); // false;
console.log( "true" === true ); // false;
console.log( "45" !== 45  ) // true


// Operador se asignación =
const myNumber = 34; 

// Desestructuración (Destructuring)
/*
 Es una expresión en JS que hace posible extraer datos de arreglos o objetos y nos
 ayuda a realizar asignaciones más complejas.
*/
let dataA = 10;
let dataB = 20;
console.log(`a: ${dataA} , b:${dataB} `);
// Quiero intercambiar los datos
/*
let temporal;
temporal = dataA;
dataA = dataB;
dataB = temporal;
*/
[ dataA, dataB  ] = [ dataB, dataA ];
console.log(`a: ${dataA} , b:${dataB} `);

const calificaciones = [50, 80, 100, 30, 60, 99 ];
// dataA = calificaciones[0]; // 50
// dataB = calificaciones[1]; // 80
let resto; // rest parameter
[ dataA, , , dataB, ...resto  ] = calificaciones; 
console.log(`a: ${dataA} , b:${dataB} `);
console.log(resto);

const primerAnio ={
  dataA: "43 alumnos",
  dataB: "50 alumnos",
  dataC: "20 alumnos"
};
( {dataA, dataB } = primerAnio);

console.log(`a: ${dataA} , b:${dataB} `);

const auto = {
    modelo: "Chevrolet",
    year: 2023,
    color: "red",
    motor: "2.0"
}
console.log("Modelo "+ auto.modelo);

// Asignando el valor model del objeto auto a la constante modelo
            // Inicializar con un valor por default
//const { modelo, colorAuto="Pistache" } = auto;
            //Asignar un nuevo nombre al atributo
const { modelo, color: colorAuto } = auto;
console.log("Modelo: "+ modelo + " Color: " + colorAuto);


/* --------------Ejercicio-------------------- 
        Hacer una funcion que realice la división de 2 números y 
        entregue (return) en el entero el cociente y residuo*/

        const division = (numA, numB) => {
         
            const cociente = parseInt(numA/numB);
            const residuo = numA%numB;
            return {cociente, residuo };
        }
        
const {cociente, residuo } = division (9,5);      
console.log(`El resultado de 9/5, conciente ${cociente}, residuo ${residuo}`)
