import React, { useEffect, useRef } from "react";
import { gsap, Expo, Quint } from "gsap";

const Header3D = ({ banners = [], sideImage }) => {
  const contentRef = useRef(null);
  const carouselRef = useRef(null);
  const itemsRef = useRef([]);
  const radiusRef = useRef(0);
  const addX = useRef(0);
  const mouse = useRef({ x: 0, y: 0, z: 0 });

  const fpsCounter = {
    times: [],
    span: 20,
    tick() {
      this.times.push(Date.now());
      if (this.times.length > this.span + 1) {
        this.times.shift();
        const seconds = (this.times.at(-1) - this.times[0]) / 1000;
        return Math.round(this.span / seconds);
      }
      return null;
    },
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    const items = itemsRef.current;
    const itemLength = items.length;
    const rY = 360 / itemLength;
    const radius = Math.round(300 / Math.tan(Math.PI / itemLength));
    radiusRef.current = radius;

    gsap.set(contentRef.current, { perspective: 1000 });
    gsap.set(carousel, { z: -radius });

    items.forEach((item, i) => {
      const inner = item.querySelector(".carouselItemInner");
      gsap.set(item, {
        rotationY: rY * i,
        z: radius,
        transformOrigin: `50% 50% ${-radius}px`,
      });
      animateIn(item, inner);
    });

    const onMouseMove = (e) => {
      mouse.current.x = -(-(window.innerWidth * 0.5) + e.pageX) * 0.0025;
      mouse.current.y = -(-(window.innerHeight * 0.5) + e.pageY) * 0.01;
      mouse.current.z = -radius - (Math.abs(-(window.innerHeight * 0.5) + e.pageY) - 200);
    };

    window.addEventListener("mousemove", onMouseMove);

    const interval = setInterval(() => {
      addX.current += mouse.current.x;
      gsap.to(carousel, {
        duration: 1,
        rotationY: addX.current,
        rotationX: mouse.current.y,
        ease: Quint.easeOut,
      });
      gsap.set(carousel, { z: mouse.current.z });
    }, 1000 / 60);

    return () => {
      clearInterval(interval);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  const animateIn = (item, block) => {
    const nrX = 360 * getRandomInt(2);
    const nrY = 360 * getRandomInt(2);
    const nx = -2000 + getRandomInt(4000);
    const ny = -2000 + getRandomInt(4000);
    const nz = -4000 + getRandomInt(4000);
    const s = 1.5 + getRandomInt(10) * 0.1;
    const d = 1 - getRandomInt(8) * 0.1;

    gsap.set(item, { autoAlpha: 1, delay: d });
    gsap.set(block, {
      z: nz,
      rotationY: nrY,
      rotationX: nrX,
      x: nx,
      y: ny,
      autoAlpha: 0,
    });
    gsap.to(block, {
      duration: s,
      delay: d,
      rotationY: 0,
      rotationX: 0,
      z: 0,
      ease: Expo.easeInOut,
    });
    gsap.to(block, {
      duration: s - 0.5,
      delay: d,
      x: 0,
      y: 0,
      autoAlpha: 1,
      ease: Expo.easeInOut,
    });
  };

  const getRandomInt = (n) => Math.floor(Math.random() * n + 1);

  return (
    <div className="w-full py-6 px-4 flex justify-center items-center bg-gray-100">
      <div className="w-full max-w-[1440px] flex justify-center items-center gap-4 md:gap-8">
        {/* Left White Box */}
        <div
          className="hidden md:flex w-[200px] h-[200px] bg-white rounded-2xl shadow-md bg-cover bg-center"
          style={{ backgroundImage: `url(${sideImage})` }}
        ></div>

        {/* 3D Carousel */}
        <div
          ref={contentRef}
          className="w-full md:w-auto flex justify-center items-center"
        >
          <section
            ref={carouselRef}
            className="relative w-[300px] h-[300px] trans3d"
          >
            {banners.map((img, index) => (
              <figure
                key={index}
                ref={(el) => (itemsRef.current[index] = el)}
                className="carouselItem absolute top-1/2 left-1/2 w-[140px] h-[140px] -translate-x-1/2 -translate-y-1/2"
              >
                <div
                  className="carouselItemInner w-full h-full bg-cover bg-center rounded-xl shadow-xl"
                  style={{ backgroundImage: `url(${img})` }}
                />
              </figure>
            ))}
          </section>
        </div>

        {/* Right White Box */}
        <div
          className="hidden md:flex w-[200px] h-[200px] bg-white rounded-2xl shadow-md bg-cover bg-center"
          style={{ backgroundImage: `url(${sideImage})` }}
        ></div>
      </div>
    </div>
  );
};

export default Header3D;
