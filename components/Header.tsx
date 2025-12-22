'use client';

import Image from "next/image";
import Link from "next/link";
import { useWindowSize } from "@/hooks/useWindowSize";
import { useDarkMode } from "@/hooks/useDarkMode";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import NavSide from "./NavSide";
import { usePathname } from "next/navigation";
import AppImage from "./AppImage";

export default function Header() {

  const { width } = useWindowSize();
  const { darkMode, toggleDarkMode } = useDarkMode();
  const pathName = usePathname();


  return (
    <header className=" bg-stone-100 dark:bg-stone-800 fixed w-full border-b-stone-700 dark:border-b-stone-100 z-3 border-b-1">
        {width > 768 ?
        (
          <div className={`flex items-center mx-auto max-w-6xl gap-x-4 justify-between px-10 py-4`}>
          {darkMode === true ? 
          (
            <Link className="hover:scale-105 transition duration-200" href={'/'}>
              <AppImage src={`/logo/insignia.svg`} alt="logo colegio" className="w-30 h-30" width={1920} height={1920}/>
            </Link>
          ) : 
          (
            <Link className="hover:scale-105 transition duration-200" href={'/'}>
              <AppImage src={`/logo/insignia.svg`} alt="logo colegio" className="w-30 h-30" width={1920} height={1920}/>
            </Link>
          )}
          
          <div className="flex items-center gap-5">
            <Link href={'/'} className={`${pathName === '/' ? 'text-blue-600 dark:text-blue-500 underline decoration-blue-600 underline-offset-8' : 'text-black dark:text-white' } hover:underline hover:decoration-blue-600 hover:underline-offset-8 transition duration-300`}>Inicio</Link>
            <Link href={'/Somos'} className={`${pathName === '/Somos' ? 'text-blue-600 dark:text-blue-500 underline decoration-blue-600 underline-offset-8' : 'text-black dark:text-white' } hover:underline hover:decoration-blue-600 hover:underline-offset-8 transition duration-300`}>Quienes Somós</Link>
            <Link href={'/Admision'} className={`${pathName === '/Admision' ? 'text-blue-600 dark:text-blue-500 underline decoration-blue-600 underline-offset-8' : 'text-black dark:text-white' } hover:underline hover:decoration-blue-600 hover:underline-offset-8 transition duration-300`}>Admisión</Link>
            <Link href={'/Contacto'} className={`${pathName === '/Contacto' ? 'text-blue-600 dark:text-blue-500 underline decoration-blue-600 underline-offset-8' : 'text-black dark:text-white' } hover:underline hover:decoration-blue-600 hover:underline-offset-8 transition duration-300`}>Contacto</Link>
            <button 
            type="button"
            className={`cursor-pointer hover:scale-105 transition-transform hover:rotate-2`}
            onClick={toggleDarkMode}
            >
              <SunIcon className="h-8 w-8 fill-black dark:fill-white opacity-0 hidden hover:scale-110 transition-transform hover:rotate-12 dark:inline-block dark:opacity-100"></SunIcon>
              
              <MoonIcon className="h-8 w-8 text-black hover:scale-110 transition-transform hover:rotate-12 dark:hidden"></MoonIcon>
            </button>
          </div>
        </div>
        ) : 
        (
          <NavSide darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
        )}
        
    </header>
  )
}
