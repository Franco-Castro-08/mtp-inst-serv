const mongoose = require('mongoose');

const MusicoterapeutasSchema = new mongoose.Schema(
{
   matricula:{
    type: Number,
    default: '2313' 
   },
   nombre:{
    type: String,
    require: true
   },
   apellido:{
    type: String,
    require: true
   },
   estado: {
    type : Boolean,
    default: false
   }, 

    pacientes: {                         // agregado de tutorial                          //----
        type:mongoose.Types.ObjectId
    //type: Array,
     //default: []
    }

}
)

const Musicoterapeutas = new mongoose.model('musicoterapeutas',MusicoterapeutasSchema);

module.exports= {Musicoterapeutas}