import React from 'react';
import bg from "../assets/Home/bg-video4.mp4";

export default function Body() {
  const scrollToContent = () => {
    document.getElementById('content-section').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='relative w-full h-screen'>
      <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover">
        <source src={bg} type="video/mp4" />
      </video>
      <div className="relative grid place-items-center w-full h-full text-white">
        <h1 className="text-4xl sm:text-6xl font-bold font-anton text-center pt-20">DISTRIBUCIONES FERREMOLINA</h1>
        <h1 className="text-xl sm:text-2xl font-bold text-yellow-400 font-anton text-center mt-12 sm:-mt-12 md:mb-60 mb-96">
          Nuestros sueños no son negociables
        </h1>
      </div>
      {/* Botón SVG en la esquina derecha */}
      <button 
        onClick={scrollToContent}
        className="absolute bottom-64 right-12 p-2 bg-yellow-400 rounded-full hover:bg-yellow-500 transition-all">
        {/* SVG de una flecha hacia abajo */}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-white">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div id="content-section" className="h-screen bg-gray-800 text-white flex justify-center items-center">
        {/*contenido componente*/}
      </div>
    </div>
  );
}
