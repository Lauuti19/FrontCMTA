import React from "react";
import Login from "../components/Login";
import "../styles/LoginPage.css"; // Asegúrate de tener este archivo CSS

const LoginPage = () => {
    const handleLogin = () => {
        // Aquí puedes redirigir, mostrar mensaje, etc.
        alert("¡Login exitoso!");
    };

    return (
        <div className="login-page">
            <Login onLogin={handleLogin} />
        </div>
    );
}
export default LoginPage;