export const MostrarTexto=(props:any)=>{
    return(
        <>
        MOSTRAR TEXTO 
        <p/>
        {props.mensaje}
        <p/>
        <button type="button" className="btn btn-primary" onClick={props.cambiarTexto} > Cambiar Texto </button>
        </>
    );
}