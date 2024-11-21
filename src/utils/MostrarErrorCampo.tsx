export const MostrarErrorCampo=(props: mostrarErrorCampoProps)=>{

    return(
        <div>
            <div className="text-danger">{props.mensaje}</div>
        </div>
    )
}

interface mostrarErrorCampoProps {
    mensaje: string;

}