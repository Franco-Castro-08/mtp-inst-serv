//imports
const express= require('express');
const app = express();
const mongoose = require('mongoose');

const {Pacientes} = require('./models/Paciente')
const {Musicoterapeutas}= require('./models/Musicoterapeuta')
const {Tipos}= require('./models/TipoIns')
const {Instrumentos}= require('./models/Instrumento')


const pacientesRouter =  require('./routes/pacientesRoutes');
const musicoterapeutasRouter = require('./routes/musicoterapeutasRoutes');
const tiposRouter = require('./routes/tiposRoutes') 
const instrumentosRouter = require('./routes/instrumentosRoutes')

const PORT = 4000;
const MONGO_URI = 'mongodb://localhost:27017/mtp23'; 
mongoose.set('strictQuery', true);
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

//middlewares
app.use(express.json());


//rutas
app.use(pacientesRouter);
app.use(musicoterapeutasRouter);
app.use(tiposRouter);
app.use(instrumentosRouter);

const crearPaciente = () =>{
    Pacientes.create(
      {
        dni:'26455819',
        nombre:'Sebastian',
        apellido:'Puebla',
        telefono:'2614389735'
      }
    )
}    

const crearMusicoterapeuta = () =>{
    Musicoterapeutas.create(
     {
        matricula:'6756',
        nombre:'Emanuel',
        apellido:'Gattoni',
        pacientes:mongoose.Types.ObjectId("63e26bdcd2ad3f86114d57ca")
     }
    )
   
}

const crearTipoIns = () =>{
  Tipos.create(
    {
      nombre:'Cuerda',
      descripcion:'los de cuerda son....'
    }
  )
}


const crearInstrumento = () =>{
   Instrumentos.create(
   {
      nombre:'Saxofon',
      descripcion:'De viento, de metal con boquilla de madera y varias llaves',
      tipo:mongoose.Types.ObjectId("63e2d16b9ef3922ef188926b")
   }
  )
 
}

//agregado de tutorial

//const listaMusicoterapeutasConPacientes = async () => {
    //const resultado = await Pacientes.aggregate(
    //[
    // {
    //    $lookup: {
    //        from: "musicoterapeuta",
    //        let:{ 
    //            aliasNombrePaciente: "$nombre"
    //        },
    //        pipeline:[
    //            {
   //              $match:{
   //                 $expr: {
   //                     $in: ["$$aliasNombrePaciente","$pacientes"]
   //                 } 
   //              }
   //             } 
  //              ],
 //           as: 'listaDePacientesEncontrados'   
 //       }
 //    }
//    ]
//  )
  
//  console.log('******* RESULTADOS *******', JSON.stringify(resultado));
//}


//llamar funcion
//crearPaciente();
//crearMusicoterapeuta();
//crearTipoIns();
//crearInstrumento();

//tutorial agregado
//listaMusicoterapeutasConPacientes();

//iniciar app
app.listen(PORT, () => console.log(`Iniciando  app en puerto ${PORT}`));