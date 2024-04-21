import About from "./components/About";
import Footer from "./components/Footer";
import GetEmailSection from "./components/GetEmailSection";
import Header from "./components/Header";
import HotelMate from "./components/HotelMate";
import Investors from "./components/Investors";
import KeyFeatures from "./components/KeyFeatures";
import Navbar from "./components/Navbar";
import OurApproach from "./components/OurApproach";
import OurTeam from "./components/OurTeam";
import ParterningWithUs from "./components/ParterningWithUs";
import SignupNewsletter from "./components/SignupNewsletter";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Header />
      <About />
      <OurTeam />
      <OurApproach />
      <HotelMate />
      <KeyFeatures />
      <ParterningWithUs />
      <SignupNewsletter />
      <Investors />
      <GetEmailSection />
      <Footer />
    </main>
  );
}
