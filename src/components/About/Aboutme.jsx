import React, { useEffect, useRef } from "react";
import Headertest from "../Header/Headertest";
import { useAuth } from "../Security/Authcontext";
import Footer2 from "../Footer/Footer2";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Aboutme() {
  const authContext = useAuth();
  const mode = authContext.mode;
  const aboutRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".animate", {
        opacity: 0,
        y: 50,
        duration: 1.2,
        stagger: 0.4,
        ease: "power3.out",
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 80%",
        },
      });
    }, aboutRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className={`${mode && "dark"}`} ref={aboutRef}>
      {/* Header */}
      <div className={`${mode && "dark"}`}>
        <Headertest />
      </div>
      {/* Header ends here*/}

      {/* About me section */}
      <div className="dark:bg-slate-900">
        <div className="pt-[150px] h-auto md:w-10/12 m-auto flex-wrap md:flex md:pb-[80px]">
          <div className="flex justify-center animate">
            <img
              className="w-10/12 rounded-2xl md:w-[450px] md:h-[400px] shadow-lg"
              src="/img/photo.jpg"
              alt="Om Tamang"
              loading="lazy"
            />
          </div>

          <div className="text-slate-700 vsm:text-sm font-poppins w-10/12 md:w-6/12 m-auto text-center md:text-left dark:text-slate-200 animate">
            <div className="font-poppins text-3xl font-semibold text-slate-600 text-center md:text-left pt-4 dark:text-slate-300">
              <p>About Me</p>
            </div>

            <p className="pt-4 md:text-lg leading-relaxed">
              Hello! I'm Om, a dedicated <b>React</b> and <b>Spring Boot</b> developer
              with a passion for building intuitive and engaging <b>web applications</b>.
              With experience in <b>full-stack development</b>, I strive to bridge the gap
              between ideas and reality through clean and efficient code.
            </p>

            <p className="pt-4 md:text-lg leading-relaxed">
              I enjoy solving challenging problems and bringing impactful solutions to life.
              Inspired by the vibrant culture and challenges of my home country, <b>Nepal</b>,
              I aim to make technology accessible and meaningful for everyone.
            </p>

            <p className="pt-4 md:text-lg leading-relaxed">
              Beyond programming, I am an avid traveler who loves exploring new places,
              meeting people, and soaking in the diverse stories each city offers. Whether
              it’s coding or discovering hidden gems, I am always ready for the next adventure.
            </p>
          </div>
        </div>
      </div>
      {/* About me section ends here*/}

      {/* Footer */}
      <div>
        <Footer2 />
      </div>
    </div>
  );
}
