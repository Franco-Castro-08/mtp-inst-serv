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
        tipos: {                         // agregado de tutorial                          //----
            type: Array,
            default: []
        }
    });

    const Instrumentos = new mongoose.model('instrumentos',InstrumentosSchema);

    module.exports= {Instrumentos} 