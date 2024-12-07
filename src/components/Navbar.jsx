const Navbar = () => {
  return (
    <div className=''>
      {/* LOGO */}
      <div className="">
        <img src="/logo.png" className="w-12 h-12" alt="" />
        <span>Wild Byte</span>
      </div>
      {/* MOBILE MENU */}
      <div className="md:hidden">M</div>
      {/* DESKTOP MENU */}
      <div className="hidden md:flex">D</div>
    </div>
  );
}

export default Navbar
