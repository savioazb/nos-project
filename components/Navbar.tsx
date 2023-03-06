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
        setColor("#ffffff");
        setMobileColor("#ffffff");
        setTextColor("#000000");
      } else {
        setScrolled(false);
        setColor("transparent");
        setMobileColor("#000000");
        setTextColor("#ffffff");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="fixed left-0 top-0 w-full z-10 ease-in duration-300"
    >
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-3 text-white">
        <Link href="/">
          <img
            className={
              scrolled ? "w-[200px] opacity-0" : "w-[200px] opacity-100"
            }
            src="/images/logo-menu.svg"
            alt="NOS Logo"
          />
          <img
            className={
              scrolled
                ? "w-[200px] opacity-100 absolute top-[12px] "
                : "w-[200px] opacity-0 absolute top-[12px]"
            }
            src="/images/logo-menu-black.svg"
            alt="NOS Logo"
          />
        </Link>
        <ul style={{ color: `${textColor}` }} className="hidden sm:flex">
          <li className="p-4 uppercase">
            <Link href="/sobreNos">
              <h3 className="text-sm">Sobre Nós</h3>
            </Link>
          </li>
          <li className="p-4 uppercase">
            <Link href="/produtos">
              <h3 className="text-sm">Produtos</h3>
            </Link>
          </li>
          <li className="p-4 uppercase">
            <Link href="/manutencaoInstrumentais">
              <h3 className="text-sm">Manutenção Instrumental</h3>
            </Link>
          </li>
          <li className="p-4 uppercase">
            <Link href="/parceiros">
              <h3 className="text-sm">Parceiros</h3>
            </Link>
          </li>
          <li className="p-4 uppercase">
            <Link href="/contact">
              <h3 className="text-sm">Contate-nos</h3>
            </Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className="block sm:hidden z-10">
          {nav ? (
            <AiOutlineClose size={20} style={{ color: `${textColor}` }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          style={{ backgroundColor: `${mobileColor}` }}
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen text-center ease-in duration-300"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen text-center ease-in duration-300"
          }
        >
          <ul style={{ color: `${textColor}` }}>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500 uppercase"
            >
              <Link href="/">Home</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500 uppercase"
            >
              <Link href="/#gallery">Gallery</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500 uppercase"
            >
              <Link href="/work">Work</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500 uppercase"
            >
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
