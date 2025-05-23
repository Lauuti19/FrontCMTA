import React, { useState } from "react";
import { UploadNewsTitle } from "../components/Titles";
import "../styles/UploadNewsPage.css";

const SubirNoticiasPage = () => {
  const [titulo, setTitulo] = useState("");
  const [imagen, setImagen] = useState(""); // Aquí irá el Base64
  const [pie, setPie] = useState("");

  // Convierte la imagen a Base64
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagen(reader.result); // Base64 string
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const noticia = { titulo, imagen, pie };

    const response = await fetch("https://bdcmta.alwaysdata.net/api.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(noticia),
    });

    const data = await response.json();
    if (data.success) {
      alert("¡Noticia subida exitosamente!");
      setTitulo("");
      setImagen("");
      setPie("");
    } else {
      alert("Error al subir la noticia: " + (data.message || "Desconocido"));
    }
  };

  return (
    <div className="subir-noticias-page">
      <UploadNewsTitle />
      <form onSubmit={handleSubmit} className="subir-noticias-form">
        <div>
          <label>Título:</label>
          <input
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Imagen:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            required
          />
          {imagen && (
            <img
              src={imagen}
              alt="Previsualización"
              style={{ maxWidth: 200, marginTop: 10 }}
            />
          )}
        </div>
        <div>
          <label>Pie de noticia:</label>
          <textarea
            value={pie}
            onChange={(e) => setPie(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">Subir Noticia</button>
      </form>
    </div>
  );
};
export default SubirNoticiasPage;