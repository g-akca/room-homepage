import arrowIcon from "/images/icon-arrow.svg";

function HeroContent() {
  return (
    <section className="self-center px-8 tablet:px-16 desktop:px-25 flex flex-col gap-8 tablet:gap-6 desktop:grow">
      <div className="flex flex-col gap-4">
        <h1 className="text-black text-[40px] tablet:text-[48px] font-semibold leading-[100%] tablet:leading-[90%] tracking-[-2px]">
          Discover innovative ways to decorate
        </h1>
        <p className="font-medium">
          We provide unmatched quality, comfort, and style for property owners across the country. 
          Our experts combine form and function in bringing your vision to life. Create a room in 
          your own style with our collection and make your property a reflection of you and what you love.
        </p>
      </div>

      <button type="button" className="flex justify-between items-center tablet:justify-start tablet:gap-6 desktop:gap-8">
        <span className="text-black text-[15px] font-medium leading-[100%] tracking-[12.5px] uppercase">Shop now</span>
        <img src={arrowIcon} alt="Arrow pointing to right" />
      </button>
    </section>
  )
}

export default HeroContent;