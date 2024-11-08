import { useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik"
import { Button } from "./utils/Button"

export const CrearEmpleado=()=>{
    const navigate = useNavigate();
    return(
        <>
        <div className="class container">
        <h4>Crear Empleado</h4>
        <hr/>
        <Formik initialValues={{
            codigo:'',
            nombre:'',
            apPaterno:'',
            apMaterno:'',
        }}
        onSubmit={values=>{console.log(values)}}
        >
        <Form>
            <div className="form-group">

            <label htmlFor="codigo" style={{ maxWidth: '100%' }}>Código:</label>
            <Field name="codigo" className="form-control" style={{ width: '20%'}}/>

            <div style={{ display: 'flex', gap: '5px', width: '100%' }}>

            <div style={{ flex: '1' }}>
                <label htmlFor="nombre">Nombre:</label>
                <Field name="nombre" className="form-control" />
            </div>

            <div style={{ flex: '1' }}>
                <label htmlFor="ApPaterno">Ap. Paterno:</label>
                <Field name="ApPaterno" className="form-control" />
            </div>

            <div style={{ flex: '1' }}>
                <label htmlFor="ApMaterno">Ap. Materno:</label>
                <Field name="ApMaterno" className="form-control" />
            </div>
            </div>

            <label htmlFor="fNac" style={{ maxWidth: '100%' }}>Fecha de Nacimiento:</label>
            <Field name="fNac" className="form-control" style={{ width: '100%'}}/>

            <label htmlFor="eMail" style={{ maxWidth: '100%' }}>Email:</label>
            <Field name="eMail" className="form-control" style={{ width: '100%'}}/>

            <label htmlFor="foto" style={{ maxWidth: '100%' }}>Foto:</label>
            <Field name="foto" className="form-control" style={{ width: '100%'}}/>

            <label htmlFor="sexo" style={{ maxWidth: '100%' }}>Sexo:</label>
            <Field name="sexo" className="form-control" style={{ width: '100%'}}/>

            <label htmlFor="tNombramiento" style={{ maxWidth: '100%' }}>T. Nombramiento:</label>
            <Field name="tNombramiento" className="form-control" style={{ width: '100%'}}/>

            <label htmlFor="activo" style={{ maxWidth: '100%' }}>Activo:</label>
            <Field name="activo" className="form-control" style={{ width: '100%'}}/>

            

            </div>

            <Button onClick={() => {navigate('/')}} type={"button"} icon="bi bi-floppy2">                
                Salvar
            </Button>            
        </Form>
        </Formik>
        </div>
        </>
    )
}