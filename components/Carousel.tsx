'use client';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { carouselHome } from "@/seed/carouselHome";
import Image from "next/image";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";


type ArrowProps = {
  className?: string;
  onClick?: () => void;
};

export function NextArrow({ className, onClick }: ArrowProps) {
    return (
        <button
            type="button"
            className={`slick-arrow-custom next ${className}`}
            onClick={onClick}
            aria-label="Next"
        />
    );
}

export function PrevArrow({ className, onClick }: ArrowProps) {
    return (
        <button
        type="button"
        className={`slick-arrow-custom prev ${className}`}
        onClick={onClick}
        aria-label="Previous"
        />
    );
}


export default function Carousel() {
     var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };
    return (
        <Slider className="text-center flex flex-col justify-center items-center max-w-3xl mx-auto" {...settings}>
            {carouselHome.map((item, index) => (
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                <div key={index} className="flex justify-center items-center py-10">
                    <div className="flex flex-col md:flex-row justify-center items-center gap-y-20 gap-x-20 md:gap-x-10 px-3 relative">
                        <div className="w-full flex justify-center items-center">
                            <Image className="z-1 w-80 my-auto bg-blue-900 dark:bg-blue-900 rounded-2xl p-10" src={item.image} alt="image carousel" width={1980} height={1080}/>
                            <div className="w-11/12 md:w-87 absolute md:left-0 bg-amber-300 h-30 rounded-xl"></div>
                        </div>
                        <div className="z-1 text-stone-100 text-shadow-lg text-shadow-stone-800 flex flex-col gap-y-5">
                            <p className="text-2xl font-bold">{item.title}</p>
                            <p>{item.description}</p>
                        </div>
                    </div>
                </div>
            ))}
        </Slider>
    );
}
