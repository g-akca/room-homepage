function NavList({ className }) {
  return (
    <nav>
      <ul className={`lowercase font-semibold leading-[100%] tracking-[-0.7px] gap-8 ${className}`}>
        <li><a href="#">Home</a></li>
        <li><a href="#">Shop</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  )
}

export default NavList;