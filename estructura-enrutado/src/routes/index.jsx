
import Drunkapp from "views/Drunkapp/Drunkapp.jsx";
import Galeria from "views/Galeria/Galeria.jsx";
import Promociones from "views/Promociones/Promociones.jsx";
import Servicios from "views/Servicios/Servicios.jsx";
import Locales from "views/Locales/Locales.jsx";
import Contacto from "views/Contacto/Contacto.jsx";
import Inicio from "views/Inicio/Inicio.jsx";

var indexRoutes = [
  
  { path: "/drunk-app", name: "Drunkapp", component: Drunkapp },
  { path: "/galeria", name: "Galeria", component: Galeria },
  { path: "/promociones", name: "Promociones", component: Promociones },
  { path: "/servicios", name: "Servicios", component: Servicios },
  { path: "/locales", name: "Locales", component: Locales },
  { path: "/contacto", name: "Contacto", component: Contacto },  
  { path: "/", name: "Inicio", component: Inicio },
];

export default indexRoutes;
