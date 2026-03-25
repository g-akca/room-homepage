import HeroSection from "./components/HeroSection";
import MainSection from "./components/MainSection";
import Menu from "./components/Menu";

function App() {
  return (
    <div className="text-base leading-base tracking-base text-grey-500 flex flex-col gap-16">
      <HeroSection />

      <MainSection />

      <Menu />
    </div>
  )
}

export default App;
