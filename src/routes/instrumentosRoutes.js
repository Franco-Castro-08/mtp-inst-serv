const express = require('express');
const router = express.Router();

const {Instrumentos} = require('../models/Instrumento');


router.get('/api/instrumentos', async (req,res) => {
const instrumentos = await Instrumentos.find();
res.send(instrumentos);                             
});


//agregar paciente    ---Deberias traer de tipos algo asi /tiposins
router.post('/api/instrumento/agregarins', (req,res) =>{
  const nuevoinstrumento = new Instrumentos({
      nombre: req.body.nombre,
      descripcion: req.body.descripcion,
      tipos: req.body.tipos,
      idinstrumento: req.body.idinstrumento
  })
  nuevoinstrumento.save(function(err){
      if (!err) {
          res.send('Instrumento agregado correctamente')
      }else{
          res.send(err)
      }
  })
})

// GET: una tarea determinada - http://localhost:4000/api/tareas/:id
  
router.get('/api/instrumentos/:id', (req, res) => {res.send({nombre: "Guitarra"});
});


// POST: crear una tarea http://localhost:4000/api/tareas - en body 
router.post('/api/instrumentos', async (req,res) => {
  
    try {
      const {nombre,descripcion} = req.body; // nombre+otros atributos
  
      const instrumentos = new Instrumentos({
         nombre,
         descripcion
      });
    
      let nuevoInstrumento = await instrumentos.save();
      res.status(201).send(nuevoInstrumento);
      
    } catch (error) {
      console.error(error);
      res.status(500).send({mensaje: 'Error desconocido. Contactarse con soporte'});
    }
  });


  //PUT: actualizar una tarea - http://localhost:4000/api/tareas->
  router.put('/api/instrumentos/:id', async (req, res)=> {
    try {
      const {id} = req.params;
      const {nombre,descripcion} = req.body; 
  
      let instrumentoAc = await Instrumentos.findById(id);
  
      if(!instrumentoAc){
        res.status(404).send({mensaje: `El instrumento con ${id} no existe`});
        return;
      }
  
      if(nombre){
        instrumentoAc.nombre = nombre;
      }
  
      if(descripcion){
        instrumentoAc.descripcion = descripcion;
      }
  
      instrumentoAc.save();
     res.status(200).send(instrumentoAc);
  
    } catch (err) {
      console.error(err);
     res.status(500).send({mensaje: `Error desconocido`});
    }
  
  });

 //Eliminar
 router.delete('/api/instrumentos/:id', async (req, res)=> {
    try {
       const {id} = req.params;
       let instrumentoElim = await Instrumentos.findById(id);
  
      if(!instrumentoElim){
         res.status(404).send({mensaje: 'Instrumento no encontrado'});
        return;
      }
       const instrumentoEliminado = await instrumentoElim.remove();
       return res.send({_id: instrumentoEliminado.id, mensaje: `Instrumento eliminado con exito`});
    } catch (error) {
      console.error(error);
      res.status(500).send({mensaje: `Error desconocido`});
    }
  
  }); 




module.exports = router;