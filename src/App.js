import Header from "./Header/Index";
import Body from './Home/Index';
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function App() {
  const boxRef = useRef(null);

  useEffect(() => {
    // Animación al montar el componente
    gsap.fromTo(
      boxRef.current,
      { opacity: 0, x: -100 },
      { opacity: 1, x: 0, duration: 1 }
    );
  }, []);
  return (
    <div ref={boxRef}>
        <Header />    
        <Body />
    </div>
  )
}
