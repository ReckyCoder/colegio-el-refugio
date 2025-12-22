import AppImage from "@/components/AppImage";

export default function Page() {
    return (
        <main className="pt-80 pb-20 bg-blue-700 dark:bg-gray-900">
            <div className="flex flex-col gap-y-10 md:gap-y-0 md:px-10 md:gap-x-10 md:flex-row justify-center items-center">
                <div>
                    <AppImage src={'/contact/contact1.svg'} alt="imagen contacto" className="w-100" width={1920} height={1080}/>
                </div>
                <div className="text-center text-white flex flex-col items-center gap-y-5 max-w-md">
                    <h2>
                        ¿Necesitas <span className="text-amber-300">más información</span>?
                    </h2>
                    <p>  Si tienes dudas o necesitas orientación, escríbenos y con gusto te responderemos.</p>
                </div>
            </div>
        </main>
    )
}
