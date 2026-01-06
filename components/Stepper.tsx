import { CalendarDateRangeIcon, PencilIcon, PhoneIcon } from "@heroicons/react/24/outline";

export default function Stepper() {
    return (
        <ol className="items-center flex flex-col gap-y-10 lg:flex-row text-black dark:text-white max-w-6xl px-5 md:px-0">
            <li className="relative mb-6 sm:mb-0">
                <div className="flex items-center">
                    <span className="bg-blue-600 text-white text-sm font-medium px-1.5 rounded-full">1</span>
                    <div className="sm:flex w-full bg-stone-800 dark:bg-stone-100 h-px mx-6"></div>
                </div>
                <div className="mt-3 sm:pe-8">
                    <div className="flex items-center gap-x-5">
                        <div className=" flex items-center justify-center w-6 h-6 bg-brand-softer rounded-full">
                            <PencilIcon />
                        </div>
                        <h3 className="text-lg font-semibold text-heading my-2 lg:text-nowrap">Registro y postulación.</h3>
                    </div>
                    <p className="text-body mb-4">Ingresa al Sistema de Admisión Escolar, regístrate con tus datos y selecciona nuestro colegio como una de tus preferencias.</p>
                </div>
            </li>
            <li className="relative mb-6 sm:mb-0">
                <div className="flex items-center">
                    <span className="bg-blue-600 text-white text-sm font-medium px-1.5 rounded-full">2</span>
                    <div className="sm:flex w-full bg-stone-800 dark:bg-stone-100 h-px mx-6"></div>
                </div>
                <div className="mt-3 sm:pe-8">
                    <div className="flex items-center gap-x-5">
                        <div className=" flex items-center justify-center w-6 h-6 bg-brand-softer rounded-full">
                            <CalendarDateRangeIcon />
                        </div>
                        <h3 className="text-lg font-semibold text-heading my-2 lg:text-nowrap">Revisión y asignación.</h3>
                    </div>
                    <p className="text-body mb-4">El sistema procesa las postulaciones según lo establecido por el Ministerio de Educación. Durante este período, solo debes esperar los resultados.</p>
                </div>
            </li>
            <li className="relative mb-6 sm:mb-0">
                <div className="flex items-center">
                    <span className="bg-blue-600 text-white text-sm font-medium px-1.5 rounded-full">3</span>
                    <div className="sm:flex w-full bg-stone-800 dark:bg-stone-100 h-px mx-6"></div>
                </div>
                <div className="mt-3 sm:pe-8">
                    <div className="flex items-center gap-x-5">
                        <div className=" flex items-center justify-center w-6 h-6 bg-brand-softer rounded-full">
                            <PhoneIcon />
                        </div>
                        <h3 className="text-lg font-semibold text-heading my-2 lg:text-nowrap">Resultados y confirmación.</h3>
                    </div>
                    <p className="text-body mb-4">Revisa los resultados en el Sistema de Admisión Escolar. Si eres asignado a nuestro colegio, te contactaremos para continuar con el proceso de matrícula.</p>
                </div>
            </li>
        </ol>
    );
}
