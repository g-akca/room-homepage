import ImageContainer from "./ImageContainer";
import TextBlock from "./TextBlock";

import darkImg from "/images/image-about-dark.jpg";
import lightImg from "/images/image-about-light.jpg";

function MainSection() {
  return (
    <main className="flex flex-col gap-12 tablet:gap-16">
      <ImageContainer src={darkImg} alt="Dark furniture in a dark room" className="tablet:h-75" />
      <TextBlock />
      <ImageContainer src={lightImg} alt="White chair on a white background" className="tablet:h-60.75" />
    </main>
  )
}

export default MainSection;