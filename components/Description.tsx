'use client'

import { useState } from 'react'

type Item = {
  title: string
  content: React.ReactNode
}

const items: Item[] = [
  {
    title: '¿Cómo puedo postular al colegio?',
    content: (
      <>
        <p className="mb-2 text-body">
          La postulación se realiza exclusivamente a través del Sistema de Admisión
          Escolar (SAE) del Ministerio de Educación.
        </p>
        <p className="text-body">
          En esta plataforma podrás registrar tus datos, elegir el establecimiento
          y seguir todas las etapas del proceso de manera online.
        </p>
      </>
    ),
  },
  {
    title: '¿Puedo postular directamente en el colegio?',
    content: (
      <p className="text-body">
        No. El proceso de admisión se realiza únicamente mediante el Sistema de
        Admisión Escolar, según lo establecido por el Ministerio de Educación.
      </p>
    ),
  },
  {
    title: '¿Qué ocurre después de realizar la postulación?',
    content: (
      <p className="text-body">
        Una vez finalizado el proceso, el Sistema de Admisión Escolar informará los
        resultados. En caso de ser asignado a nuestro colegio, nos pondremos en
        contacto para continuar con el proceso de matrícula.
      </p>
    ),
  },
]

export default function Description() {
  const [openIndex, setOpenIndex] = useState<number | null>(-1)

  const toggle = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index))
  }

  return (
    <div className="rounded-2xl border border-default overflow-hidden text-black max-w-4xl mx-auto mt-20">
      {items.map((item, index) => {
        const isOpen = openIndex === index

        return (
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            <div key={index}>
            <button
                type='button'
              onClick={() => toggle(index)}
              aria-expanded={isOpen}
              className={`flex w-full text-start items-center justify-between p-5 font-bold text-md text-black dark:text-white ${isOpen ? 'bg-neutral-300 dark:bg-blue-600' : 'bg-stone-100 dark:bg-gray-900'} ${index === items.length - 1 ? '' : 'border-b border-default dark:border-gray-800'} hover:text-fg-brand hover:bg-brand-softer cursor-pointer`}
            >
              <span>{item.title}</span>

              <svg
                className={`w-5 h-5 shrink-0 transition-transform ${
                  isOpen ? 'rotate-180' : ''
                }`}
                viewBox="0 0 24 24"
                aria-hidden
              >
                <title>SVG Arrow</title>
                <path
                  d="m5 15 7-7 7 7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

                <div className={`
                      overflow-hidden transition-all duration-500 ease-in-out 
                      ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
                    `}>
                    {isOpen && (
                      <div className={`p-5 dark:bg-gray-800 text-black dark:text-white ${index === items.length - 1 ? 'border-t border-default dark:border-gray-800' : 'border-b border-default dark:border-gray-800'}`}>
                        {item.content}
                      </div>
                    )}
                </div>
          </div>
        )
      })}
    </div>
  )
}
