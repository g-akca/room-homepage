import Header from "./Header";
import HeroContent from "./HeroContent";

function HeroSection() {
  return (
    <section className="flex flex-col gap-16">
      <Header />

      <HeroContent />
    </section>
  )
}

export default HeroSection;