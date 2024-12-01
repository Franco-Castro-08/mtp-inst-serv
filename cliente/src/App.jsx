import {BrowserRouter, Routes, Route} from 'react-router-dom'

import AgregarIns from "./components/AgregarIns";


function App() {
  return (
    <div className="App">
       
       <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container">
        <a className="navbar-brand" href="/">MUSICOTERAPIA</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
          data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
          aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
         <li className="nav-item">
           <a className="nav-link active" aria-current="page" href="/">Inicio</a>
         </li>
         <li className="nav-item">
           <a className="nav-link" href="agregarins">Agregar Instrumento</a>
         </li>
        </ul>  
      </div>
   </div>
 </nav> 

    <BrowserRouter>
          <Routes>
          <Route path='/agregarins' element={<AgregarIns/>} exact></Route>
          </Routes>
        </BrowserRouter> 
 
      
    </div>
  );
}

export default App;

/*

<BrowserRouter>
          <Routes>
            <Route path='/' ></Route>
          </Routes>
        </BrowserRouter>

         <Routes>
            <Route path='/' element={<MostrarPacientes/>} exact></Route>
            <Route path='/agregarpaciente' element={<AgregarPaciente/>} exact></Route>
            <Route path='/editarpaciente/:idpaciente' element={<EditarPaciente/>} exact></Route>
          </Routes>

*/