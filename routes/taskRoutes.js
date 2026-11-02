const express = require("express");
const router = express.Router();

const {
  obtenerTareas,
  crearTarea,
  actualizarTarea,
  eliminarTarea
} = require("../controllers/taskController");

// Obtener todas las tareas
router.get("/", obtenerTareas);

// Crear una tarea
router.post("/", crearTarea);

// Actualizar una tarea
router.put("/:id", actualizarTarea);

// Eliminar una tarea
router.delete("/:id", eliminarTarea);

module.exports = router;
