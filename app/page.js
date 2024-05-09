"use client";
import Image from "next/image";
import Hero from "./components/Hero";
import ContactSection from "./components/ContactSection";
import UseCase from "./components/UseCase";
import { useEffect, useState } from "react";

export default function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    // Function to update scroll position
    const updateScrollPosition = () => {
      setScrollPosition(window.scrollY);
    };

    // Add scroll event listener
    window.addEventListener("scroll", updateScrollPosition);

    // Clean up
    return () => {
      window.removeEventListener("scroll", updateScrollPosition);
    };
  }, []);
  return (
    <main>
      <div>
        <div className="hero blur-effect" id="hero">
          <Hero />
        </div>
        <div className="contact" id="contact">
          <ContactSection />
        </div>
        <div className="usecase" id="usecase">
          <UseCase />
        </div>
      </div>
    </main>
  );
}
