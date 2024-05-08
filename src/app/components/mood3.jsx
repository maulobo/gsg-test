import React, { useEffect, useRef, useState } from "react";

function imageSequence(config) {
  let playhead = { frame: 0 },
    ctx = gsap.toArray(config.canvas),
    onUpdate = config.onUpdate,
    images,
    updateImage = function () {
      ctx.drawImage(images[Math.round(playhead.frame)], 0, 0);
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

const Mood3 = () => {
  let frameCount = 147,
    urls = new Array(frameCount)
      .fill()
      .map(
        (o, i) =>
          `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${(i + 1).toString().padStart(4, "0")}.jpg`
      );
  const img = imageSequence({
    urls, // Array of image URLs
    canvas: "#image-sequence", // <canvas> object to draw images to
    scrollTrigger: {
      start: 0, // start at the very top
      end: "max", // entire page
      scrub: true, // important!
    },
  });

  return (
    <>
      <div>
        <canvas id="image-sequence" width="1158" height="770" />
      </div>
    </>
  );
};

export default Mood3;
