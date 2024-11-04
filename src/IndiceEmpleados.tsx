import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { empleadoDTO } from "./models/empleados.model";

export const IndiceEmpleados = () => {
  const [empleados, setEmpleados] = useState<empleadoDTO[]>();

  useEffect(() => {
    axios
      .get("https://localhost:7093/api/empleados")
      .then((respuesta: AxiosResponse<empleadoDTO[]>) => {
        console.log(respuesta.data);
        setEmpleados(respuesta.data);
      })
      .catch((error) => console.error("Error al obtener datos", error));
  }, []);

  return (
    <>
      <h4>Crud Empleados</h4>
      <code>Prototipo Permisos</code>
      <div>
        <h2>Tabla de Datos de Empleados</h2>
        <table className="table table-striped table-sm table-hover ">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Código</th>
              <th>Nombres</th>
              <th>Primer Apellido</th>
               <th>Segundo Apellido</th>
              <th>Fecha de Nacimiento</th>
              <th>Email</th>
              <th>Foto</th>
              <th>Sexo</th>
              <th>Tipo Nombramiento</th>
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
                  <button className="btn btn-primary mr-10">Editar</button>
                  <button className="btn btn-danger sm">Borrar</button>
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
