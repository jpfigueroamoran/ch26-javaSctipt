// Función para mostrar la pantalla de carga
function mostrarCarga() {
  var loadingRow = document.getElementById('loading-row');
  loadingRow.style.display = 'table-row';
}

// Función para ocultar la pantalla de carga
function ocultarCarga() {
  var loadingRow = document.getElementById('loading-row');
  loadingRow.style.display = 'none';
}

// Función para formatear los datos de los usuarios y mostrarlos en la tabla
function mostrarUsuarios(usuarios) {
  var tablaUsuarios = document.getElementById('user-table-body');
  tablaUsuarios.innerHTML = '';

  usuarios.forEach(function(usuario) {
    var fila = document.createElement('tr');

    var avatarColumna = document.createElement('td');
    var avatarImagen = document.createElement('img');
    avatarImagen.src = usuario.avatar;
    avatarImagen.alt = 'Avatar';
    avatarImagen.classList.add('avatar');
    avatarColumna.appendChild(avatarImagen);

    var nombreColumna = document.createElement('td');
    nombreColumna.textContent = usuario.first_name + ' ' + usuario.last_name;

    var emailColumna = document.createElement('td');
    emailColumna.textContent = usuario.email;

    fila.appendChild(avatarColumna);
    fila.appendChild(nombreColumna);
    fila.appendChild(emailColumna);

    tablaUsuarios.appendChild(fila);
  });
}

// Función para realizar la petición a la API y mostrar los datos en la tabla
function obtenerUsuarios() {
  mostrarCarga();

  fetch('https://reqres.in/api/users?delay=3')
    .then(function(response) {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Error en la respuesta de la API');
    })
    .then(function(data) {
      ocultarCarga();
      mostrarUsuarios(data.data);

      // Almacenar los datos localmente durante 5 minutos (300 segundos)
      localStorage.setItem('usuarios', JSON.stringify(data.data));
      localStorage.setItem('tiempoVida', Date.now() + 300000); // Guardar el tiempo de expiración
    })
    .catch(function(error) {
      ocultarCarga();
      console.log(error);
    });
}

// Función para obtener los datos almacenados localmente si están disponibles y no han expirado
function obtenerUsuariosLocalmente() {
  var usuariosGuardados = localStorage.getItem('usuarios');
  var tiempoVida = localStorage.getItem('tiempoVida');

  if (usuariosGuardados && tiempoVida && Date.now() < tiempoVida) {
    mostrarUsuarios(JSON.parse(usuariosGuardados));
  } else {
    obtenerUsuarios();
  }
}

// Llamar a la función para obtener los datos (ya sea de forma remota o local)
obtenerUsuariosLocalmente();
