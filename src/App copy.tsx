import { IndiceEmpleados } from './IndiceEmpleados';
import { useContador } from './hooks/useContador';

function App() {  

 //ejemplo de como usar un hook personalizado:
 // Llama al hook useContador, configurando un valor inicial de 10
 const { contador, incrementar } = useContador(0);
 //const [mensaje, setMensaje]= useState('Catálogo de Empleados');
  return (
    <>
      <div>
      <h1>Vite + React </h1>
        <button type="button" className="btn btn-primary" onClick={incrementar}> count is {contador} </button>
      </div>
      <hr/>
      <IndiceEmpleados/>            
      {/* <MostrarTexto mensaje={contador}/> */}
    </>
  )
}

export default App
