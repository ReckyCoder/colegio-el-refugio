'use client';

import { useForm } from "react-hook-form";
import { nameRegex, onlyNameChars } from "@/utils/validators";

type FormData = {
    nombre: string;
    correo: string;
    mensaje: string;
}

export default function Form() {

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

    const dateAnnio = new Date().getFullYear();

    const onSubmit = (data: FormData) => {
        console.log(data);
    }

    return (
        <div className='bg-stone-100 text-black flex justify-center px-4 dark:bg-stone-800 dark:text-white'>
            <form className="border-stone-300 dark:bg-gray-900 dark:shadow-gray-700 border flex flex-col px-4 sm:px-15 py-5 my-20 rounded-2xl shadow-2xl" onSubmit={handleSubmit(onSubmit)}>
                <div className="text-center">
                    <h2 className="mx-auto my-5">¿Tienes alguna <span className="text-blue-600">consulta?</span></h2>
                    <p className="max-w-80 mx-auto my-5">Escríbenos y con gusto responderemos tus dudas sobre nuestro colegio, admisión o actividades educativas.</p>
                </div>
                <div className="grid gap-x-3 mt-4 gap-y-5">
                    <div className="flex flex-col gap-y-2">
                        <label htmlFor="nombre">Nombre:</label>
                        <input 
                            {...register("nombre", {
                                required: "El nombre es obligatorio",
                                validate: (value) => nameRegex.test(value) || "Nombre inválido",
                                onChange: (e) => {
                                    e.target.value = onlyNameChars(e.target.value);
                                }
                            })}
                            className='placeholder:text-stone-500 dark:placeholder:text-stone-300 border-1 border-stone-500/50 rounded p-1' 
                            type="text" 
                            placeholder='Ej: John Doe'
                            id="nombre"
                        />
                        {errors.nombre && <p className="text-red-500 text-sm font-bold">{errors.nombre.message}</p>}
                    </div>
                    <div className="flex flex-col gap-y-2">
                        <label htmlFor="correo">Correo: </label>
                        <input 
                            {...register("correo", {
                                required: "El correo es obligatorio",
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: "Correo no válido"
                                }
                            })}
                            className='placeholder:text-stone-500 dark:placeholder:text-stone-300 border-1 border-stone-500/50 rounded p-1' 
                            type="email" 
                            placeholder='Ej: john.doe@example.com'
                            id="correo"
                        />
                        {errors.correo && <p className="text-red-500 text-sm font-bold">{errors.correo.message}</p>}
                    </div>
                    <div className="flex flex-col gap-y-2">
                        <label htmlFor="mensaje">Mensaje: </label>
                        <textarea 
                            {...register("mensaje", {
                                required: "El mensaje no puede ir vacio"
                            })}
                            className='placeholder:text-stone-500 dark:placeholder:text-stone-300 border-1 border-stone-500/50 rounded p-1'  
                            name="mensaje" 
                            id="mensaje"
                            placeholder="Ej: Hola buenos dias ..."
                            minLength={10}
                        >
                        </textarea>
                        {errors.mensaje && <p className="text-red-500 text-sm font-bold">{errors.mensaje.message}</p>}
                    </div>
                </div>
                <button className="bg-blue-600 px-2 py-1 rounded p-1 text-white mx-auto mt-8 cursor-pointer hover:opacity-90 transition-all" type="submit">Enviar</button>
            </form>
        </div>
    )
}
