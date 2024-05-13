"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function Mood1() {
  const videoRef = useRef(null);
  const ref1 = useRef();

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const videoDuration = videoRef.current.duration;

    gsap.to(videoRef.current, {
      currentTime: videoDuration,
      scrollTrigger: {
        trigger: videoRef.current,
        markers: true,
        start: "top top", // vw vs ct
        end: "bottom+=1000 top",
        scrub: 1,
        pin: true,
      },
    });
  }, {});

  return (
    <div>
      <div ref={ref1} style={{ height: "100vh" }}>
        <video controls={false} ref={videoRef} src="/video.mp4"></video>
        <div style={{ height: "100vh" }}></div>
      </div>
    </div>
  );
}
