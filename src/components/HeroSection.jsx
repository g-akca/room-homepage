import { useState } from "react";
import Header from "./Header";
import HeroContent from "./HeroContent";

function HeroSection({ openMenu }) {
  const [designIndex, setDesignIndex] = useState(0);

  function setPrevIndex() {
    return designIndex > 0 ? setDesignIndex(prev => prev - 1) : setDesignIndex(designs.length - 1);
  }

  function setNextIndex() {
    return designIndex !== designs.length - 1 ? setDesignIndex(prev => prev + 1) : setDesignIndex(0);
  }

  function getCurrentDesign() {
    return designs[designIndex];
  }

  const designs = [
    {
      mobileImgUrl: "mobile-image-hero-1.jpg",
      desktopImgUrl: "desktop-image-hero-1.jpg",
      title: "Discover innovative ways to decorate",
      subtext: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love."
    },
    {
      mobileImgUrl: "mobile-image-hero-2.jpg",
      desktopImgUrl: "desktop-image-hero-2.jpg",
      title: "We are available all across the globe",
      subtext: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
    },
    {
      mobileImgUrl: "mobile-image-hero-3.jpg",
      desktopImgUrl: "desktop-image-hero-3.jpg",
      title: "Manufactured with the best materials",
      subtext: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
    }
  ]

  return (
    <section className="grow flex flex-col desktop:flex-row gap-16 desktop:gap-0 desktop:h-133.5">
      <Header openMenu={openMenu} getCurrentDesign={getCurrentDesign} setPrevIndex={setPrevIndex} setNextIndex={setNextIndex} />

      <HeroContent getCurrentDesign={getCurrentDesign} />
    </section>
  )
}

export default HeroSection;