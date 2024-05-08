"use client";
import React, { useEffect, useRef, useState } from "react";

export default function Mood1() {
  const videoRef = useRef();
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Obtén la altura total del contenido
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      // Obtén la posición actual del scroll
      const scrollPosition = window.scrollY;

      // Calcula el progreso del scroll como un valor entre 0 y 1
      const progress = scrollPosition / totalHeight;

      // Actualiza el estado del progreso del scroll
      setScrollProgress(progress);
    };

    // Agrega el listener de scroll al montar el componente
    window.addEventListener("scroll", handleScroll);

    // Elimina el listener de scroll al desmontar el componente
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Obtén la duración total del video (en segundos)
    const videoDuration = videoRef.current.duration;

    // Calcula la posición del video basándote en el progreso del scroll
    const targetTime = scrollProgress * videoDuration;

    // Establece la posición del video
    videoRef.current.currentTime = targetTime;
  }, [scrollProgress]);

  return (
    <div style={{ height: "300vh", position: "sticky" }}>
      <h1>hola</h1>
      <video ref={videoRef} src="/video.mp4"></video>
    </div>
  );
}
