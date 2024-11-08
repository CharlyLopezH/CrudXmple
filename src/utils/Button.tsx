export const Button=(props:buttonProps)=>{    
return(
    <button 
    type={props.type}     
    className="btn btn-success"
    onClick={props.onClick}    
    >
        {props.icon && <i className={props.icon} style={{ marginRight: '8px' }}></i>}
        {props.children}
    </button>
)
}

interface buttonProps {
    children:React.ReactNode,
    onClick?():void;
    type?: "button" | "submit";
    icon?: string; 
    color?: string;
}

//Desaparece en futuras versiones
// Button.defaultProps = {
//     type:"button"
// }