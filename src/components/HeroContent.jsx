import arrowIcon from "/images/icon-arrow.svg";

function HeroContent() {
  return (
    <section className="px-8 flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <h1 className="text-black text-[40px] font-semibold leading-[100%] tracking-[-2px]">Discover innovative ways to decorate</h1>
        <p className="font-medium">
          We provide unmatched quality, comfort, and style for property owners across the country. 
          Our experts combine form and function in bringing your vision to life. Create a room in 
          your own style with our collection and make your property a reflection of you and what you love.
        </p>
      </div>

      <button type="button" className="flex justify-between items-center">
        <span className="text-black text-[15px] font-medium leading-[100%] tracking-[12.5px] uppercase">Shop now</span>
        <img src={arrowIcon} alt="Arrow pointing to right" />
      </button>
    </section>
  )
}

export default HeroContent;