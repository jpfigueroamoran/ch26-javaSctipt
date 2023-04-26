console.log("Sesion Js03");

// ----- Declaración de bloque --------------------

{
    /*
    Las variables declaradas con let y const
    solo tendrán alcance(scope) dentro del bloque
    o bloques anidados.

    */
    let nombre = "Juan";
    const apellido = "Figueroa";
    let edadJuan = 39, edadPablo = 25;
    // let edadJuan = 39;
    // let edadPablo = 25;
    let numCohorteJuan = numCohortePablo = 26;

    {
        /*
         bloque anidado
         Si una variable local tiene el mismo nombre de
         una varible global o de bloque superior, la varible
         local oculta las otras variables, para que la variable
         local sea usada.
         */
        let nombre = "Pablo";
        const apellido = "FM";
        console.log(`Me llamo ${nombre} ${apellido}`);
        console.log(`Juan: ${edadJuan} años`); // 39
        console.log(`Pablo ${edadPablo} años`) // 25
        console.log(`Juan cohorte: ${numCohorteJuan} `); // 26
        console.log(`Pablo cohorte ${numCohortePablo} `) // 26

    }
    console.log(`Me llamo ${nombre} ${apellido}`);
    console.log(`Juan: ${edadJuan} años`); // 39
    console.log(`Pablo ${edadPablo} años`) // 25
    console.log(`Juan cohorte: ${numCohorteJuan} `); // 26
    console.log(`Pablo cohorte ${numCohortePablo} `) // 26
}
//console.log(`Me llamo ${nombre} ${apellido}`); Las variables no estaán definidas
//console.log(`Juan: ${edadJuan} años`); // Las variables no estaán definidas
//console.log(`Pablo ${edadPablo} años`) // Las variables no estaán definidas
//console.log(`Pablo cohorte ${numCohortePablo} `); // 
//console.log(`Juan cohorte: ${numCohorteJuan} `); // 

/* ------------condicional if-else------------
La condicional if ejecuta una sencia si una condicion especificada es evaluad como vcerdadera

sintaxis:
-if(condición) sentencia

-if (condicion){
    sentencias;
}

-if (condicion){
    sentencia}
else sentencias;

-if (condicion) {
    sentencia; }
    else{
        sentencia;
    }
-if (condicion) {
    sentencia; }
    else if(condicion2){
        sentencia;
    }
    else if(condicion3){
        sentencia;
    }
    else{Sentencia};

    */

const temperatura = 100;
let mensaje;

/*     if (temperatura === 21) mensaje = `Temperatura ideal ${temperatura}`;
    else mensaje = `${temperatura} grados no es ideal`; */
if (temperatura === 21)
    mensaje = `Temperatura ideal ${temperatura}`;
else if (temperatura < 21 && temperatura < 40)
    mensaje = `Tempratura de ${temperatura} grados es fría`;
else if (temperatura > 40)
    mensaje = `Tempratura de ${temperatura} grados es super caliente`;
else if (temperatura > 21)
    mensaje = `Tempratura de ${temperatura} grados es caliente`;
else
    mensaje = `Temperatura de ${temperatura} grados no existe`;
console.log(mensaje);

/* -------Ejercicio------- */
// preguntar numero de mes del uno a doce, de acuerdo al numero de mes
//desplegar en un Alert (o en el DOM ) La estación del año

// mes 12,1,2 = invierno 
// mes 3,4,5= primavera
// mes 6,7,8 = Verano
//mes 9,10,11 = otoño
// Usar if-else

const getEstacion = (mes) => {
    let estacion;
  
    if (mes === 12 || mes === 1 || mes === 2) {
      estacion = "invierno";
    } else if (mes === 3 || mes === 4 || mes === 5) {
      estacion = "primavera";
    } else if (mes === 6 || mes === 7 || mes === 8) {
      estacion = "verano";
    } else if (mes === 9 || mes === 10 || mes === 11) {
      estacion = "otoño";
    } else {
      estacion = "El número ingresado no es válido.";
    }
  
    return estacion;
  }
  
  const boton = document.getElementById("calcular");
  boton.addEventListener("click", () => {
    const mesInput = document.getElementById("mes");
    const mes = parseInt(mesInput.value);
  
    const estacion = getEstacion(mes);
    const resultado = document.getElementById("resultado");
    resultado.textContent = `La estación correspondiente al mes ${mes} es ${estacion}.`;
  });