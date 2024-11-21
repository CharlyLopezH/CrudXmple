import { ErrorMessage, Field } from "formik"
import { MostrarErrorCampo } from "./MostrarErrorCampo";

export const FormGroupText=(props: formGroupTextProps)=>{

    return(
        <>
            <div className="form-group">
             {props.label ?  <label htmlFor={props.campo} style={{ maxWidth: '100%' }}>{props.label}</label> : null}
                <Field name={props.campo} className="form-control"/>
                <ErrorMessage name={props.campo}>{mensaje => 
                 <MostrarErrorCampo mensaje={mensaje}/>
                }</ErrorMessage>            
            </div>
        </>

    )
}

interface formGroupTextProps{
    campo: string;
    label?: string;
    placeholder?:string;
}

