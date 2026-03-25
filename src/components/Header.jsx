import menuIcon from "/images/icon-hamburger.svg";
import logo from "/images/logo.svg";
import leftIcon from "/images/icon-angle-left.svg";
import rightIcon from "/images/icon-angle-right.svg";

function Header({ openMenu }) {
  return (
    <header className="relative h-90 px-6 py-12 bg-[url('/images/mobile-image-hero-1.jpg')] bg-cover bg-center">
      <nav>
        <div className="grid grid-cols-3">
          <button type="button" onClick={openMenu}>
            <img src={menuIcon} alt="Menu icon" />
          </button>
          
          <img src={logo} alt="Room logo" className="justify-self-center" />
        </div>

        <div className="absolute bottom-0 right-0 flex">
          <button type="button" className="bg-black w-14 h-14 flex justify-center items-center">
            <img src={leftIcon} alt="Left arrow" className="w-2.5" />
          </button>
          <button type="button" className="bg-black w-14 h-14 flex justify-center items-center">
            <img src={rightIcon} alt="Right arrow" className="w-2.5" />
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Header;