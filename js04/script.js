console.log("JS04 Arreglos y ciclos");
 /* Declararun array */
 const nombresCh26 = ["Sofi", "Alejandro","Ixchel", "Said"];
 //Usando el constructor de arreglos
 const apellidosCh26 = new Array("Montellano", "Torres", "Vazquez", "Figueroa");
 const numCajonesEstacionamiento = new Array(4);
 const numCohortesActivas = new Array(26,27,28,29);


 console.log("Apellido de Juan Pablo" + " "+ apellidosCh26[3]);

 //Agregar un nuevo apellido al final del arreglo apellido

 apellidosCh26.push("Moran");
 console.log(apellidosCh26);

 /* --------Arreglos de dos dimensiones------------ */
 const personasEnCohortes = [ 
    /* ch26 */["Arath","José", "Karen"    ,"Sofi"],
    /* ch27 */["Manuel", "María", "Francisco", "Pablo", "Pepe"], 
    /* ch28 */["Doris", "Brendan","Lucas"]
];
console.log("Pesonas ch27 "+ personasEnCohortes[1].join(", "));
//Accediendo a Francisco
// const temporalCh27 = personasEnCohorte[1];
const temporalCh27 = ["Manuel", "María", "Francisco", "Pablo", "Pepe"];
const paco = temporalCh27[2];
console.log("Extraer en pasos" + paco)
console.log ("Paco en Ch27 " + personasEnCohortes[1][2]);
console.log ("Lucas en Ch27 " + personasEnCohortes[2][2]);
console.log ("Karen en Ch27 " + personasEnCohortes[0][2]);

personasEnCohortes[1][3] = "Juan";
console.log("Pesonas ch27 "+ personasEnCohortes[1].join(", "));

//myArray3D =  [ [ [ ] ] [ [ ] ] ];

//Iterar un arreglo de dos dimenciones.
for (let fila = 0; fila < personasEnCohortes.length; fila++) {
    //const// element = personasEnCohortes[fila];
    console.log(`Indice ${fila} ${personasEnCohortes[fila] } `);
    for (let columna = 0; columna < personasEnCohortes[fila].length; columna++) {      
        console.log(`Nombre:  ${personasEnCohortes[fila][columna]}`);  
    }
}

// Usando forEach
personasEnCohortes.forEach( fila => fila.forEach( columna =>  console.log(columna) ));

// For of
//Ejecuta sentencias por cada elemento de un objeto iterable (Arrays, Strings y objetos)
const myName = "Juan"
for (let char of myName) {
    console.log(char);
}

for (let fila of personasEnCohortes){
    for (let columna of fila){
        console.log(columna);
    }
}

//----------------Consideraciones para el ciclo for------------------
// No es necesario, indicar el inicio, la comparación y la expresión final


