import { BrowserRouter, Route, Routes} from "react-router-dom";
import { CrearEmpleado } from "./CrearEmpleado";
import { IndiceEmpleados } from "./IndiceEmpleados";
import "./styles.css";
import { Menu } from "./utils/Menu";

function App() {
  //ejemplo de como usar un hook personalizado:

  return (
    <>
      <div>
        <Menu/>
      </div>
      <hr />
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndiceEmpleados />} />
        <Route path="/empleados/crear" element={<CrearEmpleado />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
