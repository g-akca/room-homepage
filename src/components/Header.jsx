import menuIcon from "/images/icon-hamburger.svg";
import logo from "/images/logo.svg";
import leftIcon from "/images/icon-angle-left.svg";
import rightIcon from "/images/icon-angle-right.svg";

function Header({ openMenu, getCurrentDesign, setPrevIndex, setNextIndex }) {
  const isTablet = window.innerWidth >= 768;
  const design = getCurrentDesign();

  return (
    <header 
      className={`
        relative h-90 tablet:h-100 desktop:h-auto px-6 tablet:px-16 py-12 desktop:p-16  
        bg-cover bg-center desktop:w-210 desktop:shrink-0`
      }
      style={{
        backgroundImage: `url(/room-homepage/images/${isTablet ? design.desktopImgUrl : design.mobileImgUrl})`
      }}
    >
      <nav>
        <div className="grid grid-cols-3 desktop:flex desktop:gap-14">
          <button type="button" onClick={openMenu} className="cursor-pointer desktop:hidden">
            <img src={menuIcon} alt="Menu icon" />
          </button>
          
          <img src={logo} alt="Room logo" className="justify-self-center" />

          <ul className="hidden desktop:flex lowercase text-white font-semibold leading-[100%] tracking-[-0.7px] gap-8">
            <li><a href="#">Home</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        <div className="absolute bottom-0 right-0 flex desktop:-right-40">
          <button type="button" onClick={setPrevIndex} className="bg-black w-14 h-14 tablet:w-20 tablet:h-20 flex justify-center items-center">
            <img src={leftIcon} alt="Left arrow" className="cursor-pointer w-2.5 tablet:w-3.5" />
          </button>
          <button type="button" onClick={setNextIndex} className="bg-black w-14 h-14 tablet:w-20 tablet:h-20 flex justify-center items-center">
            <img src={rightIcon} alt="Right arrow" className="cursor-pointer w-2.5 tablet:w-3.5" />
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Header;