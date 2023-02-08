const express = require('express');
const router = express.Router();

const {Tipos} = require('../models/TipoIns');


router.get('/api/tipos', async (req,res) => {
const tipos = await Tipos.find();
res.send(tipos);                             
});

// GET: una tarea determinada - http://localhost:4000/api/tareas/:id
  
router.get('/api/tipos/:id', (req, res) => {res.send({nombre: "Viento"});
});


// POST: crear una tarea http://localhost:4000/api/tareas - en body 
router.post('/api/tipos', async (req,res) => {
  
    try {
      const {nombre,descripcion} = req.body; // nombre+otros atributos
  
      const tipos = new Tipos({
         nombre,
         descripcion
      });
    
      let nuevoTipo = await tipos.save();
      res.status(201).send(nuevoTipo);
      
    } catch (error) {
      console.error(error);
      res.status(500).send({mensaje: 'Error desconocido. Contactarse con soporte'});
    }
  });


  //PUT: actualizar una tarea - http://localhost:4000/api/tareas->
  router.put('/api/tipos/:id', async (req, res)=> {
    try {
      const {id} = req.params;
      const {nombre,descripcion} = req.body; 
  
      let tipoAc = await Tipos.findById(id);
  
      if(!tipoAc){
        res.status(404).send({mensaje: `El tipo con ${id} no existe`});
        return;
      }
  
      if(nombre){
        tipoAc.nombre = nombre;
      }
  
      if(descripcion){
        tipoAc.descripcion = descripcion;
      }
  

      tipoAc.save();
     res.status(200).send(tipoAc);
  
    } catch (err) {
      console.error(err);
     res.status(500).send({mensaje: `Error desconocido`});
    }
  
  });

 //Eliminar
 router.delete('/api/tipos/:id', async (req, res)=> {
    try {
       const {id} = req.params;
       let tipoElim = await Tipos.findById(id);
  
      if(!tipoElim){
         res.status(404).send({mensaje: 'Tipo no encontrado'});
        return;
      }
       const tipoEliminado = await tipoElim.remove();
       return res.send({_id: tipoEliminado.id, mensaje: `Tipo eliminado con exito`});
    } catch (error) {
      console.error(error);
      res.status(500).send({mensaje: `Error desconocido`});
    }
  
  }); 




module.exports = router;