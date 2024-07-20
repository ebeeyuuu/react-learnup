import NavBar from "./components/NavBar";
import Hero from "./components/LandingPage/Hero";
import Why from "./components/LandingPage/Why";

export default function Home() {
  return (
    <div className="scroll-smooth">
      <NavBar />
      <Hero />
      <Why />
    </div>
  );
}
