import React from "react";
import '../styles/Titles.css';

const HomeTitle = () => {
    return (
        <div className="home-title">
            <h3>Bienvenido a nuestra Comunidad Indígena </h3>
            <h1>Mapuche Tehuelche Azmapu</h1>
            <h4>De Los Toldos</h4>
            <p>Aqui podras encontrar todo lo que necesites de nosotros</p>
        </div>
    );
}

const CalendarTitle = () => {
    return (
        <div className="calendar-title">
            <h1>Calendario de Eventos</h1>
        </div>
    );
}
const AboutTitle = () => {
    return (
        <div className="about-title">
            <h1>Sobre Nosotros</h1>
        </div>
    );
}
const ContactTitle = () => {
    return (
        <div className="contact-title">
            <h1>Contactanos</h1>
        </div>
    );
}
const UploadNewsTitle = () => {
    return (
        <div className="upload-title">
            <h1>Subir Noticias</h1>
        </div>
    );
}
export { HomeTitle, CalendarTitle, AboutTitle, ContactTitle, UploadNewsTitle };