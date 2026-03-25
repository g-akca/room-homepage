import HeroSection from "./components/HeroSection";
import MainSection from "./components/MainSection";
import Menu from "./components/Menu";

import { useState } from "react";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="text-base leading-base tracking-base text-grey-500 min-h-screen flex flex-col gap-16 desktop:gap-0">
      <HeroSection openMenu={() => setIsMenuOpen(true)} />

      <MainSection />

      {isMenuOpen && 
        <Menu closeMenu={() => setIsMenuOpen(false)} />
      }
    </div>
  )
}

export default App;
