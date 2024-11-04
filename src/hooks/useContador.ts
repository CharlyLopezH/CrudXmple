import { useState } from "react";

export const useContador=(inicial:number)=>{
    const [contador, setContador] = useState(inicial);
  
    const incrementar = () => setContador(contador + 1);
    //const decrementar = () => setContador(contador - 1);
    //const reiniciar = () => setContador(inicial);
  
    return { contador, incrementar };
  }
  
  //export default useContador;