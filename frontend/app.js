let tareas = JSON.parse(localStorage.getItem("tareas")) || [];

const boton = document.getElementById("btnAgregar");
const lista = document.getElementById("listaTareas");

mostrarTareas();

boton.addEventListener("click", () => {

    const titulo = document.getElementById("titulo").value;
    const descripcion = document.getElementById("descripcion").value;

    if (titulo === "" || descripcion === "") {
        alert("Completa todos los campos");
        return;
    }

    tareas.push({
        titulo: titulo,
        descripcion: descripcion,
        completada: false
    });

    guardarTareas();

    document.getElementById("titulo").value = "";
    document.getElementById("descripcion").value = "";

    mostrarTareas();
});

function mostrarTareas() {

    lista.innerHTML = "";

    tareas.forEach((tarea, index) => {

        const elemento = document.createElement("li");

        elemento.innerHTML = `
            <span style="${tarea.completada ? 'text-decoration: line-through; color: green;' : ''}">
                ${tarea.titulo} - ${tarea.descripcion}
            </span>
            <button onclick="completarTarea(${index})">Completar</button>
            <button onclick="editarTarea(${index})">Editar</button>
            <button onclick="eliminarTarea(${index})">Eliminar</button>
        `;

        lista.appendChild(elemento);
    });
}

function guardarTareas() {
    localStorage.setItem("tareas", JSON.stringify(tareas));
}

function eliminarTarea(index) {
    tareas.splice(index, 1);
    guardarTareas();
    mostrarTareas();
}

function editarTarea(index) {

    const nuevoTexto = prompt(
        "Editar tarea",
        tareas[index].titulo + " - " + tareas[index].descripcion
    );

    if (nuevoTexto) {

        const partes = nuevoTexto.split("-");

        tareas[index].titulo = partes[0].trim();
        tareas[index].descripcion = partes[1]
            ? partes[1].trim()
            : "";

        guardarTareas();
        mostrarTareas();
    }
}

function completarTarea(index) {

    tareas[index].completada = !tareas[index].completada;

    guardarTareas();
    mostrarTareas();
}