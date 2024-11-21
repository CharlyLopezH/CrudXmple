import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button } from "./utils/Button";
import * as Yup from "yup";
import { FormGroupText } from "./utils/FormGroupText";

export const CrearEmpleado = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="class container">
        <h4>Crear Empleado</h4>
        <hr />
        <Formik
          initialValues={{
            codigo: "",
            nombre: "",
            apPaterno: "",
            apMaterno: "",
          }}
          onSubmit={(values) => {
            console.log(values);
          }}
          validationSchema={Yup.object({
            codigo: Yup.number().required("El código es requerido").integer("Debe ser numérico").positive("No puede ser cero o negativo"),
            ApPaterno: Yup.string().required("El Apellido Paterno es Requerido"),
          })}
        >
          <Form>
            <div style={{ display: "flex", gap: "5px", width: "100%" }}>
              <div style={{ flex: "1" }}>
                <FormGroupText campo="codigo" label="Código" />
              </div>

              <div style={{ flex: "1" }}>
                <FormGroupText campo="ApPaterno" label="Apellido Paterno" />
              </div>

              <div style={{ flex: "1" }}>
                <FormGroupText campo="ApMaterno" label="Apellido Materno:" />
              </div>
            </div>

            <FormGroupText campo="fNac" label="Fecha de Nacimiento:" />

            <FormGroupText campo="eMail" label="Email:" />

            <FormGroupText campo="foto" label="Foto:" />

            <FormGroupText campo="sexo" label="Sexo:" />

            <FormGroupText
              campo="tNombramiento"
              label="Tipo de Nombramiento:"
            />

            <FormGroupText campo="activo" label="Activo:" />

            {/* <Button onClick={() => {navigate('/')}} type={"button"} icon="bi bi-floppy2">                 */}
            <Button
              onClick={() => {
                console.log("onclick");
              }}
              type={"button"}
              icon="bi bi-floppy2"
            >
              Salvar
            </Button>
          </Form>
        </Formik>
      </div>
    </>
  );
};
