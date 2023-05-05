// ----- Crear un objeto en js -------------
const frutasColores = {
    // clave: valor
    fresa: ["roja"],
    pepino: ["verde"],
    mango: ["amarillo"],
    naranja: ["anaranjada", "amarilla"],
    mandarina: ["anaranjado"],
    mora: ["morada"],
    pitaya: ["rosa", "rojo", "blanco", "amarillo"]

};


// -------------Iterando los objetos ----------------------------------
// Iterar los valores con for-in
// iterar sobre todas las propiedades (keys) de un objeto

for (let fruta in frutasColores) {
    console.log(`${fruta} tiene los colores ${frutasColores[fruta]} `);
}

// ------------- Uso de Symbol ----------------
/* 
Se utiliza para añadir claves de propiedades únicas y que esten ocultas
a otros mecanismos como la iteración y stringify.
Esto nos sirve para realizar el concepto de encapsulación.
*/
const sueldoOculto = Symbol();
const datosEmpleado = {
    nombre: "El kesa",
    apellido:"britas",
    sueldo: 50_000
};
for (dato in datosEmpleado){
    console.log(`${dato}: ${datosEmpleado[dato]}`)
}

localStorage.setItem('datosEmpleado', JSON.stringify(datosEmpleado));

//Bote  de lunetas