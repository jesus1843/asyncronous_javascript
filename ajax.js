function cargarUsuarios(url) {
    return new Promise(function(resolve, reject) {
        const ajax = new XMLHttpRequest();

        ajax.onreadystatechange = function() {
            if (this.readyState == 4) {
                if (this.status == 200) {
                    const usuarios = JSON.parse(this.responseText);
                    resolve(usuarios);
                } else {
                    reject(new Error('Error al cargar usuarios'));
                }
            }
        }
        ajax.open('GET', url);
        ajax.send();
    });
}

export default {
    cargarUsuarios
}
