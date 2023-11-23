


const Navbar = () => {
    return (
      <nav className="z-50 backdrop-blur bg-white/50 fixed w-full h-24 shadow-xl flex">
        <div className="absolute flex h-full w-1/3 px-5 items-center">
        <a href="#" className="flex-inline text-[#212121] text-4xl font-bold font-bebas scroll-smooth focus:scroll-smooth active:scroll-smooth">
          Beauty in the Mundane.
        </a>
        </div>
        

        <div className="flex justify-center w-full h-full items-center">
          <h1 className="text-6xl font-bold font-bebas italic text-[#212121]">Dao Ho</h1>
        </div>

      </nav>
    );
  };
  
  export default Navbar;