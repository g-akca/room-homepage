import HeroSection from "./components/HeroSection";
import ImageContainer from "./components/ImageContainer";
import TextBlock from "./components/TextBlock";

function App() {
  return (
    <div className="text-base leading-base tracking-base text-grey-500 flex flex-col gap-16">
      <HeroSection />

      <main>
        <ImageContainer />
        <TextBlock />
        <ImageContainer />
      </main>
    </div>
  )
}

export default App;
