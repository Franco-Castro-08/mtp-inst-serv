const mongoose = require('mongoose');

const InstrumentosSchema = new mongoose.Schema(
    {    
        nombre:{
            type: String,
            require: true
        },
        descripcion:{
            type: String,
            require: true
        },
        tipo: {                         // agregado de tutorial                          //----
            type:mongoose.Types.ObjectId
        }
    });

    const Instrumentos = new mongoose.model('instrumentos',InstrumentosSchema);

    module.exports= {Instrumentos} 