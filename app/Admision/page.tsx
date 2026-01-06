import Link from "next/link";
import AppImage from "@/components/AppImage";
import Description from "@/components/Description";
import Stepper from "@/components/Stepper";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import { CursorArrowRaysIcon } from "@heroicons/react/24/outline";


export default function Page() {
    return (
        <main className="flex flex-col items-center justify-center pt-38 bg-stone-100 dark:bg-stone-800">
            <div className="w-full flex flex-col lg:flex-row gap-y-15 lg:gap-y-0 gap-x-20 bg-blue-600 dark:bg-gray-900 py-20 justify-center items-center">
                <AppImage src={'/admision/sistemaDeAdmisionEscolar.png'} alt="imagen admisión escolar" className="w-md" width={1920} height={1080}/>
                <div className="text-center flex flex-col gap-y-5 justify-center max-w-md">
                    <div className="text-white">
                        <h2>Proceso de Admisión.</h2>
                        <p>Nuestro establecimiento participa en el Sistema de Admisión Escolar (SAE)
                        del Ministerio de Educación. A través de esta plataforma, las familias pueden
                        postular de manera transparente y sencilla a nuestro colegio.</p>
                    </div>
                    <div className="w-full">
                        <Link className="bg-red-600 text-white w-40 rounded py-1 px-3 mx-auto hover:bg-red-500 transition-colors" href={'https://www.sistemadeadmisionescolar.cl/'} target="_blank">Ir a postular</Link>
                    </div>
                </div>
            </div>
            <div className=" md:px-3 pt-20">
                <Stepper/>
            </div>
            <div className="mt-20 mb-5 px-3">
                <h2 className="text-black dark:text-white text-center">Conoce nuestro colegio.</h2>
                <p className="text-center text-black dark:text-white max-w-xl mx-auto mt-3">
                    Descarga o revisa nuestro documento institucional con información general,
                    proyecto educativo y aspectos relevantes de nuestra comunidad escolar.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-x-5 mt-10 items-center gap-y-5">
                    <Link href={'/pdf/colegio.pdf'} download={true} className="bg-red-600 text-white px-2 py-1 rounded flex flex-row-reverse gap-x-2 w-min"><ArrowDownTrayIcon className="w-6 h-6"/>PDF</Link>
                    <Link href={'/pdf/colegio.pdf'} target="_blank" className="bg-red-600 text-white px-2 py-1 rounded flex flex-row-reverse gap-x-2 w-min"><CursorArrowRaysIcon className="w-6 h-6"/>PDF</Link>
                </div>
            </div>
            <div className="w-full px-10">
                <Description/>
            </div>
        </main>
    )
}
