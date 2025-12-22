import Image from "next/image";
import Link from "next/link";
import Description from "@/components/Description";
import Stepper from "@/components/Stepper";


export default function Page() {
    return (
        <main className="flex flex-col items-center justify-center bg-stone-100 dark:bg-stone-800">
            <div className="w-full flex flex-col lg:flex-row gap-y-15 lg:gap-y-0 gap-x-20 mt-20 bg-blue-600 dark:bg-gray-900 pt-40 justify-center items-center pb-20">
                <Image className="w-md" src={'/admision/sistemaDeAdmisionEscolar.png'} alt="image admision" width={1920} height={1080}/>
                <div className="text-center flex flex-col gap-y-5 justify-center max-w-md">
                    <div className="text-white">
                        <h2>Proceso de Admisión.</h2>
                        <p>Nuestro establecimiento participa en el Sistema de Admisión Escolar (SAE)
                        del Ministerio de Educación. A través de esta plataforma, las familias pueden
                        postular de manera transparente y sencilla a nuestro colegio.</p>
                    </div>
                    <div className="w-full">
                        <Link className="bg-red-600 text-white w-40 rounded py-1 px-3 mx-auto" href={'https://www.sistemadeadmisionescolar.cl/'} target="_blank">Ir a postular</Link>
                    </div>
                </div>
            </div>
            <div className="px-20 md:px-3 pt-20">
                <Stepper/>
            </div>
            <div className="w-full px-10">
                <Description/>
            </div>
        </main>
    )
}
