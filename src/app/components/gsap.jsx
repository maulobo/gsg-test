import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef } from "react";

const Gsap = () => {
  gsap.registerPlugin(ScrollTrigger);

  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(section1Ref.current, {
      x: 500,
      ease: "bounce",
      duration: 3,
    }).to(
      section2Ref.current,
      {
        x: 500,
      },
      "<2"
    );
  }, []);

  return (
    <div>
      <section ref={section1Ref}>hola</section>
      <section ref={section2Ref}>hola</section>
      <section ref={section3Ref}>hola</section>
    </div>
  );
};

export default Gsap;
