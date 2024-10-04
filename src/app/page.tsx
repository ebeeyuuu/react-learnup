import NavBar from "./components/NavBar";
import Hero from "./components/LandingPage/Hero";
import Why from "./components/LandingPage/Why";
import HowItWorks from "./components/LandingPage/HowItWorks";

export default function Home() {
  return (
    <div className="scroll-smooth">
      <NavBar />
      <Hero />
      <Why />
      <HowItWorks />
    </div>
  );
}
