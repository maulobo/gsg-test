import Lenis from "@studio-freight/lenis";
import React, { useRef, useEffect } from "react";

const Mood5 = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", (e) => {
      console.log(video.currentTime);
      videoRef.currentTime = e.animate.to / 1000;
      console.log();
    });
  }, []);

  return (
    <div
      style={{
        height: "3000vh",
      }}
    >
      <video
        controls
        ref={videoRef}
        src="video2.mp4"
        style={{
          position: "fixed",
          width: "100%",
          height: "30vh",
        }}
      ></video>
    </div>
  );
};

export default Mood5;
