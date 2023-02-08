const mongoose = require('mongoose');


const PacientesSchema = new mongoose.Schema(

    {
        dni:{
            type: Number,
            default: '000'
        },
        nombre:{
            type: String,
            require: true
        }, 
        apellido:{
            type: String,
            require: true
        },
        fechaNac:{
            type: Date,
            default: Date.now
        }, 
        telefono:{
            type: String,
            default: '12345'
        }

    }

)

//
const Pacientes = new mongoose.model('pacientes',PacientesSchema);

module.exports= {Pacientes} 