"use client";
import { Icons } from "@/components/Icon";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Sidebar from "./SideBar";
import CartSheet from "./cart/CartSheet";
import { BetaMenuActive } from "@/lib/constants";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

const Navbar = ({
  position = "static",
}: {
  position?: "static" | "fixed" | "absolute";
}) => {
  const pathname = usePathname();

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.getElementById("hero")?.offsetHeight ?? 0;
      setIsScrolled(window.scrollY > heroHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={cn(
        `${position} top-0 z-50 flex h-[12vh] w-full flex-col items-center bg-transparent py-2 transition-all duration-0 ease-in-out md:py-0`,
        isScrolled && "bg-black",
      )}
    >
      <div className="flex w-full flex-col items-center gap-2">
        <div
          className={cn(
            "mb-2 flex w-full justify-between border-white/30 md:border-b md:px-10 md:py-4",
            (isScrolled || pathname !== "/") && "hidden",
          )}
        >
          <div className="hidden flex-row items-center gap-2 md:flex md:gap-4">
            <Link
              href="https://maps.app.goo.gl/uAu7pX537zCzNLBL7"
              target="_blank"
              className="flex items-center gap-2 text-sm text-white md:text-sm"
            >
              <MapPin className="text-[#fa771f]" />9 Earlsdon St, Earlsdon,
              Coventry
            </Link>
            <p className="flex items-center gap-2 text-sm text-white md:text-sm">
              <Clock className="text-[#fa771f]" />
              Everyday: 11:00 AM - 23:00 PM
            </p>
          </div>
          <div className="hidden flex-row items-center gap-2 md:flex md:gap-4">
            <Link
              href="tel:+442477350145"
              target="_blank"
              className="flex items-center gap-2 text-sm text-white md:text-sm"
            >
              <Phone className="text-[#fa771f]" />
              +442477350145
            </Link>
            <Link
              href="mailto:reservations@istanbulrestaurantmanchester.co.uk"
              target="_blank"
              className="flex items-center gap-2 text-sm text-white md:text-sm"
            >
              <Mail className="text-[#fa771f]" />
              reservations@istanbulrestaurantmanchester.co.uk{" "}
            </Link>
          </div>
        </div>
        <div className="flex h-full w-full items-center justify-between px-2 md:px-20">
          <Link href="/" className="md:hidden">
            <Image src="/images/logo.png" width={188} height={56} alt="logo" />
          </Link>
          <div className="ml-[8%] flex w-full items-center justify-center">
            <div className="hidden flex-row items-center justify-center gap-[4.5rem] md:flex">
              <Button
                asChild
                variant="link"
                className="px-0 uppercase text-accent"
              >
                <Link href="/">Home</Link>
              </Button>
              <Button
                asChild
                variant="link"
                className="px-0 uppercase text-accent"
              >
                <Link href="/menu">Menu</Link>
              </Button>
              <Link href="/">
                <Image
                  src="/images/logo.png"
                  width={180}
                  height={52}
                  alt="logo"
                />
              </Link>
              <Button
                asChild
                variant="link"
                className="px-0 uppercase text-accent"
              >
                <Link href="/about-us">About</Link>
              </Button>
              <Button
                asChild
                variant="link"
                className="px-0 uppercase text-accent"
              >
                <Link href="/contact">Contact</Link>
              </Button>
              {/* <Button
              asChild
              variant="link"
              className="px-0 uppercase text-accent"
            >
              <Link href="/table-booking">Table Booking</Link>
            </Button> */}
              {/* <Button
              asChild
              variant="link"
              className="px-0 uppercase text-accent"
            >
              <Link href="/gift-voucher">Gift Voucher</Link>
            </Button> */}
            </div>
          </div>
          <div className="hidden items-center justify-center gap-[2.5rem] md:flex">
            {pathname !== "/" && (
              <CartSheet>
                <Button
                  variant="ghost"
                  className="px-1 py-1 hover:bg-transparent"
                  disabled={!BetaMenuActive}
                >
                  <span className="sr-only">Shopping Cart</span>
                  <Icons.shoppingCart />
                </Button>
              </CartSheet>
            )}
            <Link href="/table-booking">
              <Button
                className="group h-12 items-center gap-[1.19rem] rounded-none bg-primary px-5 py-7 font-semibold uppercase text-[#282828] hover:bg-primary"
                variant="secondary"
              >
                Book A Table
                <Icons.rightArrow className="text-[#282828] duration-300 ease-in-out group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
          <Sidebar>
            <Button
              variant="ghost"
              className="px-1 py-1 text-primary hover:bg-transparent hover:text-primary md:hidden"
            >
              <span className="sr-only">Menu</span>
              <EqualizerIcon />
            </Button>
          </Sidebar>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

const EqualizerIcon: React.FC = () => {
  return (
    <div className="equalizer-icon rotate">
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
    </div>
  );
};
