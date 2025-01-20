import Cabecera from "components/Cabecera/Cabecera";
import Pie from "components/Pie/Pie";
import Inicio from "pages/inicio";
import Registro from "pages/Registro/Registro";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function AppRoutes() {
    return(
        <BrowserRouter>
        <Cabecera/>
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/Registro" element={<Registro />} />
            </Routes>
        <Pie/>
        </BrowserRouter>
    )
}
export default AppRoutes;