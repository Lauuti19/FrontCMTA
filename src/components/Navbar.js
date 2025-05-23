import React from "react";
import '../styles/Navbar.css';

const baseOptions = [
  "Pagina principal",
  "Calendario de Eventos",
  "Sobre Nosotros",
  "Contactanos",
  "Ingresar"
];

const Navbar = ({ selected, onSelect, loggedIn }) => {
  let options = [...baseOptions];
  if (loggedIn) {
    options.splice(options.length - 1, 0, "Subir Noticias");
    options[options.length - 1] = "Salir Sesión";
  }

  return (
    <nav className="main-nav">
      <div className="nav-links">
        {options.map(option => (
          <React.Fragment key={option}>
            <a
              href="#"
              className={selected === option ? "active" : ""}
              onClick={e => {
                e.preventDefault();
                onSelect(option);
              }}
            >
              {option}
            </a>
            {/* separador */}
          </React.Fragment>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;