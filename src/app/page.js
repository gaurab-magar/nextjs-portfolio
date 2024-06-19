import HeroSection from "./HeroSection";
import Featured from "./Featured";
import About from "./About";
import Contact from "./Contact";
// import Skills from "./Skills";

export default function Home() {
  return (
    <div>
        <HeroSection />
        <Featured />
        <About />
        <Contact />
    </div>
  );
}
