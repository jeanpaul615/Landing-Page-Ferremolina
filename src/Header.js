import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

function Header() {
  // Crear una referencia para el div
  const boxRef = useRef(null);

  // Usar useEffect para iniciar la animación cuando el componente se monta
  useEffect(() => {
    // Animar el div con GSAP
    gsap.fromTo(boxRef.current, 
      { opacity: 0, x: -100 },  // Estado inicial (opacidad 0 y desplazado hacia la izquierda)
      { opacity: 1, x: 0, duration: 1 }  // Final (opacidad 1 y posición final en el centro)
    );
  }, []);  // El arreglo vacío asegura que la animación solo ocurra una vez, al montar

  return (
    <div className="Header">
      <header className="Header-header">
        <div
          ref={boxRef}  // Vinculamos la referencia aquí
          className="w-full h-36 bg-blue-500 flex items-center justify-center"
        >
          <h1 className="text-white text-xl">¡Hola, GSAP!</h1>
        </div>
      </header>
    </div>
  );
}

export default Header;
