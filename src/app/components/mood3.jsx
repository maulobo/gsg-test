import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Cloudinary } from "@cloudinary/url-gen";

import React, { useEffect, useState } from "react";
gsap.registerPlugin(ScrollTrigger);

import { fetchAssetInfo } from "./file";

function imageSequence(config) {
  let playhead = { frame: 0 },
    ctx = gsap.utils.toArray(config.canvas)[0].getContext("2d"),
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
  const [imageUrl, setImageUrl] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchAssetInfo();

      setImageUrl(data);
    };
    fetchData();
  }, []);
  console.log(imageUrl);

  useEffect(() => {
    if (imageUrl.length > 0) {
      console.log("llego bien rey");
      let frameCount = 100,
        urls = imageUrl;
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
  }, [imageUrl]);

  return (
    <div>
      <div className="h-screen"></div>
      <canvas id="image-sequence" width="1158" height="770"></canvas>
    </div>
  );
};

export default Mood3;
