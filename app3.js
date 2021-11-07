document.addEventListener('DOMContentLoaded', function() {
    const botonCargar = document.getElementById('boton-cargar');
    const listaUsuarios = document.getElementById('lista-usuarios');

    botonCargar.addEventListener('click', async function() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const usuarios = await response.json();

            vaciarLista();
            usuarios.forEach(generarUsuarioLi);
        } catch(error) {
            alert(error);
        }
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

