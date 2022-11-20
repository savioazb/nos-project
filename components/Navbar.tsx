import Link from 'next/link';
import { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

export const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState('transparent');
  const [mobileColor, setMobileColor] = useState('black');
  const [textColor, setTextColor] = useState('white');
  const [scrolled, setScrolled] = useState(false)

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setScrolled(true)
        setColor('#ffffff');
        setMobileColor('#ffffff')
        setTextColor('#000000');
      } else {
        setScrolled(false)
        setColor('transparent');
        setMobileColor('#000000')
        setTextColor('#ffffff');
      }
    };
    window.addEventListener('scroll', changeColor);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className='fixed left-0 top-0 w-full z-10 ease-in duration-300'
    >
      <div className='max-w-[1240px] m-auto flex justify-between items-center p-4 text-white'>
        <Link href='/'>
        <img className={scrolled ? "opacity-0":"opacity-100"} src="/images/logo-menu.png" alt='NOS Logo' />                    <img className={scrolled ? "opacity-100 absolute top-[12px] " : "opacity-0 absolute top-[12px]"} src="/images/logo-menu-black.png" alt='NOS Logo' />
        </Link>
        <ul style={{ color: `${textColor}` }} className='hidden sm:flex'>
          <li className='p-4 uppercase'>
            <Link href='/'>Sobre Nós</Link>
          </li>
          <li className='p-4 uppercase'>
            <Link href='/#gallery'>Produtos</Link>
          </li>
          <li className='p-4 uppercase'>
            <Link href='/work'>Manutenção Instrumental</Link>
          </li>
          <li className='p-4 uppercase'>
            <Link href='/contact'>Parceiros</Link>
          </li>
          <li className='p-4 uppercase'>
            <Link href='/contact'>Contate-nos</Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className='block sm:hidden z-10'>
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
              ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen text-center ease-in duration-300'
              : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen text-center ease-in duration-300'
          }
        >
          <ul style={{ color: `${textColor}` }}>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500 uppercase'>
              <Link href='/'>Home</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500 uppercase'>
              <Link href='/#gallery'>Gallery</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500 uppercase'>
              <Link href='/work'>Work</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500 uppercase'>
              <Link href='/contact'>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};