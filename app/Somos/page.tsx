import CountUp from "react-countup"
import AppImage from "@/components/AppImage";
import { FlagIcon, EyeIcon } from "@heroicons/react/24/outline"
import { AboutItem } from "@/seed/aboutItems"
import StatsCounter from "@/components/StatsCounter";


export default function Page() {
    return (
        <main className="flex flex-col items-center justify-center pt-38 bg-stone-100 dark:bg-stone-800">
            <div className="bg-blue-700 dark:bg-gray-900 w-full relative text-white">
                <h2 className="text-center mt-20 text-shadow-lg">Nuestro <span className="text-amber-300 dark:text-blue-600">Propósito</span> Educativo</h2>
                <div className="max-w-4xl flex flex-col py-20 px-5 gap-y-10 gap-x-20 md:py-0 md:flex-row justify-center items-center text-center mx-auto text-white">
                    <div className="flex flex-col gap-y-5 items-center md:my-20">
                        <FlagIcon className="w-16 text-amber-300 dark:text-blue-600"/>
                        <h3 className="text-shadow-lg z-2">Nuestra <span className="text-amber-300 dark:text-blue-600">Misión.</span></h3>
                        <p className="z-2">Brindar una educación integral que fomente el aprendizaje, los valores y el desarrollo personal de nuestros estudiantes, en un ambiente seguro, inclusivo y respetuoso.</p>
                    </div>
                    <div className="flex flex-col gap-y-5 items-center md:my-20">
                        <EyeIcon className="w-16 text-amber-300 dark:text-blue-600"/>
                        <h3 className="text-shadow-lg z-2">Nuestra <span className="text-amber-300 dark:text-blue-600">Visión.</span></h3>
                        <p className="z-2">Ser una comunidad educativa reconocida por formar estudiantes responsables, comprometidos y preparados para enfrentar los desafíos del futuro con confianza y autonomía.</p>
                    </div>
                </div>
            </div>
            <div className="text-black dark:text-white mt-20 flex flex-col gap-y-20">
                {AboutItem.map((item, index) => (
                    // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                    <div key={index} className={`flex flex-col items-center gap-y-20 justify-around gap-x-20 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                        <div className="shadow-2xl p-5 rounded-2xl text-center max-w-md dark:bg-gray-900 flex flex-col gap-y-3">
                            <h2 className="text-blue-600 dark:text-amber-300">{item.title}</h2>
                            <p>{item.description}</p>
                        </div>
                        <div>
                            <AppImage src={item.image} alt="imagen sobre el sistema educativo" className={`${index === 2 ? 'w-30' : 'w-70'}`} width={1920} height={1080}/>
                        </div>
                    </div>
                ))}
            </div>
            <StatsCounter />
        </main>
    )
}
