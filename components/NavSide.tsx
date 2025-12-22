'use client';

import Link from 'next/link';
import AppImage from './AppImage';
import { useWindowSize } from '@/hooks/useWindowSize';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { SunIcon, MoonIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

type NavSideProps = {
    darkMode: boolean,
    toggleDarkMode: () => void,
}

export default function NavSide({darkMode, toggleDarkMode} : NavSideProps) {

    const [navBar, navBarSet] = useState(false);

    const { width } = useWindowSize();
    const pathName = usePathname();

    return (
        <nav className={`${width < 768 ? 'block relative' : 'hidden'}`}>
            <div className=''>
                <div className="flex items-center mx-auto max-w-6xl gap-x-4 justify-between px-10 py-4">
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
                <button type='button' onClick={() => navBarSet(!navBar)}>
                    {navBar ? 
                    (
                        <XMarkIcon className="h-8 w-8 text-black dark:text-white hover:scale-110 transition-transform hover:rotate-12 cursor-pointer"></XMarkIcon>
                    ) 
                    : 
                    (
                        <Bars3Icon className="h-8 w-8 text-black dark:text-white hover:scale-110 transition-transform hover:rotate-12 cursor-pointer"></Bars3Icon>
                    )
                    }
                </button>
                </div>
            </div>
            <div className={`flex flex-col items-center pb-5 absolute w-full z-3 transition-all duration-300 bg-stone-800 ${navBar ? 'block opacity-100 top-38.5' : 'opacity-0 top-30 invisible'}`}>
                <Link href={'/'} className={`${pathName === '/' ? 'text-blue-600 underline decoration-blue-600 underline-offset-8' : 'text-white'} hover:bg-gray-700 hover:shadow transition duration-300 w-full text-center py-4`}>Inicio</Link>
                <Link href={'/Somos'} className={`${pathName === '/Somos' ? 'text-blue-600 underline decoration-blue-600 underline-offset-8' : 'text-white'} hover:bg-gray-700 hover:shadow transition duration-300 w-full text-center py-4`}>Quienes Somós</Link>
                <Link href={'/Admision'} className={`${pathName === '/Admision' ? 'text-blue-600 underline decoration-blue-600 underline-offset-8' : 'text-white'} hover:bg-gray-700 hover:shadow transition duration-300 w-full text-center py-4`}>Admisión</Link>
                <Link href={'/Contacto'} className={`${pathName === '/Contacto' ? 'text-blue-600 underline decoration-blue-600 underline-offset-8' : 'text-white'} hover:bg-gray-700 hover:shadow transition duration-300 w-full text-center py-4`}>Contacto</Link>
                <button 
                type="button"
                className={`cursor-pointer hover:scale-105 transition-transform hover:rotate-2`}
                onClick={toggleDarkMode}
                >
                <SunIcon className="h-8 w-8 fill-white opacity-0 hidden hover:scale-110 transition-transform hover:rotate-12 dark:inline-block dark:opacity-100 mt-5"></SunIcon>
                
                <MoonIcon className="h-8 w-8 text-white hover:scale-110 transition-transform hover:rotate-12 dark:hidden mt-5"></MoonIcon>
                </button>
            </div>
        </nav>
    )
}
