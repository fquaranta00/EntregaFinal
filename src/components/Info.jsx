import React from 'react'

const Info = () => {
    return (
        <div className="info-container">
            <header className="info-header">Información del Proyecto</header>
            <p>
                Este proyecto fue desarrollado por {" "}
                <a
                    href="https://www.linkedin.com/in/ingfernandoquaranta/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Fernando Quaranta
                </a> como parte del curso de React impartido
                por el profesor Omar Manías en CoderHouse. En esta página, se utilizaron
                todos los recursos y conocimientos aprendidos en el curso.
            </p>
            <p>
                Puede encontrar el código fuente completo en el repositorio de{" "}
                <a
                    href="https://github.com/fquaranta00"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    GitHub
                </a>
                .
            </p>
        </div>
    );
};

export default Info