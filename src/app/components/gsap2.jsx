import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef } from "react";

const Gsap2 = () => {
  gsap.registerPlugin(ScrollTrigger);

  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const textoRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section2Ref.current,
        start: "start center-=100",
        end: "start+=100 center-=300",
        scrub: 0.1,
        markers: true,
      },
    });
    tl.to(textoRef.current, {
      y: -600,
      x: 400,
    }).to(textoRef.current, {
      x: 0,
      y: 0,
    });
  }, []);

  return (
    <div>
      <section style={{ height: "60vh" }} ref={section1Ref}>
        hola
      </section>
      <section
        style={{ height: "50vh", backgroundColor: "grey" }}
        ref={section2Ref}
      >
        hola
      </section>
      <section style={{ height: "50vh" }}>hola</section>
      <h3 ref={textoRef}>HOLAAAAA</h3>
    </div>
  );
};

export default Gsap2;
