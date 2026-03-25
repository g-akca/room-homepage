import ImageContainer from "./ImageContainer";
import TextBlock from "./TextBlock";

import darkImg from "/images/image-about-dark.jpg";
import lightImg from "/images/image-about-light.jpg";

function MainSection() {
  return (
    <main className="flex flex-col gap-12 tablet:gap-16 desktop:flex-row desktop:gap-0 desktop:h-66.5">
      <ImageContainer src={darkImg} alt="Dark furniture in a dark room" className="w-full tablet:h-75 desktop:h-full desktop:w-105" />
      <TextBlock />
      <ImageContainer src={lightImg} alt="White chair on a white background" className="w-full tablet:h-60.75 desktop:grow desktop:h-full" />
    </main>
  )
}

export default MainSection;