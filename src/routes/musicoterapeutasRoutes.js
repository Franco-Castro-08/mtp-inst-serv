const express = require('express');
const router = express.Router();

const {Musicoterapeutas} = require('../models/Musicoterapeuta');

// GET: Buscar musicoterapeutas - http://localhost:4000/api/musicoterapeutas
router.get('/api/musicoterapeutas', async (req,res) => {

    const musicoterapeutas = await Musicoterapeutas.find();
    res.send(musicoterapeutas);  //status(201)

});


// GET: un musicoterapeuta determinada - http://localhost:4000/api/musicoterapeutas/:id

router.get('/api/musicoterapeutas/:id', (req, res) => {res.send({nombre: "Mariana", apellido: "Reyes"});
});


// POST: crear una tarea http://localhost:4000/api/tareas - en body 
router.post('/api/musicoterapeutas', async (req,res) => {
  
    try {
      const {matricula,nombre,apellido} = req.body; // nombre+otros atributos
  
      const musicoterapeutas = new Musicoterapeutas({
         matricula,
         nombre,
         apellido
      });
    
      let nuevoPaciente = await musicoterapeutas.save();
      res.status(201).send(nuevoPaciente);
      
    } catch (error) {
      console.error(error);
      res.status(500).send({mensaje: 'Error desconocido. Contactarse con soporte'});
    }
  });


   //PUT: actualizar una tarea - http://localhost:4000/api/tareas->
   router.put('/api/musicoterapeutas/:id', async (req, res)=> {
    try {
      const {id} = req.params;
      const {nombre,apellido,estado} = req.body; 
  
      let musicoterapeutasAc = await Musicoterapeutas.findById(id);
  
      if(!musicoterapeutasAc){
        res.status(404).send({mensaje: `El/La Paciente con ${id} no existe`});
        return;
      }
  
      if(nombre){
        musicoterapeutasAc.nombre = nombre;
      }
  
      if(apellido){
        musicoterapeutasAc.apellido = apellido;
      }
  
      if(estado){
        musicoterapeutasAc.estado = estado;
      }
  
      musicoterapeutasAc.save();
     res.status(200).send(musicoterapeutasAc);
  
    } catch (err) {
      console.error(err);
     res.status(500).send({mensaje: `Error desconocido`});
    }
});


//Eliminar
router.delete('/api/musicoterapeutas/:id', async (req, res)=> {
  try {
     const {id} = req.params;
     let musicoterapeutaElim = await Musicoterapeutas.findById(id);

    if(!musicoterapeutaElim){
       res.status(404).send({mensaje: 'Musicoterapeuta no encontrado'});
      return;
    }
     const musicoterapeutaEliminado = await musicoterapeutaElim.remove();
     return res.send({_id: musicoterapeutaEliminado.id, mensaje: `Musicoterapeuta eliminado con exito`});
  } catch (error) {
    console.error(error);
    res.status(500).send({mensaje: `Error desconocido`});
  }

}); 




module.exports = router;