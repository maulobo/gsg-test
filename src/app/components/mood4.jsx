import React, { useEffect } from "react";

const Mood4 = () => {
  useEffect(() => {
    const video = document.getElementById("videooo");

    window.addEventListener("scroll", () => {
      let pixel = window.scrollY / 1000;

      video.currentTime = pixel;
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
        id="videooo"
        src="video1.mp4"
        style={{
          position: "fixed",
          height: "60vh",
        }}
      ></video>
    </div>
  );
};

export default Mood4;
