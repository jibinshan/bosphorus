"use client";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { useEffect } from "react";

const Contact = ({}) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const splitType = document.querySelectorAll(".contact-head");
    splitType.forEach((char, i) => {
      if (char instanceof HTMLElement) {
        const text = new SplitType(char, { types: "chars" });
        gsap.from(text.chars, {
          scrollTrigger: {
            trigger: char,
            start: "top 80%",
            end: "top 20%",
            scrub: true,
            markers: false,
          },
          opacity: 0.2,
          stagger: 0.2,
        });
      }
    });

    gsap.to(".contact-container", {
      scrollTrigger: {
        trigger: ".contact-container",
        toggleActions: "restart none none none",
      },
      y: -30,
      duration: 1.5,
    });

    // const lenis = new Lenis();

    // lenis.on("scroll", (e) => {
    //   console.log(e, "===e");
    // })

    // const raf = (time: number) => {
    //   lenis.raf(time)
    //   requestAnimationFrame(raf)
    // }
    // requestAnimationFrame(raf)

    // return () => {
    //   lenis.destroy(); // Cleanup Lenis instance to avoid memory leaks
    // };
  }, []);
  return (
    <section
      style={{
        backgroundImage: "url('/images/home/pattern.png')",
        backgroundSize: "contain",
        backgroundPosition: "center",
      }}
      className="flex min-h-[90vh] w-full items-center justify-center px-3 py-12 md:px-0 md:py-24"
    >
      <div className="flex h-full w-full max-w-[1300px] flex-col items-center gap-8">
        <div className="flex w-full flex-col">
          <p className="w-full text-center font-caramel text-xl font-[400] capitalize tracking-[1.76px] text-[#FBEAD2] text-primary">
            Connect with us
          </p>
          <p className="contact-head w-full text-center font-inter text-5xl font-[600] text-[#FFF4E3] md:text-6xl">
            Contact Us
          </p>
        </div>
        <div className="contact-container mt-[30px] flex w-full flex-col gap-5 md:flex-row">
          <div className="flex w-full flex-col items-center justify-center gap-3 rounded-lg border-[1px] border-[#202121] bg-[#0b0c0c] py-12 md:w-1/3">
            <p className="w-full text-center font-inter text-base uppercase tracking-[1.50px] text-[#FBEAD2] md:text-lg">
              Booking request
            </p>
            <Link
              href="tel:+442477350145"
              className="w-full text-center font-inter text-2xl font-[400] text-primary"
            >
              +442477350145
            </Link>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-3 rounded-lg border-[1px] border-[#202121] bg-[#0b0c0c] py-12 md:w-1/3">
            <p className="w-full text-center font-inter text-base font-[500] uppercase tracking-[1.50px] text-[#FBEAD2] md:text-lg">
              Location
            </p>
            <Link
              href="https://maps.app.goo.gl/uAu7pX537zCzNLBL7"
              target="_blank"
              className="w-full text-center font-inter text-sm font-[400] text-[#848484] md:text-base"
            >
              9 Earlsdon St, Earlsdon,
              <br />
              Coventry CV5 6EP, UK
            </Link>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-3 rounded-lg border-[1px] border-[#202121] bg-[#0b0c0c] py-12 md:w-1/3">
            <p className="w-full text-center font-inter text-base font-[500] uppercase tracking-[1.50px] text-[#FBEAD2] md:text-lg">
              Opening Hours
            </p>
            <p className="w-full text-center font-inter text-sm font-[400] text-[#848484] md:text-base">
              Everyday <br />
              11:00 AM - 23:00 PM
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
