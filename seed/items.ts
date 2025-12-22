import type { Item } from "@/types/types";
import { LightBulbIcon, PaintBrushIcon, AcademicCapIcon, BookOpenIcon } from "@heroicons/react/24/outline";

export const items: Item[] = [
    {
        title: "Pensamiento Crítico",
        description:
        "Fomentamos la curiosidad, el análisis y la capacidad de resolver problemas desde una edad temprana.",
        svg: LightBulbIcon,
    },
    {
        title: "Expresión Creativa",
        description:
        "Impulsamos la creatividad a través del arte, la imaginación y la libre expresión.",
        svg: PaintBrushIcon,
    },
    {
        title: "Formación Integral",
        description:
        "Acompañamos el desarrollo académico, social y emocional de cada estudiante.",
        svg: AcademicCapIcon,
    },
    {
        title: "Aprendizaje Activo",
        description:
        "Promovemos el aprendizaje significativo mediante la participación y el descubrimiento.",
        svg: BookOpenIcon,
    },
]