const mongoose = require('mongoose');

const TiposSchema = new mongoose.Schema(
    {    
        nombre:{
            type: String,
            require: true
        },
        descripcion:{
            type: String,
            require: true
        }
    });

    const Tipos = new mongoose.model('tipos',TiposSchema);

    module.exports= {Tipos} 