"use client";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";
import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

const Hero = ({}) => {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(".head-container", 1.5, {
      y: 50,
      opacity: 1,
      ease: "power4.out",
    })
      .from(".head-hero", 1, {
        x: 160,
        opacity: 0,
        delay: -0.5,
      })
      .from(".hero-button", 1, {
        y: 100,
        opacity: 0,
        ease: "power4.out",
        delay: -0.5,
      });
  }, []);
  return (
    <section id="hero" className="flex w-full items-center justify-center">
      <div className="relative flex min-h-[100vh] w-full items-center justify-center bg-black">
        <div className="absolute left-0 top-0 z-10 h-full w-full bg-black/20"></div>
        <div className="absolute left-0 top-0 h-full w-full overflow-hidden">
          <video
            className="min-h-full min-w-full object-cover"
            style={{ objectPosition: "center" }}
            src="/video/home/hero.mp4"
            autoPlay
            loop
            muted
            playsInline
            // poster="https://foodo-web-videos.s3.eu-west-2.amazonaws.com/istanbul-liverpool-banner.png"
          ></video>
        </div>
        <div className="z-40 flex h-[100vh] w-full items-center justify-center">
          <div className="head-container flex w-fit flex-col items-center justify-center gap-7">
            <h1 className="md:head-hero font-oswald text-center text-4xl font-semibold text-[#fff4e3] sm:text-5xl md:text-8xl lg:leading-[110px]">
              Experience the <br /> Authentic Turkish
              <br /> Mangal Restaurant
            </h1>
            <Link href="/menu">
              <Button className="hero-button flex items-center justify-center gap-3 rounded-none px-8 py-8 text-[#282828] hover:bg-secondary hover:text-black">
                View Menu <MoveRight className="text-[#282828]" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
