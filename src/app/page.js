"use client";

import Mood from "./components/gsap";
export default function Home() {
  // useEffect(() => {
  //   const lenis = new Lenis();

  //   lenis.on("scroll", (e) => {});

  //   function raf(time) {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   }

  //   requestAnimationFrame(raf);
  // }, []);
  return (
    <main>
      <Mood />
    </main>
  );
}
