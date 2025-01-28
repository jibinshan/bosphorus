"use client";
import { Icons } from "@/components/Icon";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Lenis from "lenis";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import Image from "next/image";
import { cn } from "@/lib/utils";

const Menu = ({}) => {
  const [mouse, setMouse] = useState<string>("");
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".title", {
      scrollTrigger: {
        trigger: ".title",
        toggleActions: "restart none none none",
        // start: "top 80%", // When the top of the .title enters 80% of the viewport
        // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
        // scrub: true
      },
      x: 30,
      duration: 1.5,
    });
    const splitType = document.querySelectorAll(".head");
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

    gsap.to(".menu-description", {
      scrollTrigger: {
        trigger: ".menu-description",
        toggleActions: "restart none none none",
      },
      y: -50,
      duration: 1.5,
    });
    gsap.to(".menu-button", {
      scrollTrigger: {
        trigger: ".menu-button",
        toggleActions: "restart none none none",
      },
      y: -50,
      duration: 1.5,
    });

    gsap.to(".menu-images", {
      scrollTrigger: {
        trigger: ".menu-images",
        toggleActions: "restart none none none",
      },
      scale: 1,
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
    <section className="relative flex h-full w-full flex-col items-center justify-center gap-4 overflow-hidden py-12 pl-0 md:gap-8 md:py-24 lg:pr-8">
      <div className="flex w-full flex-col items-center justify-center gap-3">
        <h3 className="title -ml-[50px] font-caramel text-xl uppercase text-primary">
          Explore menu
        </h3>
        <h1 className="head font-oswald max-w-[500px] text-center text-6xl font-bold sm:text-7xl">
          Bosphorus
          <br />
          <span className="text-primary">Menu</span>
        </h1>
      </div>
      <div className="flex w-full max-w-[1300px] flex-col items-center justify-center gap-2 md:flex-row md:justify-between md:gap-6">
        <div className="container relative flex w-full flex-col items-center justify-center md:w-1/3">
          <div
            className="relative h-fit w-fit overflow-hidden"
            onMouseEnter={() => setMouse("1")}
            onMouseLeave={() => setMouse("")}
          >
            <Image
              src="/images/home/image.png"
              width={444}
              height={598}
              alt="image"
              className="menu-images w-full md:h-[500px]"
              style={{
                transform: "scale(0.8)",
              }}
            />
            <div
              className={cn("hidden", mouse === "1" && "overlay flex")}
            ></div>
          </div>
          <div className="absolute bottom-8 z-10 flex h-fit w-full flex-col items-center justify-center gap-4">
            <p className="font-oswald w-full text-center text-3xl font-bold text-[#FBEAD2]">
              Meat Platters
            </p>
            <Link href="/menu" className="text-lg text-[#D5A859]">
              View Menu
            </Link>
          </div>
        </div>
        <div className="relative flex w-full flex-col items-center justify-center md:w-1/3">
          <div
            className="relative h-fit w-fit overflow-hidden"
            onMouseEnter={() => setMouse("2")}
            onMouseLeave={() => setMouse("")}
          >
            <Image
              src="/images/home/image2.png"
              width={444}
              height={598}
              alt="image"
              className="menu-images w-full md:h-[500px]"
              style={{
                transform: "scale(0.8)",
              }}
            />
            <div
              className={cn("hidden", mouse === "2" && "overlay flex")}
            ></div>
          </div>
          <div className="absolute bottom-8 z-10 flex h-fit w-full flex-col items-center justify-center gap-4">
            <p className="font-oswald w-full text-center text-3xl font-bold text-[#FBEAD2]">
              Mocktails
            </p>
            <Link href="/menu" className="text-lg text-[#D5A859]">
              View Menu
            </Link>
          </div>
        </div>
        <div className="relative flex w-full flex-col items-center justify-center md:w-1/3">
          <div
            className="relative h-fit w-fit overflow-hidden"
            onMouseEnter={() => setMouse("3")}
            onMouseLeave={() => setMouse("")}
          >
            <Image
              src="/images/home/image3.png"
              width={444}
              height={598}
              alt="image"
              className="menu-images w-full md:h-[500px]"
              style={{
                transform: "scale(0.8)",
              }}
            />
            <div
              className={cn("hidden", mouse === "3" && "overlay flex")}
            ></div>
          </div>
          <div className="absolute bottom-8 z-10 flex h-fit w-full flex-col items-center justify-center gap-4">
            <p className="font-oswald w-full text-center text-3xl font-bold text-[#FBEAD2]">
              Vegetarian Dishes
            </p>
            <Link href="/menu" className="text-lg text-[#D5A859]">
              View Menu
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
