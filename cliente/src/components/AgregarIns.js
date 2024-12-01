import React, {useState} from 'react'
import uniquid from 'uniqid'
import axios from 'axios'
import SelectList from './SelectList'


function AgregarIns(){

 /*  
state={
   tipos: []
}

 componentDidMount(); {
   axios.get()
 .then((response) => {
   console.log(response);
   this.setState({tipos: response})
 })
 .catch((error) => {
   console.log(error);
 });
 
 }
 */
   //Hooks
   const[nombre,setNombre]= useState('')
   const[descripcion,setDescripción]= useState('')
   const[tipos,setTipos]= useState([])

   function agregarIns(){ 

      var instrumento= {
         nombre: nombre,
         descripcion: descripcion,
         tipos: tipos,
         idpaciente: uniquid()
      }
       console.log(instrumento)

       axios.post('/api/instrumento/agregarins', instrumento)
       .then(res =>{
          alert(res.data)
       })
       .then(err => {console.log(err)})
   }

    return(
        <div className="container">
            <div className="row">
                <h2 className="mt-4">Crear un nuevo instrumento</h2> 
            </div>


         <div className="container">
            <div className="row">
               <div className="col-sm-6 offset-3">
                  <div className="m-b3">
                     <label htmlFor="nombre" className="form-label">Nombre</label>
                     <input type="text" className="form-control" value={nombre} onChange={(e) => {
                        setNombre(e.target.value)}}></input>
                  </div>

                  <div className="m-b3">
                     <label htmlFor="descripcion" className="form-label">Descripcion</label>
                     <input type="text" className="form-control" value={descripcion} onChange={(e) => {
                        setDescripción(e.target.value)}}></input>
                  </div>


                    <SelectList 
                    title="tipos"
                    url="" 
                    handleChange={(e) => {
                     setTipos(e.target.value)
                     }}
                     />
                  
                  
                   <button onClick={agregarIns} className="btn- btn-success">Guardar Instrumento</button> 
                </div>
            </div>
         </div>

   
        </div>
    )
}

export default AgregarIns


/*
                <div className="m-b3">
                     <label htmlFor="tipo" className="form-label">Tipo</label>
                     <input type="text" className="form-control" value={tipos} onChange={(e) => {
                        setTipos(e.target.value)}}></input>
                  </div> 

*/