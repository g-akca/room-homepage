import closeIcon from "/images/icon-close.svg";

import NavList from "./NavList";

function Menu({ closeMenu }) {
  return (
    <div className="fixed inset-0 z-50 desktop:hidden">
      <div className="absolute inset-0 bg-black/50" onClick={closeMenu} />

      <div className="absolute top-0 left-0 z-10 w-screen h-27.5 px-6 tablet:px-16 bg-white flex items-center justify-between">
        <button type="button" onClick={closeMenu} className="cursor-pointer">
          <img src={closeIcon} alt="Close menu" />
        </button>

        <NavList className="flex text-black" />
      </div>
    </div>
  )
}

export default Menu;