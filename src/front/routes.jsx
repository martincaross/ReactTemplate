import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { Feed } from "./pages/Feed";
import { Actividad_Turistica } from "./pages/Actividad_Turistica";
import { Caracteristicas_Secciones } from "./pages/Caracteristicas_Secciones";
import { Datos_Basicos } from "./pages/Datos_Basicos";
import { Empleo } from "./pages/Empleo";
import { Informes } from "./pages/Informes";

// import { Loader } from "./components/Loader";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<h1>Not found!</h1>}>
      <Route path="/datos_basicos" element={<Datos_Basicos />} />
      <Route path="/empleo" element={<Empleo />} />
      <Route path="/informes" element={<Informes />} />
      <Route path="/actividad_turistica" element={<Actividad_Turistica />} />
      <Route path="/caracteristicas_secciones" element={<Caracteristicas_Secciones />} />
      {/* <Route path="home" element={<Home />} />         */}
    </Route>
  )
);

