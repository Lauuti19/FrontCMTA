import React from "react";
import eventos from "./CalendarEvents";
import "../styles/Calendario.css";

const meses = [
  "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
];

export default function Calendario() {
  const hoy = new Date();
  const mesActual = meses[hoy.getMonth()];
  const hoyMesDia = hoy.toISOString().slice(5, 10); // "MM-DD"

  // Filtra eventos cuyo mes/día es igual o posterior a hoy (ignora el año)
  const eventosFuturos = eventos.filter(e => e.fecha.slice(5, 10) >= hoyMesDia);

  const eventoProximo = eventosFuturos.length > 0
    ? eventosFuturos.reduce((a, b) => (a.fecha.slice(5, 10) < b.fecha.slice(5, 10) ? a : b))
    : null;

  return (
    <div className="calendario">
      <h1>{hoy.getFullYear()}</h1>
      <hr />
      {eventoProximo && (
        <div className="evento-proximo">
          <h2>Evento mas Próximo</h2>
          <div className="calendario-evento destacado">
            <h3>
              {new Date(eventoProximo.fecha).toLocaleDateString("es-AR", { day: "numeric", month: "long" })} - {eventoProximo.titulo}
            </h3>
            <h4>{eventoProximo.descripcion}</h4>
          </div>
        </div>
      )}
      {meses.map(mes => {
        const color = eventos.find(e => e.mes === mes)?.color || "#ccc";
        const eventosMes = eventos.filter(e => e.mes === mes);
        if (eventosMes.length === 0) return null;
        return (
          <div key={mes} className="calendario-mes">
            <div
              className="calendario-mes-titulo"
              style={{
                background: color,
                opacity: mes === mesActual ? 1 : 0.7
              }}
            >
              {mes}
            </div>
            <div className="calendario-eventos">
              {eventosMes.map(e => (
                <div className="calendario-evento" key={e.titulo + e.fecha}>
                  <h3>
                    {new Date(e.fecha).toLocaleDateString("es-AR", { day: "numeric", month: "long" })} - {e.titulo}
                  </h3>
                  <h4>{e.descripcion}</h4>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}