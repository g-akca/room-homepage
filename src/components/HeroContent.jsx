import arrowIcon from "/images/icon-arrow.svg";

function HeroContent({ getCurrentDesign }) {
  const design = getCurrentDesign();

  return (
    <section className="self-center px-8 tablet:px-16 desktop:px-25 flex flex-col gap-8 tablet:gap-6 desktop:grow">
      <div className="flex flex-col gap-4">
        <h1 className="text-black text-[40px] tablet:text-[48px] font-semibold leading-[100%] tablet:leading-[90%] tracking-[-2px]">
          {design.title}
        </h1>
        <p className="font-medium">
          {design.subtext}
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