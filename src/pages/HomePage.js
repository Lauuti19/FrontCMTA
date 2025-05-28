import React, { useEffect, useState } from "react";
import '../styles/HomePage.css';
import { HomeTitle } from "../components/Titles";

const HomePage = () => {
  const [noticia, setNoticia] = useState(null);

  useEffect(() => {
    fetch("https://bdcmta.alwaysdata.net/api.php")
      .then(res => res.json())
      .then(data => {
        if (data && data.length > 0) {
          setNoticia(data[0]); // Muestra la noticia más reciente
        }
      });
  }, []);

  return (
    <div>
      <HomeTitle />
      <div className="home-content">
        <div className="Seccion-Izquierda">
          <div className="Noticias">
            <h1>Ultimas Actualizaciones</h1>
            <h2>{noticia ? noticia.titulo : "Cargando Noticia..."}</h2>
            {noticia && noticia.imagen ? (
              noticia.imagen.startsWith("data:video") ? (
                <video controls autoPlay loop muted style={{ width: '100%' }}>
                  <source src={noticia.imagen} type="video/mp4" />
                  Tu navegador no soporta videos.
                </video>
              ) : (
                <img src={noticia.imagen} alt="Imagen de la noticia" />
              )
            ) : (
              <img src={require('../news/web.jpg')} alt="Imagen por defecto" />
            )}
            <p>{noticia ? noticia.pie : "Cargando..."}</p>
          </div>
        </div>
        <div className="Seccion-Derecha">
          <div className="Proximamente1">
            <h1>Proximamente</h1>
            <div className="Proximamente1-Texto">
            <p>Tenemos como objetivo a futuro
            la creacion de una radio digital
            para que sean capaces de saber y participar con nosotros</p>
            <p>Usaremos este apartado para su pronta implementacion</p>
            </div>  
          </div>
          <div className="Proximamente2">
            <h1>Canciones</h1>
            <p>Contamos con una cancion disponible en Youtube de la mano de Carrina Carriqueo</p>
            <iframe src="https://www.youtube.com/embed/0YeySmGb3Q0?si=xRjfIYceRfrOpxyw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomePage;