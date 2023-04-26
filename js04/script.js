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