import React, { useState, useEffect } from "react";
import { BrowserRouter as Router} from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import CalendarPage from "./pages/CalendarPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import LoginPage from "./pages/LoginPage";
import SubirNoticiasPage from "./pages/SubirNoticiasPage";
import "./App.css";
import "./styles/SlideTransition.css";

const pageMap = {
  "Pagina principal": <HomePage />,
  "Calendario de Eventos": <CalendarPage />,
  "Sobre Nosotros": <AboutPage />,
  "Contactanos": <ContactPage />,
  "Ingresar": <LoginPage />,
  "Subir Noticias": <SubirNoticiasPage />,
};

function App() {
  const [selected, setSelected] = useState("Pagina principal");
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    // Mantén el login si está en localStorage
    setLoggedIn(localStorage.getItem("loggedIn") === "true");
  }, []);

  const handleLogin = () => {
    setLoggedIn(true);
    localStorage.setItem("loggedIn", "true");
  };

  const handleSelect = (option) => {
    if (option === "Salir Sesión") {
      setLoggedIn(false);
      localStorage.removeItem("loggedIn");
      setSelected("Pagina principal");
    } else {
      setSelected(option);
    }
  };

  return (
    <Router>
      <Header></Header>
      <div>
        <Navbar
          selected={selected}
          onSelect={handleSelect}
          loggedIn={loggedIn}
        />
        <div>{pageMap[selected]}</div>
      </div>
    </Router>
  );
}

export default App;
