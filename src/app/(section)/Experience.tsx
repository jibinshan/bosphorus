"use client";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { useEffect } from "react";

const Experience = ({}) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".experience-title", {
      scrollTrigger: {
        trigger: ".experience-title",
        toggleActions: "restart none none none",
        // start: "top 80%", // When the top of the .title enters 80% of the viewport
        // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
        // scrub: true
      },
      x: 52,
      duration: 1.5,
    });
    const splitType = document.querySelectorAll(".head-experience");
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

    gsap.to(".experience-description", {
      scrollTrigger: {
        trigger: ".experience-description",
        toggleActions: "restart none none none",
      },
      y: -10,
      duration: 2,
    });

    gsap.to(".experience-container", {
      scrollTrigger: {
        trigger: ".experience-container",
        toggleActions: "restart none none none",
      },
      x: 50,
      stagger: 1.5,
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
    <section className="relative flex h-full max-w-[1400px] flex-col items-center justify-center gap-7 bg-[#000000] px-7 py-10 lg:px-24 lg:py-20">
      <div className="z-10 flex h-full w-full flex-col gap-5">
        <h3 className="experience-title -ml-[50px] w-full text-center font-caramel text-xl uppercase text-primary">
          we offer
        </h3>
        <h1 className="head-experience font-oswald w-full text-center text-4xl font-bold sm:text-7xl lg:leading-[80px]">
          Unforgettable
          <br />
          Dining <span className="text-primary">Experience</span>
        </h1>
      </div>
      <div className="hidden w-0 lg:flex lg:w-full lg:flex-col lg:gap-7">
        <div className="experience-container relative -ml-[50px] w-full rounded-3xl">
          <div className="absolute left-0 top-0 z-10 h-full w-full bg-black/30"></div>
          <Image
            src="/images/home/food2.jpeg"
            width={1600}
            height={1066}
            alt="side-close-up"
            className="h-[564px] w-full rounded-lg object-cover md:rounded-none"
          />

          <div className="absolute bottom-7 left-3 z-20 flex flex-col gap-3 lg:bottom-28 lg:left-24 lg:gap-12">
            <h1 className="font-inter text-2xl font-extrabold text-[#FFF4E3] lg:text-6xl">
              Food
            </h1>
            <p className="max-w-[350px] font-roboto text-xs font-[400] tracking-[0.50px] text-[#FBEAD2] lg:max-w-[500px] lg:text-lg">
              Our food is a tribute to authentic flavors, crafted with the
              finest ingredients and a passion for tradition. Each dish is
              prepared with care, bringing a taste of rich culinary heritage to
              your table.
            </p>
          </div>
        </div>

        <div className="experience-container relative -ml-[50px] w-full rounded-3xl">
          <div className="absolute left-0 top-0 z-10 h-full w-full bg-black/20"></div>
          <Image
            src="/images/home/drinks2.jpeg"
            width={1600}
            height={1066}
            alt="side-close-up"
            className="h-[550px] w-full rounded-lg object-cover md:rounded-none"
          />
          <div className="absolute bottom-7 left-3 z-20 flex flex-col gap-3 lg:bottom-28 lg:left-24 lg:gap-12">
            <h1 className="font-inter text-2xl font-extrabold text-[#FFF4E3] lg:text-6xl">
              Drinks
            </h1>
            <p className="max-w-[350px] font-roboto text-xs font-[400] tracking-[0.50px] text-[#FBEAD2] lg:max-w-[500px] lg:text-lg">
              Discover a selection of expertly crafted drinks, designed to
              complement every meal with rich, refreshing flavors. From
              signature cocktails to fine wines, each sip enhances the dining
              experience, bringing a perfect balance to your palate.{" "}
            </p>
          </div>
        </div>
        <div className="experience-container relative -ml-[50px] w-full rounded-3xl">
          <div className="absolute left-0 top-0 z-10 h-full w-full bg-black/50"></div>
          <Image
            src="/images/home/atmosphere2.jpg"
            width={3412}
            height={1934}
            alt="side-close-up"
            className="h-[550px] w-[1300px] rounded-lg object-cover md:rounded-none"
          />
          <div className="absolute bottom-7 left-3 z-20 flex flex-col gap-3 lg:bottom-28 lg:left-24 lg:gap-12">
            <h1 className="font-inter text-2xl font-extrabold text-[#FFF4E3] lg:text-6xl">
              Atmosphere
            </h1>
            <p className="max-w-[350px] font-roboto text-xs font-[400] tracking-[0.50px] text-[#FBEAD2] lg:max-w-[500px] lg:text-lg">
              Step into an atmosphere that blends warmth and elegance, designed
              to make every guest feel at home. With carefully curated decor and
              inviting lighting, our space sets the perfect backdrop for a
              memorable dining experience.
            </p>
          </div>
        </div>
      </div>

      <div className="flex w-full flex-col gap-7 lg:hidden lg:h-0 lg:w-0">
        <div className="experience-container relative -ml-[50px] w-full rounded-3xl">
          <div className="absolute left-0 top-0 z-10 h-full w-full bg-black/50"></div>
          <Image
            src="/images/home/food2.jpeg"
            width={1600}
            height={1066}
            alt="side-close-up"
            className="h-auto w-full rounded-lg md:rounded-none"
          />
          <div className="absolute left-0 top-0 z-20 flex h-full w-full items-center justify-center gap-3 lg:bottom-28 lg:left-24 lg:gap-12">
            <h1 className="font-oswald text-3xl font-extrabold">Food</h1>
            {/* <p className="max-w-[320px] text-md">Our food is a tribute to authentic flavors, crafted with the finest ingredients and a passion for tradition. Each dish is prepared with care, bringing a taste of rich culinary heritage to your table.</p> */}
          </div>
        </div>
        <div className="experience-container relative -ml-[50px] w-full rounded-3xl">
          <div className="absolute left-0 top-0 z-10 h-full w-full bg-black/50"></div>
          <Image
            src="/images/home/drinks2.jpeg"
            width={1600}
            height={1066}
            alt="side-close-up"
            className="h-auto w-full rounded-lg md:rounded-none"
          />
          <div className="absolute left-0 top-0 z-20 flex h-full w-full items-center justify-center gap-3 lg:bottom-28 lg:left-24 lg:gap-12">
            <h1 className="font-oswald text-3xl font-extrabold">Drinks</h1>
            {/* <p className="max-w-[320px] text-md ">Discover a selection of expertly crafted drinks, designed to complement every meal with rich, refreshing flavors. From signature cocktails to fine wines, each sip enhances the dining experience, bringing a perfect balance to your palate.</p> */}
          </div>
        </div>
        <div className="experience-container relative -ml-[50px] w-full rounded-3xl">
          <div className="absolute left-0 top-0 z-10 h-full w-full bg-black/60"></div>
          <Image
            src="/images/home/atmosphere2.jpg"
            width={3412}
            height={1934}
            alt="side-close-up"
            className="h-auto w-full rounded-lg md:rounded-none"
          />
          <div className="absolute left-0 top-0 z-20 flex h-full w-full items-center justify-center gap-3 lg:bottom-28 lg:left-24 lg:gap-12">
            <h1 className="font-oswald text-3xl font-extrabold">Atmosphere</h1>
            {/* <p className="max-w-[320px] text-md">Step into an atmosphere that blends warmth and elegance, designed to make every guest feel at home. With carefully curated decor and inviting lighting, our space sets the perfect backdrop for a memorable dining experience.</p> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
