import React from "react";
import ImgColiqueo from "../media/ImgColiqueo.jpg";
import ImgCharla from "../media/5oct.jpeg";
import ImgViamonte from "../media/5nov.jpeg";
import "../styles/About.css"; // Asegúrate de tener este archivo CSS

export default function About() {
  return (
    <div className="comunidad-info">
        <h1>Conoce un poco de nuestro recorrido</h1>
      <h2>
        Los integrantes que conforman la comunidad son descendientes del cacique Ignacio Coliqueo, quienes desde hace años participan activamente en trawün (parlamentos) y otros encuentros, no solo en General Viamonte, sino también en distintas regiones del país.
        <br /><br />
        Desde pequeños, muchos de ellos han incorporado los conocimientos y valores del pueblo mapuche, y hoy buscan aplicarlos y transmitirlos dentro de la comunidad.
      </h2>
      <img src={ImgColiqueo} alt="Ignacio Coliqueo" />
      <h3>
        Ignacio Coliqueo (Boroa, Araucanía, 1786 - Los Toldos, Buenos Aires, 16 de febrero de 1871) fue lonco mapuche boroano y coronel del Ejército Argentino. Su liderazgo y legado son fundamentales para la identidad de la comunidad.
      </h3>
      <h2>
        En 1861, el gobierno nacional otorgó 16.800 hectáreas al cacique Ignacio Coliqueo, lo que dio origen a la creación de la ciudad de Los Toldos, posteriormente renombrada como General Viamonte. Desde entonces, parte de la tribu se asentó en la ciudad, mientras que otros permanecieron en las tierras cedidas, manteniendo vivas las costumbres ancestrales.
        <br /><br />
        Los integrantes de Az Mapu nos hemos reencontrado en nuestro territorio, compartiendo encuentros que fortalecen nuestra espiritualidad y lazos con otras comunidades. Hemos creado espacios de talleres culturales, como telar, tallado en madera, platería, música, alfarería y más, para preservar y difundir nuestra herencia.
      </h2>
      <img src={ImgCharla} alt="Charla sobre saberes ancestrales" />
      <h3>5 de octubre 2023 - Charla sobre los saberes ancestrales</h3>
      <h2>
        Además, la comunidad ha impulsado numerosos trabajos comunitarios, convencidos de que el camino colectivo nos fortalece y nos permite crecer juntos.
        <br /><br />
        Hemos aprendido de nuestros mayores la filosofía de nuestro pueblo y su profunda relación con la naturaleza y el universo. Ahora es nuestro turno de transmitir estos saberes a hijos, nietos y bisnietos, tal como lo hicieron nuestros Kuifi che (ancestros).
        <br /><br />
        Aún queda mucho por aprender y por hacer, ya que nuestra cultura es vasta y nuestros derechos, amplios. Seguimos trabajando para preservar y expandir nuestro legado.
      </h2>
      <img src={ImgViamonte} alt="Día de General Viamonte" />
      <h3>5 de noviembre 2023 - Día de General Viamonte</h3>
      <h2>
        La comunidad continúa creciendo, aprendiendo y compartiendo, con la convicción de que la unión y el respeto por nuestras raíces son el camino hacia un futuro más justo y enriquecedor para todos.
      </h2>
    </div>
  );
}
