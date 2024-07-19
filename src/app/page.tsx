import Image from "next/image";
import NavBar from "./components/NavBar";
import image2 from "../images/2.jpg";

export default function Home() {
  return (
    <div className="scroll-smooth">
      <NavBar />
      <div className="relative w-full h-[100vh] max-md:h-[500px] transition-all duration-300 ease-in-out">
        <Image 
          src={image2} 
          alt="image" 
          layout="fill" 
          objectFit="cover" 
          className="transition-all duration-300 ease-in-out"
        />
      </div>
    </div>
  );
}
