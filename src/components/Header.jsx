import menuIcon from "/images/icon-hamburger.svg";
import logo from "/images/logo.svg";
import leftIcon from "/images/icon-angle-left.svg";
import rightIcon from "/images/icon-angle-right.svg";

import NavList from "./NavList";

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
      <div>
        <div className="grid grid-cols-3 desktop:flex desktop:gap-14">
          <button type="button" onClick={openMenu} className="cursor-pointer desktop:hidden">
            <img src={menuIcon} alt="Menu icon" />
          </button>
          
          <img src={logo} alt="Room logo" className="justify-self-center" />
          
          <NavList className="hidden desktop:flex text-white" itemClassName="relative after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-2 after:w-0 after:h-0.5 after:bg-white after:transition-all hover:after:w-4" />
        </div>

        <div className="absolute bottom-0 right-0 flex desktop:-right-40">
          <button type="button" onClick={setPrevIndex} className="bg-black w-14 h-14 tablet:w-20 tablet:h-20 flex justify-center items-center cursor-pointer hover:bg-grey-800 transition-all">
            <img src={leftIcon} alt="Left arrow" className="w-2.5 tablet:w-3.5" />
          </button>
          <button type="button" onClick={setNextIndex} className="bg-black w-14 h-14 tablet:w-20 tablet:h-20 flex justify-center items-center cursor-pointer hover:bg-grey-800 transition-all">
            <img src={rightIcon} alt="Right arrow" className="w-2.5 tablet:w-3.5" />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header;