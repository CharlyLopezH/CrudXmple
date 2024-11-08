//Indice de Empleados con buena práctica de manejo de endpoint variable; 
//Explica una operación GET desde el api renderizada en una tabla.
//
//Se crea un DTO exactamente igual al DTO utilizado en el API; que es usado para
//Se obtiene la respuesta esperada del Axios; pero la url ya no está harcodeada,
//Se obtiene a través de variables de entorno o de ambiente
//# Con Vite (archivo .env.development)
// VITE_APP_API_URL=https://localhost:7093/api (En este ejemplo se usa VITE)
//#Para app creada con create app
//# REACT_APP_API_URL=https://localhost:7093/api


import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { empleadoDTO } from "./models/empleados.model";
import { urlEmpleados } from "./utils/endpoints";



export const IndiceEmpleados = () => {
  const [empleados, setEmpleados] = useState<empleadoDTO[]>();  

  useEffect(() => {
    axios
      .get(urlEmpleados)
      .then((respuesta: AxiosResponse<empleadoDTO[]>) => {
        console.log(respuesta.data);
        setEmpleados(respuesta.data);
      })
      .catch((error) => console.error("Error al obtener datos", error));
  }, []);

  return (
    <>
      <div className="container">
      <h4>Crud Empleados</h4>
      <h4>Prototipo Permisos</h4>
      <p/>
        <code>Tabla de Datos de Empleados</code>
        <table className="table table-striped table-sm table-hover smaller-font">
          <thead className="table-info">
            <tr>
              <th>ID</th>
              <th>Código</th>
              <th>Nombres</th>
              <th>Primer Ap.</th>
               <th>Segundo Ap.</th>
              <th>F. Nac.</th>
              <th>Email</th>
              <th>Foto</th>
              <th>Sexo</th>
              <th>T. Nom.</th>
              <th>Activo</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {empleados?.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.codigo}</td>
                <td>{item.nombres}</td>
                <td>{item.primerAp}</td>
                <td>{item.segundoAp}</td>
                <td>{item.fechaNacimiento}</td>
                <td>{item.email}</td>
                <td>
                  <img src={item.foto} alt="img no disponible..." width="50" height="50" />
                </td> 
                <td>{item.sexo}</td>
                <td>{item.tipoNombramiento}</td>
                <td>{item.activo ? "Sí" : "No"}</td>
                <td>
                  <button 
                  className="btn btn-primary margin-right-rem smaller-button"
                  onClick={()=>{alert('Editar...')}}>
                    <i className="bi bi-pencil-square"></i>
                  </button>
                  <button 
                  className="btn btn-danger smaller-button" 
                  onClick={()=>{alert('click en Borrar...')}} > 
                  <i className="bi bi-trash"></i> 
                  </button>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <hr />
    </>
  );
};
//Ejemplo de como pasar props usando interfases
// interface indiceEmpleadosProps {
//     titulo:string
// }
