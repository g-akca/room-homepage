import Header from "./Header";
import HeroContent from "./HeroContent";

function HeroSection({ openMenu }) {
  return (
    <section className="flex flex-col gap-16">
      <Header openMenu={openMenu} />

      <HeroContent />
    </section>
  )
}

export default HeroSection;