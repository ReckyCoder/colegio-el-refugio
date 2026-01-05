export type Item = {
    title: string;
    description: string;
    svg: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export type CarouselHome = Pick<Item, "title" | "description"> & {
    image: string;
}

export type AboutItems = CarouselHome;

export type FormContact = {
    nombre: string;
    correo: string;
    mensaje: string;
}