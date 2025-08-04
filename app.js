// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación.
let nombresDeAmigos = [];

// función para agregar nombres a la lista
function agregarNombres() {
    let nombre = document.getElementById("amigo").value;

    // validando si se a ingresado un nombre.
    if (nombre === '') {
        alert('Por favor, escriba el nombre de un amigo.');
        return;
    }

    // asegurandome que el nombre no exista en la ista.
    let existente = nombresDeAmigos.includes(nombre);
    if (existente) {
        alert('El nombre ingresado ya existe.');
        return;
    }

    // agregando el nombre ingresado a la lista.
    nombresDeAmigos.push(nombre);
    document.getElementById("amigo").value = '';
    console.log(nombresDeAmigos.length);
    console.log(nombresDeAmigos);
}

// función para mostrar al usuario los nombres ingresados.
function mostrarNombres() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = '';
    
    let mostrar = document.getElementById("resultado");
    mostrar.textContent = nombresDeAmigos;
}
mostrarNombres();