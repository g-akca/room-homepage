import ImageContainer from "./ImageContainer";
import TextBlock from "./TextBlock";

import darkImg from "/images/image-about-dark.jpg";
import lightImg from "/images/image-about-light.jpg";

function MainSection() {
  return (
    <main className="flex flex-col gap-12">
      <ImageContainer src={darkImg} />
      <TextBlock />
      <ImageContainer src={lightImg} />
    </main>
  )
}

export default MainSection;