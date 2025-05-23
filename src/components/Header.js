import React from "react";
import '../styles/Header.css'; 
import LogoMapuche from '../media/image.png';
const Header = () => { 
    return (
        <div>
            <header id="main-header">
  <div className="logo-container">
    <img src={LogoMapuche} alt="Logo Comunidad Indígena" height="100" />
  </div>
  <div className="header-text">
    <h2>Comunidad Indígena</h2>
    <h1>Mapuche Tehuelche Azmapu</h1>
  </div>
</header>
        </div>
    )
    }
export default Header;