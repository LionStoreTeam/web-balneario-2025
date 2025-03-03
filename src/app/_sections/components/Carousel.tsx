"use client";

import Carousel from "@/components/ui/carousel";
export function CarouselDemo() {
    const slideData = [
        {
            title: "Relájate en nuestra alberca",
            src: "8.jpeg",
        },
        {
            title: "Sumérgete en la aventura",
            src: "3.jpeg",
        },
        {
            title: "Diviértete como nunca",
            src: "6.jpeg",
        },
        {
            title: "Disfruta del Sol y la Naturaleza",
            src: "2.jpeg",
        },
        {
            title: "Vistas increíbles",
            src: "4.jpeg",
        },
        {
            title: "Para toda la familia",
            src: "11.jpg",
        },
    ];
    return (
        <div className="relative overflow-hidden w-full h-full py-20">
            <Carousel slides={slideData} />
        </div>
    );
}
