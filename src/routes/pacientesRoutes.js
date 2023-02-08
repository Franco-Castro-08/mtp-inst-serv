const express = require('express');
const router = express.Router();

const {Pacientes} = require('../models/Paciente'); //viene de Paciente


router.get('/api/pacientes', async (req,res) => {
                                                       //try {
    const pacientes = await Pacientes.find();
    res.send(pacientes);                              //.status(201)
                                                      //} catch (error) {
                                                      //  console.error(error);
                                                      //  res.status(500).send({mensaje: 'Error desconocido'});  
                                                      //}
});


// GET: una tarea determinada - http://localhost:4000/api/tareas/:id
  
router.get('/api/pacientes/:id', (req, res) => {res.send({nombre: "Romina", apellido: "Alvarez"});
});


// POST: crear una tarea http://localhost:4000/api/tareas - en body 
router.post('/api/pacientes', async (req,res) => {
  
  try {
    const {dni,nombre,apellido,fechaNac,telefono} = req.body; // nombre+otros atributos

    const pacientes = new Pacientes({
       dni,
       nombre,
       apellido,
       fechaNac,
       telefono
    });
  
    let nuevoPaciente = await pacientes.save();
    res.status(201).send(nuevoPaciente);
    
  } catch (error) {
    console.error(error);
    res.status(500).send({mensaje: 'Error desconocido. Contactarse con soporte'});
  }
});




  //PUT: actualizar una tarea - http://localhost:4000/api/tareas->
  router.put('/api/pacientes/:id', async (req, res)=> {
    try {
      const {id} = req.params;
      const {nombre,apellido,fechaNac,telefono} = req.body; 
  
      let pacienteAc = await Pacientes.findById(id);
  
      if(!pacienteAc){
        res.status(404).send({mensaje: `El/La Paciente con ${id} no existe`});
        return;
      }
  
      if(nombre){
        pacienteAc.nombre = nombre;
      }
  
      if(apellido){
        pacienteAc.apellido = apellido;
      }
  
      if(fechaNac){
        pacienteAc.fechaNac = fechaNac;
      }
  
      if(telefono){
        pacienteAc.telefono = telefono;
      }
  
      pacienteAc.save();
     res.status(200).send(pacienteAc);
  
    } catch (err) {
      console.error(err);
     res.status(500).send({mensaje: `Error desconocido`});
    }
  
  });


  //Eliminar
  router.delete('/api/pacientes/:id', async (req, res)=> {
    try {
       const {id} = req.params;
       let pacienteElim = await Pacientes.findById(id);
  
      if(!pacienteElim){
         res.status(404).send({mensaje: 'Paciente no encontrado'});
        return;
      }
       const pacienteEliminado = await pacienteElim.remove();
       return res.send({_id: pacienteEliminado.id, mensaje: `Paciente eliminado con exito`});
    } catch (error) {
      console.error(error);
      res.status(500).send({mensaje: `Error desconocido`});
    }
  
  }); 



module.exports = router;
