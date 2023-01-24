import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";

import Link from "next/link";

import { Noticias } from "../pages";

export function NewsSlider({ noticias }: Noticias) {
  return (
    <div className="relative p-3">
        <Swiper
        modules={[Pagination, Navigation]}
        slidesPerView={1}
        spaceBetween={1}
        navigation={{
            prevEl: '.prev',
            nextEl: '.next',
        }}
        breakpoints={{
            640: {
            slidesPerView: 2,
            },
            768: {
            slidesPerView: 4,
            },
            1024: {
            slidesPerView: 5,
            },
        }}
        >
        {noticias.map((noticia) => (
            <SwiperSlide key={noticia.id}>
            <Link href={`/noticias/${noticia.slug}`}>
                <div className="m-4 max-w-sm overflow-hidden min-h-[288px] slide-border">
                <div className="p-1">
                    <img
                    className="object-cover"
                    src={noticia.imagemFundo.url}
                    alt=""
                    />
                </div>
                <div className="px-3 py-4 ">
                    <h2 className="text-lg font-extralight uppercase">
                    {noticia.titulo}
                    </h2>
                </div>
                </div>
            </Link>
            </SwiperSlide>
        ))}
        </Swiper>
        <div className="prev bg-slate-600 w-3 h-4 absolute left-[0px] top-[50%] cursor-pointer" />
        <div className="next bg-green-600 w-3 h-4 absolute right-[0px] top-[50%] cursor-pointer" />
    </div>
  );
}
