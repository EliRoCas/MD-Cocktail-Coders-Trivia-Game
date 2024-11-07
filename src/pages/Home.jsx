import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/home.css'; 

const Home = () => {
    const [showRules, setShowRules] = useState(false); // Estado para controlar la visibilidad de las reglas
    const navigate = useNavigate();

    // Función para mostrar/ocultar las reglas del juego
    const handleToggleRules = () => {
        setShowRules(prevShowRules => !prevShowRules); // Cambia el estado para mostrar u ocultar
    };

    return (
        <div>
            <h1>Bienvenido </h1>
            <button onClick={() => navigate('/trivia')}>Game Start</button>
            <button onClick={handleToggleRules}>
                {showRules ? 'Ocultar Reglas' : 'Reglas del juego'}
            </button>
            
            {showRules && (
                <div className="rules">
                    <h2>Reglas del Juego</h2>
                    <ul>
                        <li>Regla 1:   Cada jugador debe tener su bebida lista.</li>
                        <li>Regla 2:   El jugador debe adivinar el cóctel.</li>
                        <li>Regla 3:   El jugador deberá girar la ruleta de premios y castigos.</li>
                        <li>Regla 4:   El jugador deberá hacer lo que la ruleta indica.</li>

                        <li>Repite el proceso hasta que todo el mundo esté satisfecho.</li>
                        <li>¡Diviértete y bebe con responsabilidad!</li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Home;