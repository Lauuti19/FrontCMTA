import React from "react";
import "../styles/Contact.css";
//<div className="contacto-campo">
//        <h2>Horario de atención</h2>
//        <p>
//          Lunes a Viernes de 9:00 a 17:00 hs
//          <br />
//          Sábados de 10:00 a 13:00 hs
//        </p>
//      </div>

export default function ContactoInfo() {
  return (
    <section className="contacto-info">
      <header>
        <h1>Contacto y Ubicación</h1>
        <p>
          Si tienes dudas, sugerencias o deseas conocer más sobre nuestra
          comunidad, no dudes en comunicarte con nosotros. Estamos para escucharte
          y acompañarte.
        </p>
      </header>

      <div className="contacto-datos">
        <div className="contacto-campo">
          <h2>Teléfono de contacto</h2>
          <p>
            <span role="img" aria-label="teléfono">
              📞
            </span>{" "}
            <strong>+54 9 2358 40-3807</strong>
            <br />
            <span className="contacto-nombre">Emma Cayuqueo</span>{" "}
            <span className="contacto-rol">(Lonco de nuestra comunidad)</span>
          </p>
        </div>

        <div className="contacto-campo">
          <h2>Correo electrónico</h2>
          <p>
            <span role="img" aria-label="email">
              ✉️
            </span>{" "}
            <a
              href="mailto:comunidad.azmapu@gmail.com"
              className="contacto-link"
            >
              cayuqueoemma@outlook.com
            </a>
          </p>
        </div>

        <div className="contacto-campo">
          <h2>Redes sociales</h2>
          <p>
            Puedes visitar nuestro Facebook mediante este enlace
            &nbsp;
            <a
  href="https://www.facebook.com/emma.cayuqueo"
  className="contacto-link"
  target="_blank"
  rel="noopener noreferrer"
>
  haciendo click aquí
</a>

            .
          </p>
        </div>
      </div>

      <div className="contacto-campo">
        <h2>Dirección (De nuestra Lonco)</h2>
        <p>
          <span role="img" aria-label="ubicación">
            📍
          </span>{" "}
          Mariano Moreno 138, entre Argerich y Monteagudo
          <br />
          General Viamonte (Los Toldos), Buenos Aires, Argentina
        </p>
      </div>

      

      <div className="contacto-campo">
        <h2>¿Cómo llegar?</h2>
        <div className="contacto-mapa">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2747.90708650767!2d-61.03906651026901!3d-35.010943950294184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzXCsDAwJzM5LjUiUyA2McKwMDInMjEuMSJX!5e0!3m2!1ses-419!2sar!4v1710518079072!5m2!1ses-419!2sar"
            width="420"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación Comunidad"
          ></iframe>
        </div>
      </div>

      <footer className="contacto-footer">
        <p>
          <strong>
            ¡Te esperamos para compartir, aprender y crecer juntos!
          </strong>
        </p>
      </footer>
    </section>
  );
}
