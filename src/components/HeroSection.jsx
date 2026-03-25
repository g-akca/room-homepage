import Header from "./Header";
import HeroContent from "./HeroContent";

function HeroSection({ openMenu }) {
  return (
    <section className="flex flex-col desktop:flex-row gap-16 desktop:gap-0 desktop:h-133.5">
      <Header openMenu={openMenu} />

      <HeroContent />
    </section>
  )
}

export default HeroSection;