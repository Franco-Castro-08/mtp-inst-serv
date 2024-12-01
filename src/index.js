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
const MONGO_URI = 'mongodb://0.0.0.0:27017/mtp23'; 
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
       // dni:'26455819',
       // nombre:'Sebastian',
       // apellido:'Puebla',
       // telefono:'2614389735'
      }
    )
}    

const crearMusicoterapeuta = () =>{
    Musicoterapeutas.create(
     {
      //  matricula:'6756',
      //  nombre:'Emanuel',
      //  apellido:'Gattoni',
      //  pacientes:mongoose.Types.ObjectId("63e26bdcd2ad3f86114d57ca")
     }
    )
   
}

const crearTipoIns = () =>{
  Tipos.create(
    {
    //  nombre:'Cuerda',
    //  descripcion:'los de cuerda son....'
    }
  )
}

const crearInstrumento = () =>{
   Instrumentos.create(
   {
    //nombre:'Guitarra',
    //descripcion:'6 cuerdas',
    //tipos: mongoose.Types.ObjectId("63e2d23ceb8c7e8885349ca7")
      nombre:'Saxofon',
      descripcion:'De viento, de metal con boquilla de madera y varias llaves',
    tipos: mongoose.Types.ObjectId("63e2d16b9ef3922ef188926b")
   }
  )
 
}

//agregado de tutorial

const listaMusicoterapeutasConPacientes = async () => {

  const resultado = await Musicoterapeutas.aggregate(
[
  {
    $lookup:
    {
       from: "pacientes",
       localField: "pacientes",
       foreignField:"_id",
       as: "listapaciente"
    }
  },
  {$unwind:"$listapaciente"}
]
  )
    console.log('******* RESULTADOS *******', resultado);//JSON.stringify(resultado)
}

const listaInstrumentoConTipos = async () => {
    const resultado = await Instrumentos.aggregate(
     [
     {
        $lookup: {
            from: "tipos",
            localField: "tipos",
            foreignField: "_id",
            as: "listatipos"  
        }
    },
    {$unwind:"$listatipos"}
    ]
  )
  
  console.log('******* RESULTADOS *******', resultado);//JSON.stringify()
}


//llamar funcion
//crearPaciente();
//crearMusicoterapeuta();
//crearTipoIns();
//crearInstrumento();

//tutorial agregado
//listaMusicoterapeutasConPacientes();
listaInstrumentoConTipos();

//iniciar app
app.listen(PORT, () => console.log(`Iniciando  app en puerto ${PORT}`));