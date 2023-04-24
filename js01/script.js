console.log("Sesión JS01")
/* son 7 datos primitivos:
String: "Hola"*/

console.log("tipo de dato String: ", "Hola");
/* Number:12 , -45, 367.12, + infinity, - infinity, NaN 
-Los Numéricos usan 64 bits para almacenar, pero solo 53 bits para representar el numero*/

console.log("tipo de dato Numbre: ", 12, -45, -367.12, 45 / 0, -56 / 0, 56 * "hola");
console.log("Valor Máximo: ", Number.MAX_VALUE);
console.log("Valor seguro: ", Number.MIN_SAFE_INTEGER);
console.log("Valor Mínimo: ", Number.MIN_VALUE);
console.log("Valor Máximo: ", Number.MIN_SAFE_INTEGER);

/* BigInt sirven para representar valores númericos enteros, de los que el tipo number
no puede representar o no es seguro */

console.log("MAX_SAFE_INTEGER + 1 ", Number.MAX_SAFE_INTEGER + 1);
console.log("MAX_SAFE_INTEGER + 1 ", Number.MAX_SAFE_INTEGER + 2);
let myBigInt = 9007199254740991n;
console.log("Valor del dato BigINT: ", myBigInt);
console.log("MAX_SAFE_INTEGER + 1n: ", myBigInt + 1n);
console.log("MAX_SAFE_INTEGER + 1n: ", myBigInt + 2n);

/* Undefined Un dato que es declarado, pero no esta definido  */
let myVar; /* Solo se declara */
console.log("Tipo de variable indefinido: ", myVar);

/* Null Intensionalmente se borra el tipo de dato */
let myVarNull = null; /* solo se declara */
myVarNull = "Saludos Sr. PP"; /* Se asigna un dato String */
console.log("tipo de dato myVarNull: ", typeof (myVarNull));/* string */
myVarNull = null;
console.log("tipo de dato myVarNull: ", typeof (myVarNull));/* null */

/* symbol crea propiedades privadas en los objetos */

/* Tipos de datos Object 
Object: */
const misDatosDePerfil = {
    /*clave :valor  */
    nombre: "Juan Pablo",
    apellido: "Figueroa",
    edad: 25,
    isBelicoso: false,
    musicaPreferidaPorGenero: {
        rock: "La célula que explota",
        corridosTumbados: "Ella baila sola"
    },
    nombreCompleto: function fullName(){
        return this.nombre + " " + this.apellido + " , soy el belicón";
    }
};
const misDatosDeInstagram= {
    /*clave :valor  */
    nombre: "Jupafimo",
    apellido: "kliny",
    edad: null,
    isBelicoso: true,
    musicaPreferidaPorGenero: {
        rock: "La célula que explota",
        corridosTumbados: "Ella baila sola"
    },
    nombreCompleto: function fullName(){
        return this.nombre + " " + this.apellido + " , soy el cumbiachero";
    }
};
console.log("Datos completos: ", misDatosDePerfil);
console.log("Nombre: ", misDatosDePerfil.nombre);
console.log("Música de fin de semana: ", misDatosDePerfil.musicaPreferidaPorGenero.corridosTumbados);
console.log("Nombre Completo: ",  misDatosDePerfil.nombreCompleto());
console.log("Nombre Completo: ", misDatosDeInstagram.nombreCompleto());
