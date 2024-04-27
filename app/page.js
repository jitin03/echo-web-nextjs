import Image from "next/image";
import Hero from "./components/Hero";
import ContactSection from "./components/ContactSection";
import UseCase from "./components/UseCase";

export default function Home() {
  return (
    <main>
      <div>
        <div className="hero">
          <Hero />
        </div>
        <div className="contact">
          <ContactSection />
        </div>
        <div className="usecase">
          <UseCase />
        </div>
      </div>
    </main>
  );
}
