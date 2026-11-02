const Task = require("../models/Task");

// Obtener todas las tareas
const obtenerTareas = async (req, res) => {
  try {
    const tareas = await Task.find();
    res.json(tareas);
  } catch (error) {
    res.status(500).json({ mensaje: error.message });
  }
};

// Crear una tarea
const crearTarea = async (req, res) => {
  try {
    const tarea = new Task(req.body);
    const nuevaTarea = await tarea.save();
    res.status(201).json(nuevaTarea);
  } catch (error) {
    res.status(400).json({ mensaje: error.message });
  }
};

// Actualizar una tarea
const actualizarTarea = async (req, res) => {
  try {
    const tarea = await Task.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(tarea);
  } catch (error) {
    res.status(400).json({ mensaje: error.message });
  }
};

// Eliminar una tarea
const eliminarTarea = async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);

    res.json({
      mensaje: "Tarea eliminada correctamente"
    });
  } catch (error) {
    res.status(400).json({ mensaje: error.message });
  }
};

module.exports = {
  obtenerTareas,
  crearTarea,
  actualizarTarea,
  eliminarTarea
};
