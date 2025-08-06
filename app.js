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
    mostrarNombres()
    console.log(nombresDeAmigos.length);
    console.log(nombresDeAmigos);
}

// funcion para actualizar la lista de amigos
function mostrarNombres() {
    const listaAmigos = document.getElementById("listaAmigos"); // Obtener el elemento de la lista
    listaAmigos.innerHTML = ""; // Limpiar la lista existente

    // recorrer sobre el arreglo y agregar cada nombre como <li>
    for (let i = 0; i < nombresDeAmigos.length; i++) {
        const nuevoLi = document.createElement("li");
        nuevoLi.textContent = nombresDeAmigos[i];
        listaAmigos.appendChild(nuevoLi);
    }
}

// funcion para sortear los nombres de amigos.
function sortearAmigo() {
    // Validar que haya amigos disponibles
    if (nombresDeAmigos.length === 0) {
        alert('No hay amigos para sortear.');
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * nombresDeAmigos.length); // Generar un índice aleatorio

    let nombreSorteado = nombresDeAmigos[indiceAleatorio]; // Obtener el nombre sorteado

    // Mostrar el resultado
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>Amigo sorteado: <strong>${nombreSorteado}</strong></li>`;
}