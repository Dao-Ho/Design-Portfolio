import Image from "next/image";
import iglogo from '../../../public/Images/black ig logo.png'
import { Link } from 'react-scroll';

function ig() {
  return (
    <a href="https://www.instagram.com/artdaoho/" target="_blank" rel="noopener noreferrer">
    <Image
      src={ iglogo }
      quality={100}
      alt=""
      className="transition ease-in-out delay-50 hover:scale-110 fill w-[2vw] h-[2vw] "
    />
    </a>
  );
}


const Navbar = () => {
    return (
      <nav className="z-50 backdrop-blur bg-white/50 fixed w-full h-24 shadow-xl flex justify-between">
        <div className="flex h-full w-1/3 px-5 items-center">
        <a href="#" className="flex-inline text-[#212121] text-[2vw] font-bold font-bebas scroll-smooth focus:scroll-smooth active:scroll-smooth">
          Beauty in the Mundane.
        </a>
        </div>
        

        {/* <div className="flex justify-center w-full h-full items-center">
          <h1 className="text-[3vw] font-inter font-bold italic text-[#212121]">Dao Ho</h1>
        </div> */}
        <div className="flex pr-[3vw]">
        <div className="flex pr-[3vw] items-center h-full items-center">
          <Link
          to="about"
          spy={true}
          smooth={true}
          duration={0} className="font-roboto text-[1.5vw] font-bold transition ease-in-out delay-50 hover:scale-110 cursor-pointer">
            Artworks
          </Link>
        </div>
        <div className="flex pr-[3vw] items-center h-full items-center">
          <Link
          to="about"
          spy={true}
          smooth={true}
          duration={0} className="font-roboto text-[1.5vw] font-bold transition ease-in-out delay-50 hover:scale-110 cursor-pointer">
            About
          </Link>
        </div>
        <div className="flex items-center h-full w-[3vw]">
        { ig() } 
        </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;