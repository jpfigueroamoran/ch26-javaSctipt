console.log("Sesion js06-formulario")

const refForm = document.forms["registro"];


refForm.addEventListener(`submit`,(event)=>{
    event.preventDefault();// Omite las acciones por defalt
    //console.log(event);
    const email = refForm.elements["inputEmail4"];
    console.log(email.value);
    // crear el objeto con los datos del formulario
    const user = {
        email: refForm.elements["inputEmail4"].value,
        password: refForm.elements["inputPassword4"].value,
        address: refForm.elements["inputAddress"].value,
        city: refForm.elements["inputCity"].value,
        state: refForm.elements["inputState"].value,
        zip: refForm.elements["inputZip"].value,	
        checkbox: refForm.elements["gridCheck"].checked,
    };

    console.log(user);
});