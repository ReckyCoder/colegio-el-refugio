import { items } from "@/seed/items";
import Wave from "@/components/Wave";
import Carousel from "@/components/Carousel";
import AppImage from "@/components/AppImage";

export default function Home() {

  return (
    <main className="flex flex-col items-center justify-center pt-38">
      <Wave />
      <div className="flex w-full flex-col items-center py-10 px-16 bg-stone-100 dark:bg-stone-800 sm:items-start">
        <div className="grid grid-cols-1 gap-y-7 lg:gap-y-0 lg:flex gap-x-10 my-20 mx-auto">
          <AppImage src="/item/bgItem.jpg" alt="imagen clase escolar" className="w-100 h-auto rounded-3xl mx-auto" width={420} height={420}/>
          <div className="text-center flex flex-col gap-y-4 my-auto">
            <h2 className="text-black dark:text-white">Aprender, crecer y <span className="text-blue-600">soñar juntos.</span></h2>
            <p className="text-black dark:text-white max-w-xl">En nuestro colegio fomentamos un ambiente seguro y acogedor donde los niños
            desarrollan sus habilidades, valores y confianza, aprendiendo de manera activa
            y significativa cada día.</p>
          </div>
        </div>
        <h2 className="text-black mx-auto text-center mt-20 dark:text-white">¿Qué tipo de estudiante formamos?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:flex-row mx-auto gap-x-4 mt-5 mb-20">
          {items.map((item, index) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            <div key={index} className="flex flex-col items-center text-center gap-y-5 my-8 dark:shadow-gray-700 shadow-2xl rounded-2xl py-6 px-3 max-w-xs">
              <span className="relative inline-block before:absolute before:-inset-1 before:block before:rounded-4xl p-1 before:bg-blue-600">
                <item.svg className="h-8 w-8 text-white dark:text-white mx-auto relative"/>
              </span>
              <h2 className="text-black dark:text-white">{item.title}</h2>
              <p className="text-black dark:text-white max-w-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full px-3 sm:px-5 md:px-10 pt-10 pb-20 bg-blue-700 dark:bg-gray-900">
        <h2 className="text-center my-10 md:max-w-lg mx-auto font-bold text-white">Acompañando cada etapa del aprendizaje</h2>
        <Carousel />
      </div>
    </main>
  );
}
