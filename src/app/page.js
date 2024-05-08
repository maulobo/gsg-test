"use client";
import Lenis from "@studio-freight/lenis";
// import Mood1 from "./components/mood1";
import Mood2 from "./components/mood2";
import Mood3 from "./components/mood3";
import Mood4 from "./components/mood4";
import Mood5 from "./components/mood5";
import ScrollVideo from "./components/mood5";
import { useEffect } from "react";
import Gsap from "./components/gsap";
import Gsap2 from "./components/gsap2";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", (e) => {});

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <main>
      {/* <Mood1 /> */}
      <Mood2 />
      {/* <Mood3 /> */}
      {/* <Mood4 /> */}
      {/* <Mood5 /> */}
      {/* <ScrollVideo /> */}
      {/* <Gsap /> */}
      {/* <Gsap2 /> */}
    </main>
  );
}
