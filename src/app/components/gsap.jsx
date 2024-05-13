import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import "./style.css";

import React, { useEffect, useState } from "react";
gsap.registerPlugin(ScrollTrigger);

function imageSequence(config) {
  let playhead = { frame: 0 },
    ctx = gsap.utils.toArray(config.canvas)[0].getContext("2d"),
    onUpdate = config.onUpdate,
    images,
    updateImage = function () {
      ctx.drawImage(
        images[Math.round(playhead.frame)],
        0,
        0,
        ctx.canvas.width,
        ctx.canvas.height
      );
      onUpdate && onUpdate.call(this);
    };
  images = config.urls.map((url, i) => {
    let img = new Image();
    img.src = url;

    i || (img.onload = updateImage);

    return img;
  });

  return gsap.to(playhead, {
    frame: images.length - 1,
    ease: "none",
    onUpdate: updateImage,
    scrollTrigger: config.scrollTrigger,
  });
}

const Mood = () => {
  const imagesTot = require.context("../assets/prueba", true);
  const imageUrls = imagesTot.keys().map((item) => imagesTot(item).default.src);

  useEffect(() => {
    if (imageUrls.length > 0) {
      let frameCount = 100,
        urls = imageUrls;

      imageSequence({
        urls,
        canvas: "#image-sequence",
        scrollTrigger: {
          start: 0,
          end: "max",
          scrub: true,
          markers: true,
        },
      });
    }
  }, [imageUrls]);

  return (
    <div>
      <div className="h-screen"></div>

      <canvas
        id="image-sequence"
        height={800}
        width={1000}
        className="canvass"
      ></canvas>

      <div className="h-screen"></div>
    </div>
  );
};

export default Mood;
