import Link from "next/link";
import Image from "next/image";
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { siFacebook, siInstagram } from "simple-icons";

export default function Footer() {

    const date = new Date().getFullYear();

  return (
    <footer className="bg-blue-700 dark:bg-gray-900 w-full relative py-10">
        <div className="flex flex-col items-center justify-between max-w-6xl mx-auto px-16">
            <div className="flex flex-col lg:flex-row items-center justify-between w-full lg:mb-5">
                <Link className="hover:scale-105 transition duration-200" href={'/'}>
                    <Image className="w-30 h-30" alt="logo colegio" src={'/logo/insignia.svg'} width={1920} height={1920}/>
                </Link>
                <div className="flex flex-col w-full lg:w-max items-center gap-y-5 lg:flex-row gap-x-4">
                    <Link href={'+11111111111'} className="flex group">
                        <PhoneIcon className="h-6 w-6 text-white fill-white dark:text-white group-hover:scale-110 transition-transform group-hover:rotate-12"/>
                        <span className="text-white ms-3 group-hover:underline group-hover:decoration-white group-hover:underline-offset-4 transition duration-300">+111 11111111</span>
                    </Link>
                    <Link href={'mailto:correo@hotmail.com'} className="flex group">
                        <EnvelopeIcon className="h-6 w-6 text-white  dark:text-white group-hover:scale-110 transition-transform group-hover:rotate-12"/>
                        <span className="text-white ms-3 group-hover:underline group-hover:decoration-white group-hover:underline-offset-4 transition duration-300">correo@hotmail.com</span>
                    </Link>
                    <Link target="_blank" className="flex group" href={'https://www.google.com/maps/place/Los+Guindos+1000,+9760374+Penaflor,+Pe%C3%B1aflor,+Regi%C3%B3n+Metropolitana/@-33.6086168,-70.8740938,17z/data=!3m1!4b1!4m6!3m5!1s0x9662e6cd00f7ec25:0x6e55271e4ac72f6f!8m2!3d-33.6086168!4d-70.8740938!16s%2Fg%2F11h1htqnb4?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA3MUgBUAM%3D'}>
                        <MapPinIcon className="h-6 w-6 group-hover:scale-110 transition-transform group-hover:rotate-12 cursor-pointer"/>
                        <span className="text-white ms-3 group-hover:underline group-hover:decoration-white group-hover:underline-offset-4 transition duration-300">Los Guindos 1000, Peñaflor</span>
                    </Link>
                </div>
            </div>

            <div className="w-full mx-auto h-0.5 rounded-2xl bg-white mt-10 lg:mt-0">
            </div>
            <div className="w-full mt-10 flex flex-col gap-y-5 lg:flex-row items-center justify-between">
                <div className="flex gap-x-4">
                    <Link href={'https://www.facebook.com/p/Escuela-B%C3%A1sica-Particular-N40-El-Refugio-100068943432667/?locale=es_LA'} target="_blank">
                        <svg
                            className="w-10 h-10 fill-white hover:scale-105 hover:opacity-80 transition"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            >
                                <title>Icon Facebook</title>
                            <path d={siFacebook.path} />
                        </svg>
                    </Link>
                    <Link href={'https://www.instagram.com/esc.elrefugio/'} target="_blank">
                        <svg
                            className="w-10 h-10 fill-white hover:scale-105 hover:opacity-80 transition"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            >
                                <title>Icon Instagram</title>
                            <path d={siInstagram.path} />
                        </svg>
                    </Link>
                </div>
                <div>
                    <p>&copy; {date} El Refugio. Todos los derechos reservados.</p>
                </div>
            </div>
        </div>
    </footer>
  )
}
