
import { useState,  useEffect } from 'react';
import './App.css';
import { getProductos } from './ItemList';




function App() {

  const [ producto , getProducto] = useState([])
  const [ cargando, paraCargando] = useState(true)   //se inicializa con cargando(true) y finaliza con paraCargando(false)



  useEffect(() => {
    


    getProductos
  .then(data =>{
    //lamo a la appi
    getProducto(data)

  })
  .catch(e => console.log(console.error))
  .finally(() => paraCargando(false))




    return () => {
      console.log('clear');
    }
  },[])
 

  return (
    <div className="App">
       {
         cargando ?  <h1>CARGANDO...</h1> :   producto.map( pro => <div key={pro.id}  className="card w-50 mt-5">

       <div className="card-header">
       { pro.nombre}
     </div>
     <div className="card-body">
       < img src={pro.img} alt="fto" className='imagenes'/>
       {pro.precio}
     </div>
    <div  className="card-footer">
     
      <button className="btn btn-outline-primary btn-block">
        DETALLE PRODUCTO
      </button>
      
    
    </div>


                 
                 
                 
                  </div>
       )}
 </div>
 
  );
      
}

export default App;
