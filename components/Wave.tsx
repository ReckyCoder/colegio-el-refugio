'use client';

// import Image from 'next/image';
// import { useDarkMode } from '@/hooks/useDarkMode';

export default function Wave() {

    // const { darkMode } = useDarkMode();

    // console.log(darkMode);
    return (
        <div className="bg-blue-700 dark:bg-gray-900 w-full relative">
            <div className="max-w-2xl h-80 flex flex-col justify-center items-center text-center gap-y-5 mx-auto">
                <h1 className="text-shadow-lg z-2">Bienvenidos a la escuela <span className="text-amber-300">El refugio.</span></h1>
                <p className="z-2">Somos una comunidad educativa comprometida con el aprendizaje, el respeto y
                el desarrollo integral de nuestros estudiantes, acompañándolos en cada etapa
                de su formación académica y personal.</p>
            </div>
            {/* {darkMode === true ? 
            (
                <Image className="w-full absolute z-1" alt="image wave" src={'/wave/waveBlack.svg'} width={1920} height={1080}/>
            ) : 
            (
                <Image className="w-full absolute z-1" alt="image wave" src={'/wave/waveWhite.svg'} width={1920} height={1080}/>
            )
            } */}
        </div>
    )
}
