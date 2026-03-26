function NavList({ className, itemClassName }) {
  return (
    <nav>
      <ul className={`lowercase font-semibold leading-[100%] tracking-[-0.7px] gap-8 ${className}`}>
        <li><a href="#" className={itemClassName}>Home</a></li>
        <li><a href="#" className={itemClassName}>Shop</a></li>
        <li><a href="#" className={itemClassName}>About</a></li>
        <li><a href="#" className={itemClassName}>Contact</a></li>
      </ul>
    </nav>
  )
}

export default NavList;