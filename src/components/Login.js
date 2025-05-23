// Login.js
import React, { useState } from "react";
const USER = { username: "Emma", password: "Mapuches2025" };

export default function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === USER.username && password === USER.password) {
      onLogin();
      localStorage.setItem("loggedIn", "true");
      window.location.reload(); // <-- Recarga la página
    } else {
      setError("Usuario o contraseña incorrectos");
    }
  };

  return (
    <div className="login-container">
      <h1 className="login-title">Iniciar Sesión</h1>
      <form onSubmit={handleSubmit} className="FormLogin">
        <label>
          Usuario
          <input
            value={username}
            onChange={e => setUsername(e.target.value)}
            placeholder="Usuario"
            autoComplete="username"
            className="login-input"
          />
        </label>
        <label>
          Contraseña
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Contraseña"
            autoComplete="current-password"
            className="login-input"
          />
        </label>
        <button type="submit" className="login-btn">Ingresar</button>
        {error && <div className="login-error">{error}</div>}
      </form>
    </div>

  )
}