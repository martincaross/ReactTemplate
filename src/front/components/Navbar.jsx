import { NavLink } from "react-router-dom";
import logo from "../assets/img/beacon-sinfondo.png";

const menuItems = [
  { name: "Datos Básicos", path: "/datos-basicos" },
  { name: "Empleo", path: "/empleo" },
  { name: "Características de las Secciones", path: "/caracteristicas" },
  { name: "Informes", path: "/informes" },
  { name: "Actividad Turística", path: "/actividad-turistica" },
];

export const Navbar = () => {
  return (
    <nav style={{ backgroundColor: "#007bff", width: "100%" }}>
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "2rem",
          padding: "1rem 0",
          color: "white",
          fontWeight: "bold",
        }}
      >
        {menuItems.map(({ name, path }) => (
          <NavLink
            key={path}
            to={path}
            style={({ isActive }) => ({
              color: isActive ? "#ffd700" : "white",
              textDecoration: "none",
              paddingBottom: "0.25rem",
              borderBottom: isActive ? "2px solid #ffd700" : "none",
            })}
          >
            {name}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};
