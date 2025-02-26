"use client";

import Carousel from "@/components/ui/carousel";
export function CarouselDemo() {
    const slideData = [
        {
            title: "Atracciones increíbles",
            src: "https://images.pexels.com/photos/14603496/pexels-photo-14603496.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            title: "Sumérgete en la aventura",
            src: "https://images.pexels.com/photos/13760363/pexels-photo-13760363.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            title: "Diviértete como nunca",
            src: "https://images.pexels.com/photos/4306930/pexels-photo-4306930.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            title: "Diversión extrema",
            src: "https://images.pexels.com/photos/10816936/pexels-photo-10816936.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            title: "Para toda la familia",
            src: "https://images.pexels.com/photos/8094751/pexels-photo-8094751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
    ];
    return (
        <div className="relative overflow-hidden w-full h-full py-20">
            <Carousel slides={slideData} />
        </div>
    );
}
