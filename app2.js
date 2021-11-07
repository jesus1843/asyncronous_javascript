document.addEventListener('DOMContentLoaded', function() {
    const botonCargar = document.getElementById('boton-cargar');
    const listaUsuarios = document.getElementById('lista-usuarios');

    botonCargar.addEventListener('click', function() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(function (response) {
                return response.json();
            })
            .then(function(usuarios) {
                vaciarLista();

                usuarios.forEach(generarUsuarioLi);
            })
            .catch(function(error) {
                alert(error.message);
            });
    });

    function vaciarLista() {
        while(listaUsuarios.firstChild) {
            listaUsuarios.firstChild.remove();
        }
    }

    function generarUsuarioLi(usuario) {
        const li = document.createElement('li');
        li.textContent = usuario.name;
        li.classList.add('list-group-item');
        li.classList.add('text-center');
        listaUsuarios.appendChild(li);
    }
});

