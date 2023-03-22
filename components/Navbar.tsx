import Link from "next/link";
import { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [mobileColor, setMobileColor] = useState("black");
  const [textColor, setTextColor] = useState("white");
  const [scrolled, setScrolled] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 10) {
        setScrolled(true);
        setColor("white");
        setMobileColor("white");
        setTextColor("black");
      } else {
        setScrolled(false);
        setColor("transparent");
        setMobileColor("black");
        setTextColor("white");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <div
      className={`fixed left-0 top-0 w-full z-10 ease-in duration-300 bg-${color}`}
    >
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-3">
        <Link href="/">
          <img
            className={`w-[200px] ${scrolled ? 'opacity-0' : 'opacity-100'}`}
            src="/images/logo-menu.svg"
            alt="NOS Logo"
          />
          <img
            className={`w-[200px] absolute top-[12px] ${scrolled ? 'opacity-100' : 'opacity-0'}`
              
            }
            src="/images/logo-menu-black.svg"
            alt="NOS Logo"
          />
        </Link>
        <ul className={`hidden sm:flex`}>
          <li className="p-4 uppercase">
            <Link href="/sobreNos">
              <h3 className={`text-sm text-${textColor}`}>Sobre Nós</h3>
            </Link>
          </li>
          <li className="p-4 uppercase">
            <Link href="/produtos">
              <h3 className={`text-sm text-${textColor}`}>Produtos</h3>
            </Link>
          </li>
          <li className="p-4 uppercase">
            <Link href="/manutencaoInstrumentais">
              <h3 className={`text-sm text-${textColor}`}>Manutenção Instrumental</h3>
            </Link>
          </li>
          <li className="p-4 uppercase">
            <Link href="/parceiros">
              <h3 className={`text-sm text-${textColor}`}>Parceiros</h3>
            </Link>
          </li>
          <li className="p-4 uppercase">
            <Link href="/contact">
              <h3 className={`text-sm text-${textColor}`}>Contate-nos</h3>
            </Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className="block sm:hidden z-10">
          {nav ? (
            <AiOutlineClose size={20} className={`text-${textColor}`} />
          ) : (
            <AiOutlineMenu size={20} className={`text-${textColor}`} />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={`sm:hidden absolute top-0 ${nav ? 'left-0' : 'left-[-100%]'} bg-${mobileColor} right-0 bottom-0 flex justify-center items-center w-full h-screen text-center ease-in duration-300`}
        >
          <ul className={`text-${textColor}`}>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500 uppercase"
            >
              <Link href="/sobreNos">Sobre Nós</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500 uppercase"
            >
              <Link href="/produtos">Produtos</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500 uppercase"
            >
              <Link href="/manutencaoInstrumentais">Manutenção Instrumental</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500 uppercase"
            >
              <Link href="/parceiros">Parceiros</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500 uppercase"
            >
              <Link href="/contact">Contate-nos</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
