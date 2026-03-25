import closeIcon from "/images/icon-close.svg";

function Menu({ closeMenu }) {
  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/50" onClick={closeMenu} />

      <div className="absolute top-0 left-0 z-10 w-screen h-27.5 px-6 bg-white flex items-center justify-between">
        <button type="button" onClick={closeMenu} className="cursor-pointer">
          <img src={closeIcon} alt="Close menu" />
        </button>

        <nav>
          <ul className="lowercase text-black font-semibold leading-[100%] tracking-[-0.7px] flex gap-8">
            <li><a href="#">Home</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Menu;