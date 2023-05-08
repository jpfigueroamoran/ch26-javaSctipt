console.log("JS09 Uso de Axios");

const url = "https://reqres.in/api/users?page=2";

const getUsersFetch = () => {
    fetch( url )
        .then( response=> response.json()  )
        .then( users => {
            console.log(users.data)
        } )
        .catch( error => console.log(error) );
};
const getUsersAxios = () => {
    axios.get(url)
        .then( users => { 
            console.log(users.data.data)  
        })
        .catch( error => console.log(error) );
     };


/* --------Usar Axios con async-await------------ */
const getUsersAxiosAwait = async () => {
    try {
      const users = await axios.get(url);
      const usersId2 = await axios.get(url);
      console.log(users.data.data); 
      console.log(usersId2); 
    } catch (error) {
     console.error(error);
    }
  };
  // ------- Solicutd Post con Axios. ------------------
  const createUser = async (userData) => {
    try {
      const createdUser = await axios.post(url, userData);
      console.log(createdUser); // o cualquier otra acción que desees realizar con los datos
    } catch (error) {
      console.error(error);
    }
  }
  
  const userData = {
    name: "Juan",
    email: "juan@example.com",
    password: "123456"
  };