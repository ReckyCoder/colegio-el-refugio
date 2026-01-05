'use client';

import CountUp from "react-countup";

export default function StatsCounter() {
  return (
    <div className="flex flex-col text-center gap-y-10 mt-10 bg-blue-600 dark:bg-gray-900 w-full py-20 text-white">
      <div className="flex flex-col gap-y-5">
        <span className="text-amber-300 dark:text-blue-600 font-bold text-5xl">
          <CountUp start={0} end={20} duration={2.5} />+
        </span>
        <p className="text-xl max-w-lg mx-auto">
          Años acompañando el aprendizaje y el desarrollo de nuestros estudiantes.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row justify-center gap-x-10 gap-y-10 sm:gap-y-0 *:after:border-s-2 *:after:h-5 *:after:mt-3 *:after:text-amber-300 dark:*:after:text-blue-600">
        <Stat value={12500} label="Estudiantes formados" />
        <Stat value={100} label="Cursos impartidos" />
        <Stat value={230} label="Docentes y asistentes" />
        <Stat value={500} label="Familias que confían" />
      </div>
    </div>
  );
}

function Stat({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center gap-y-2">
      <span className="text-amber-300 dark:text-blue-600 font-bold text-2xl">
        <CountUp start={0} end={value} duration={2.5} separator=","/>+
      </span>
      <p className="text-shadow-stone-700 text-shadow-sm">{label}</p>
    </div>
  );
}
